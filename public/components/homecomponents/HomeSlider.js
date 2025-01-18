import React from 'react'
import styles from './HomeSlider.module.css';

export default function HomeSlider() {
  return (
    <>
      <div className={styles.HomeSlider}>
        <div className={`py-5 text-center container-flude ${styles.banner}`}>
        <div className="row py-lg-5">
          <h1 className="fw-medium "><strong>BlistTech</strong></h1><br />
          <h1 className="fw-medium"><strong>Web Designing &amp; Development Firm</strong></h1><br />
          <h2 className="fw-light">From Planning to post launch , we help you to</h2>
          <h2 className="fw-medium m-0"><strong>stand out in any screen.!</strong></h2>
        </div>
      </div>
      </div>
    </>
  )
}
