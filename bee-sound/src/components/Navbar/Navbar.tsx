import React from 'react'
import { Box } from '@mui/material'
import styles from './Navbar.module.css'

const Navbar = () => {
    return (
        <>
            <Box className={styles.navbar}>
                <div className={styles.title}>
                    <span className={styles.logo}>
                        <svg width="14" height="19" viewBox="0 0 14 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.5 2.03571V16.9643M5.7 4.74999V14.25M3.1 6.78571V12.2143M13.5 2.03571V16.9643M10.9 4.74999V14.25M8.3 6.78571V12.2143" stroke="#1B234A" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </span>
                    <span className={styles.text}>
                        BeeSound
                    </span>
                </div>

                <div className={styles.navigation}>
                    <div>Our Collection</div>
                    <div>New Arrivals</div>
                    <div>For Gamers</div>
                </div>

                <div className={styles.navRight}>
                    <div className={styles.icons}>
                        <div>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21 21L16.657 16.657M16.657 16.657C17.3998 15.9141 17.9891 15.0322 18.3912 14.0615C18.7932 13.0909 19.0002 12.0506 19.0002 11C19.0002 9.94939 18.7932 8.90908 18.3912 7.93845C17.9891 6.96782 17.3998 6.08588 16.657 5.34299C15.9141 4.6001 15.0321 4.01081 14.0615 3.60877C13.0909 3.20672 12.0506 2.99979 11 2.99979C9.94936 2.99979 8.90905 3.20672 7.93842 3.60877C6.96779 4.01081 6.08585 4.6001 5.34296 5.34299C3.84263 6.84332 2.99976 8.87821 2.99976 11C2.99976 13.1218 3.84263 15.1567 5.34296 16.657C6.84329 18.1573 8.87818 19.0002 11 19.0002C13.1217 19.0002 15.1566 18.1573 16.657 16.657Z" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                        </div>
                        <div>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.86403 16.455C3.00603 13.023 2.57703 11.308 3.47803 10.154C4.37803 9 6.14803 9 9.68503 9H14.315C17.853 9 19.621 9 20.522 10.154C21.423 11.307 20.994 13.024 20.136 16.455C19.59 18.638 19.318 19.729 18.504 20.365C17.69 21 16.565 21 14.315 21H9.68503C7.43503 21 6.31003 21 5.49603 20.365C4.68203 19.729 4.40903 18.638 3.86403 16.455Z" stroke="black" stroke-width="1.5" />
                                <path d="M19.5 9.5L18.79 6.895C18.516 5.89 18.379 5.388 18.098 5.009C17.8178 4.63246 17.4373 4.3424 17 4.172C16.56 4 16.04 4 15 4M4.5 9.5L5.21 6.895C5.484 5.89 5.621 5.388 5.902 5.009C6.18218 4.63246 6.56269 4.3424 7 4.172C7.44 4 7.96 4 9 4" stroke="black" stroke-width="1.5" />
                                <path d="M9 4C9 3.73478 9.10536 3.48043 9.29289 3.29289C9.48043 3.10536 9.73478 3 10 3H14C14.2652 3 14.5196 3.10536 14.7071 3.29289C14.8946 3.48043 15 3.73478 15 4C15 4.26522 14.8946 4.51957 14.7071 4.70711C14.5196 4.89464 14.2652 5 14 5H10C9.73478 5 9.48043 4.89464 9.29289 4.70711C9.10536 4.51957 9 4.26522 9 4Z" stroke="black" stroke-width="1.5" />
                            </svg>
                        </div>
                    </div>

                    <div className={styles.signInBtn}>
                        Sign in / Sign Up
                    </div>
                </div>
            </Box>
        </>
    )
}

export default Navbar