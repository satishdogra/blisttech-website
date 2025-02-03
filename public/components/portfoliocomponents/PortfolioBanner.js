import React from 'react'
import styles from './PortfolioBanner.module.css';

export default function PortfolioBanner() {
    return (
        <>
            <div className={styles.portfolioBanner}>
                <div className={`container py-5 ${styles.banner}`}>
                    <h1>OUR<strong>WORK</strong></h1>
                </div>
            </div>
            
        </>
    )
}