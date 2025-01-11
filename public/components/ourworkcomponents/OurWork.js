import React from "react";
import styles from './OurWork.module.css';
import Image from "next/image";


export default function OurWork() {
    return (
        <>
            <div className={styles.OurWork}>
                <div className="container">
                    <h2 className="heading">Our Work</h2>
                    <div className="row">
                        <div className="col-md-3 col-12">
                            <div className="card rounded-0 border border-0" style={{ width: "284px", overflow: "hidden" }}>
                                <div className={styles.CardImg}>
                                    <Image
                                        src="/images/ourwork/caravanPlus.jpg"
                                        className={`card-img-top ${styles.zoom}`}
                                        alt="psd-to-html"
                                        height={284}
                                        width={284}
                                    />
                                    <div className={styles.overlay}>
                                        <div className={styles.text}><p>CARAVANPLUS</p><p>website</p></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-12">
                            <div className="card rounded-0 border border-0" style={{ width: "284px", overflow: "hidden" }}>
                                <div className={styles.CardImg}>
                                    <Image
                                        src="/images/ourwork/alpha-defense.jpg"
                                        className={`card-img-top ${styles.zoom}`}
                                        alt="psd-to-html"
                                        height={284}
                                        width={284}
                                    />
                                </div>
                            </div>
                        </div><div className="col-md-3 col-12">
                            <div className="card rounded-0 border border-0" style={{ width: "284px", overflow: "hidden" }}>
                                <div className={styles.CardImg}>
                                    <Image
                                        src="/images/ourwork/measure.jpg"
                                        className={`card-img-top ${styles.zoom}`}
                                        alt="psd-to-html"
                                        height={284}
                                        width={284}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-12">
                            <div className="card rounded-0 border border-0" style={{ width: "284px", overflow: "hidden" }}>
                                <div className={styles.CardImg}>
                                    <Image
                                        src="/images/ourwork/3gcollect.jpg"
                                        className={`card-img-top ${styles.zoom}`}
                                        alt="psd-to-html"
                                        height={284}
                                        width={284}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row py-1">
                        <div className="col-md-3 col-12">
                            <div className="card rounded-0 border border-0" style={{ width: "284px", overflow: "hidden" }}>
                                <div className={styles.CardImg}>
                                    <Image
                                        src="/images/ourwork/apex-gulf.jpg"
                                        className={`card-img-top ${styles.zoom}`}
                                        alt="psd-to-html"
                                        height={284}
                                        width={284}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-12">
                            <div className="card rounded-0 border border-0" style={{ width: "284px", overflow: "hidden" }}>
                                <div className={styles.CardImg}>
                                    <Image
                                        src="/images/ourwork/ncrease.jpg"
                                        className={`card-img-top ${styles.zoom}`}
                                        alt="psd-to-html"
                                        height={284}
                                        width={284}
                                    />
                                </div>
                            </div>
                        </div><div className="col-md-3 col-12">
                            <div className="card rounded-0 border border-0" style={{ width: "284px", overflow: "hidden" }}>
                                <div className={styles.CardImg}>
                                    <Image
                                        src="/images/ourwork/esl.jpg"
                                        className={`card-img-top ${styles.zoom}`}
                                        alt="psd-to-html"
                                        height={284}
                                        width={284}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-12">
                            <div className="card rounded-0 border border-0" style={{ width: "284px", overflow: "hidden" }}>
                                <div className={styles.CardImg}>
                                    <Image
                                        src="/images/ourwork/teknicforce.jpg"
                                        className={`card-img-top ${styles.zoom}`}
                                        alt="psd-to-html"
                                        height={284}
                                        width={284}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    );
}