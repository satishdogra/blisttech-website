import React from "react";
import styles from './Process.module.css';
import Image from "next/image";

export default function Process() {
    return (
        <>
            <div className={styles.Process}>
                <div className="container">
                    <h2 className="heading">Process</h2>
                    <p>We have simple 3 steps process<br />
                        Hassle-free process, budget websites, fast building.</p>
                    <a>MORE ABOUT US +</a>
                    <div className="row py-5">
                        <div className="col-md-4 col-12">
                            <div className="card rounded-0" style={{ maxWidth: '100%' }}>
                                <div className={styles.CardImg}>
                                    <Image
                                        src="/images/process/step-1.png"
                                        className={`card-img-top border-bottom ${styles.zoom}`}
                                        alt="psd-to-html"
                                        height={179}
                                        width={353}
                                    />
                                </div>
                                <h3 className={styles.Subheading}>Planning & Strategy</h3>
                            </div>
                        </div>
                        <div className="col-md-4 col-12">
                            <div className="card rounded-0" style={{ maxWidth: '100%' }}>
                                <div className={styles.CardImg}>
                                    <Image
                                        src="/images/process/step-2.png"
                                        className={`card-img-top border-bottom ${styles.zoom}`}
                                        alt="psd-to-html"
                                        height={179}
                                        width={353}
                                    />
                                </div>
                                <h3 className={styles.Subheading}>Design & Develop</h3>
                            </div>
                        </div>
                        <div className="col-md-4 col-12">
                            <div className="card rounded-0" style={{ maxWidth: '100%' }}>
                                <div className={styles.CardImg}>
                                    <Image
                                        src="/images/process/step-3.png"
                                        className={`card-img-top border-bottom ${styles.zoom}`}
                                        alt="psd-to-html"
                                        height={179}
                                        width={353}
                                    />
                                </div>
                                <h3 className={styles.Subheading}>Test & Deliver</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}