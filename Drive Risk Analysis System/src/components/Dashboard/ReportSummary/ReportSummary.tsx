import styles from './ReportSummary.module.css'
import { getReports } from '../../../api/api'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

const ReportSummary = () => {
    const [total, setTotal] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchReports = async () => {
            try {
                const result = await getReports(1, 1);
                setTotal(result.total);
            }
            catch (err) {
                console.error(err);
            }
        }

        fetchReports();
    }, [])

    return (
        <section
            className={styles.container}
            role="button"
            tabIndex={0}
            onClick={() => navigate('/report')}
        >
            <div className={styles.header}>
                <div>
                    <h2>Reports</h2>
                    <p>Click to view all reports</p>
                </div>
                <span className={styles.arrow}>
                    <KeyboardDoubleArrowRightIcon/>
                </span>
            </div>

            <div className={styles.count}>
                <span className={styles.countValue}>{total.toLocaleString()}</span>
                <span className={styles.countLabel}>files analyzed</span>
            </div>
        </section>
    )
}

export default ReportSummary
