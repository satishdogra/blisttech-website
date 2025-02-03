import React from 'react'
import styles from './AboutMainBanner.module.css';
export default function AboutMainBanner() {
    return (
        <>
            <div className={styles.AboutMain}>
                <div className={`container py-5 ${styles.banner}`}>
                    <h1>ABOUT <strong>BLISTTECH</strong></h1>
                </div>
            </div>
            
        </>
    )
}