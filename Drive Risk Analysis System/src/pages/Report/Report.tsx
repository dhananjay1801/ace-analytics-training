import styles from './Report.module.css'
import { getReports } from '../../api/api'
import type { RiskAnalysis } from '../../components/Dashboard/Summary/SummaryTypes'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../components/Global/Navbar/Navbar'
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';

const LEVEL_COLOR: Record<string, string> = {
    LOW: '#34a853',
    MEDIUM: '#f9ab00',
    HIGH: '#fa7b17',
    CRITICAL: '#d93025',
}

const formatBytes = (bytes?: string) => {
    const value = Number(bytes);
    if (!value) return '—';
    const units = ['B', 'KB', 'MB', 'GB'];
    let size = value;
    let unitIndex = 0;
    while (size >= 1024 && unitIndex < units.length - 1) {
        size /= 1024;
        unitIndex++;
    }
    return `${size.toFixed(1)} ${units[unitIndex]}`;
}

const formatDate = (date?: string) => {
    if (!date) return '—';
    return new Date(date).toLocaleString();
}

const PAGE_SIZE = 20;

const Report = () => {
    const [reports, setReports] = useState<RiskAnalysis[]>([]);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [expandedId, setExpandedId] = useState<string | null>(null);
    const [filter, setFilter] = useState<string>('ALL');
    const [search, setSearch] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        let cancelled = false;

        const fetchReports = async () => {
            try {
                setLoading(true);
                const result = await getReports(page, PAGE_SIZE, filter);
                if (cancelled) return;
                setReports(result.data);
                setTotal(result.total);
            }
            catch (err) {
                console.error(err);
            }
            finally {
                if (!cancelled) setLoading(false);
            }
        }

        fetchReports();

        return () => {
            cancelled = true;
        }
    }, [page, filter])

    const visibleReports = search.trim()
        ? reports.filter((report) =>
            report.driveFile?.name?.toLowerCase().includes(search.trim().toLowerCase())
        )
        : reports;

    const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));

    const toggleExpand = (id: string) => {
        setExpandedId((prev) => (prev === id ? null : id));
    }

    const handleFilterChange = (level: string) => {
        setFilter(level);
        setPage(1);
        setExpandedId(null);
    }

    return (
        <>
            <Navbar />
            <section className={styles.container}>
                <div className={styles.header}>
                    <button type="button" className={styles.backBtn} onClick={() => navigate('/')}>
                        <KeyboardDoubleArrowLeftIcon />
                        <span>
                            Back to Dashboard
                        </span>
                    </button>
                    <div className={styles.headerRow}>
                        <div>
                            <h2>All Reports</h2>
                            <p>{total.toLocaleString()} files analyzed</p>
                        </div>

                        <div className={styles.filters}>
                            {['ALL', 'LOW', 'MEDIUM', 'HIGH', 'CRITICAL'].map((level) => (
                                <button
                                    key={level}
                                    type="button"
                                    className={`${styles.filterBtn} ${filter === level ? styles.filterActive : ''}`}
                                    style={filter === level && level !== 'ALL' ? { background: LEVEL_COLOR[level], borderColor: LEVEL_COLOR[level] } : undefined}
                                    onClick={() => handleFilterChange(level)}
                                >
                                    {level}
                                </button>
                            ))}
                        </div>
                    </div>

                    <input
                        type="text"
                        className={styles.searchInput}
                        placeholder="Search this page by file name…"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>

                {loading && <div className={styles.empty}>Loading reports…</div>}

                {!loading && visibleReports.length === 0 && (
                    <div className={styles.empty}>No reports found</div>
                )}

                {!loading && visibleReports.length > 0 && (
                    <div className={styles.tableWrap}>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>File</th>
                                    <th>Type</th>
                                    <th>Size</th>
                                    <th>Shared</th>
                                    <th>Risk Level</th>
                                    <th>Last Modified</th>
                                    <th>Link</th>
                                </tr>
                            </thead>
                            <tbody>
                                {visibleReports.map((report) => {
                                    const expanded = expandedId === report.id;

                                    return (
                                        <>
                                            <tr
                                                key={report.id}
                                                className={styles.row}
                                                onClick={() => toggleExpand(report.id)}
                                            >
                                                <td className={styles.chevronCell}>
                                                    <span className={styles.chevron}>{expanded ? '▲' : '▼'}</span>
                                                </td>
                                                <td className={styles.fileName}>{report.driveFile?.name ?? 'Untitled file'}</td>
                                                <td>{report.driveFile?.mimeType ?? '—'}</td>
                                                <td>{formatBytes(report.driveFile?.sizeBytes)}</td>
                                                <td className={report.driveFile?.sharedPublicly ? styles.warnValue : undefined}>
                                                    {report.driveFile?.sharedPublicly ? 'Yes' : 'No'}
                                                </td>
                                                <td>
                                                    <span
                                                        className={styles.badge}
                                                        style={{ color: LEVEL_COLOR[report.riskLevel], borderColor: LEVEL_COLOR[report.riskLevel] }}
                                                    >
                                                        {report.riskLevel}
                                                    </span>
                                                </td>
                                                <td>{formatDate(report.driveFile?.lastModified)}</td>
                                                <td onClick={(e) => e.stopPropagation()}>
                                                    {report.driveFile?.webViewLink ? (
                                                        <a href={report.driveFile.webViewLink} target="_blank" rel="noreferrer" className={styles.link}>
                                                            Open
                                                        </a>
                                                    ) : '—'}
                                                </td>
                                            </tr>

                                            {expanded && (
                                                <tr key={`${report.id}-detail`} className={styles.detailRow}>
                                                    <td colSpan={8}>
                                                        <div className={styles.detailInner}>
                                                            <div className={styles.metaItem}>
                                                                <span className={styles.metaLabel}>Analyzed On</span>
                                                                <span className={styles.metaValue}>{formatDate(report.createdAt)}</span>
                                                            </div>

                                                            {report.riskFactors?.length > 0 && (
                                                                <div className={styles.factors}>
                                                                    <span className={styles.factorsTitle}>Risk Factors</span>
                                                                    {report.riskFactors.map((factor, i) => (
                                                                        <div key={i} className={styles.factorRow}>
                                                                            <span className={styles.factorRule}>{factor.rule}</span>
                                                                            <span className={styles.factorWeight}>+{factor.weight}</span>
                                                                            <span className={styles.factorDesc}>{factor.description}</span>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            )}
                                                        </div>
                                                    </td>
                                                </tr>
                                            )}
                                        </>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                )}

                {!loading && total > 0 && (
                    <div className={styles.pagination}>
                        <button
                            type="button"
                            className={styles.pageBtn}
                            disabled={page <= 1}
                            onClick={() => setPage((p) => Math.max(1, p - 1))}
                        >
                            Prev
                        </button>

                        <span className={styles.pageInfo}>
                            Page {page} of {totalPages.toLocaleString()}
                        </span>

                        <button
                            type="button"
                            className={styles.pageBtn}
                            disabled={page >= totalPages}
                            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                        >
                            Next
                        </button>
                    </div>
                )}
            </section>
        </>
    )
}

export default Report
