import styles from './Summary.module.css'
import { getSummary, analyzeDrive } from '../../../api/api'
import type { RiskSummary } from './SummaryTypes'
import { useEffect, useState } from 'react'
import CircularProgress from '@mui/material/CircularProgress';

const polarToCartesian = (cx: number, cy: number, radius: number, angleInDegrees: number) => {
    const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180
    return {
        x: cx + radius * Math.cos(angleInRadians),
        y: cy + radius * Math.sin(angleInRadians),
    }
}

const describeSlice = (cx: number, cy: number, radius: number, startAngle: number, endAngle: number) => {
    const start = polarToCartesian(cx, cy, radius, endAngle)
    const end = polarToCartesian(cx, cy, radius, startAngle)
    const largeArcFlag = endAngle - startAngle <= 180 ? 0 : 1

    return [
        `M ${cx} ${cy}`,
        `L ${start.x} ${start.y}`,
        `A ${radius} ${radius} 0 ${largeArcFlag} 0 ${end.x} ${end.y}`,
        'Z',
    ].join(' ')
}

const Summary = () => {
    const [summary, setSummary] = useState<RiskSummary | null>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchDashboardData = async () => {
            try {
                const data = await getSummary();
                setSummary(data);
            }
            catch (err) {
                console.error(err);
            }
        }

        fetchDashboardData();
    }, [])

    const handleAnalyze = async () => {
        try {
            setLoading(true);
            await analyzeDrive();
            setLoading(false);
        }
        catch (err) {
            console.log(err)
        }
    }

    const totalFiles = summary?.totalAnalyzed ?? 0;

    const riskLevels = [
        { label: 'Low', count: summary?.breakdown?.LOW ?? 0, color: '#34a853' },
        { label: 'Medium', count: summary?.breakdown?.MEDIUM ?? 0, color: '#f9ab00' },
        { label: 'High', count: summary?.breakdown?.HIGH ?? 0, color: '#fa7b17' },
        { label: 'Critical', count: summary?.breakdown?.CRITICAL ?? 0, color: '#d93025' }
    ];

    const getSlices = () => {
        if (totalFiles === 0) return [];
        let startAngle = 0;
        return riskLevels.map((level) => {
            const angle = (level.count / totalFiles) * 360;
            const endAngle = startAngle + angle;
            const path = describeSlice(100, 100, 90, startAngle, endAngle || startAngle + 0.01);
            startAngle = endAngle;
            return { ...level, path };
        });
    };

    const slices = getSlices();

    return (
        <section className={styles.container}>
            <div className={styles.headPanel}>
                <header className={styles.header}>
                    <h2>Risk Summary</h2>
                    <p>Snapshot of your Drive analysis results</p>
                </header>

                <div className={styles.analyzeSlot}>
                    {loading ?
                        <CircularProgress color="success" size={28} />
                        :
                        <button type="button" className={styles.analyzeBtn} onClick={handleAnalyze}>
                            Analyze Drive
                        </button>
                    }
                </div>
            </div>

            <div className={styles.overall}>
                <div className={styles.box}>
                    <span>Overall Risk Level</span>
                    <span>{summary?.overallRiskLevel}</span>
                </div>
                <div className={styles.box}>
                    <span>Average Risk Score</span>
                    <span>{summary?.averageRiskScore}</span>
                </div>
                <div className={styles.box}>
                    <span>Total Analyzed</span>
                    <span>{summary?.totalAnalyzed}</span>
                </div>
            </div>

            <div className={styles.breakdown}>
                <div className={styles.breakdownLeft}>
                    <svg viewBox="0 0 200 200" className={styles.pie}>
                        {slices.map((slice) => (
                            <path
                                key={slice.label}
                                d={slice.path}
                                fill={slice.color}
                                stroke="#ffffff"
                                strokeWidth="2"
                            />
                        ))}
                        <circle cx="100" cy="100" r="50" fill="#ffffff" />
                        <text x="100" y="106" textAnchor="middle" className={styles.pieTotal}>
                            {totalFiles}
                        </text>
                    </svg>
                </div>

                <div className={styles.breakdownRight}>
                    <div className={styles.criticality}>
                        <span>Low</span>
                        <span style={{ color: '#34a853' }}>{summary?.breakdown.LOW}</span>
                    </div>
                    <div className={styles.criticality}>
                        <span>Medium</span>
                        <span style={{ color: '#f9ab00' }}>{summary?.breakdown.MEDIUM}</span>
                    </div>
                    <div className={styles.criticality}>
                        <span>High</span>
                        <span style={{ color: '#fa7b17' }}>{summary?.breakdown.HIGH}</span>
                    </div>
                    <div className={styles.criticality}>
                        <span>Critical</span>
                        <span style={{ color: '#d93025' }}>{summary?.breakdown.CRITICAL}</span>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Summary
