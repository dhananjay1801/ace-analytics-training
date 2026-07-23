import styles from './Navbar.module.css'
import profile from '../../../assets/profile.png'
import { getCurrUser, logout } from '../../../api/api'
import { useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

interface UserData {
    email: string;
    id: string;
    canAccessDrive: boolean;
}

const Navbar = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState<UserData>({
        email: "",
        id: "",
        canAccessDrive: false,
    });
    const [showProfile, setShowProfile] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    const handleLogOut = async () => {
        try {
            await logout();
            navigate('/login', { replace: true });
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        const fetchCurrUser = async () => {
            try {
                const data = await getCurrUser();
                setUserData(data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchCurrUser();
    }, [])

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                setShowProfile(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [])

    return (
        <nav className={styles.nav}>
            <div className={styles.left}>
                <div className={styles.brandText}>
                    <span className={styles.title}>Drive Risk Analysis</span>
                    <span className={styles.subtitle}>Security overview</span>
                </div>
            </div>

            <div className={styles.right} ref={ref}>
                <button
                    type="button"
                    className={styles.userBtn}
                    onClick={() => setShowProfile((prev) => !prev)}
                    aria-expanded={showProfile}
                >
                    <img src={profile} alt="" className={styles.avatar} />
                    <div className={styles.userMeta}>
                        <span className={styles.email}>{userData.email || 'Loading…'}</span>
                        <span className={styles.access}>
                            {userData.canAccessDrive ? 'Drive connected' : 'Drive not connected'}
                        </span>
                    </div>
                </button>

                <button type="button" className={styles.logoutBtn} onClick={handleLogOut}>
                    Log Out
                </button>

                {showProfile && (
                    <div className={styles.profile}>
                        <div className={styles.profileHeader}>
                            <img src={profile} alt="" className={styles.profileAvatar} />
                            <div>
                                <p className={styles.profileEmail}>{userData.email}</p>
                                <p className={styles.profileId}>ID · {userData.id || '—'}</p>
                            </div>
                        </div>

                        <div className={styles.profileRow}>
                            <span>Drive Access</span>
                            <span>
                                {userData.canAccessDrive ? 'Yes' : 'No'}
                            </span>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar
