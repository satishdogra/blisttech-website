import React from "react";
import styles from './OurExperties.module.css';
import Image from "next/image";

export default function OurExperties() {
    return (
        <>
            <div className={styles.ourexperties}>
                <div className="container">
                    <h2 className="heading">Our Experties</h2>
                    <div className="row">
                        <div className="col-md-3 col-12">
                            <div className="card shadow bg-body-tertiary rounded" style={{ width: "251px",overflow:"hidden"}}>
                               <div className={styles.CardImg}>
                                <Image
                                    src="/images/ourexperties/psd-to-html.jpg"
                                    className={`card-img-top ${styles.zoom}`}
                                    alt="psd-to-html"
                                    height={251}
                                    width={251}
                                />
                                </div>
                                <div className="card-body">
                                    <h6 className="card-title m-0">PSD To HTML<i className={`bi bi-arrow-right ${styles.righterrow}`}></i></h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-12">
                            <div className="card shadow bg-body-tertiary rounded" style={{ width: "251px",overflow:"hidden" }}>
                                <div className={styles.CardImg}>
                                <Image
                                    src="/images/ourexperties/responsive.jpg"
                                    className={`card-img-top ${styles.zoom}`}                                    alt="psd-to-html"
                                    height={251}
                                    width={251}
                                />
                                </div>
                                <div className="card-body">
                                    <h6 className="card-title m-0">Responsive Design <i className={`bi bi-arrow-right ${styles.righterrow}`}></i></h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-12">
                            <div className="card shadow bg-body-tertiary rounded" style={{ width: "251px",overflow:"hidden" }}>
                                <div className={styles.CardImg}>
                                <Image
                                    src="/images/ourexperties/landing-page-design.jpg"
                                    className={`card-img-top ${styles.zoom}`}                                    alt="psd-to-html"
                                    height={251}
                                    width={251}
                                />
                                </div>
                                <div className="card-body">
                                    <h6 className="card-title m-0">Landing Page Design<i className={`bi bi-arrow-right ${styles.righterrow}`}></i></h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-12">
                            <div className="card shadow bg-body-tertiary rounded" style={{ width: "251px",overflow:"hidden" }}>
                                <div className={styles.CardImg}>
                                <Image
                                    src="/images/ourexperties/logo-design.jpg"
                                    className={`card-img-top ${styles.zoom}`}                                    alt="psd-to-html"
                                    height={251}
                                    width={251}
                                />
                                </div>
                                <div className="card-body">
                                    <h6 className="card-title m-0">Logo Design<i className={`bi bi-arrow-right ${styles.righterrow}`}></i></h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row my-5">
                        <div className="col-md-3 col-12">
                            <div className="card shadow bg-body-tertiary rounded" style={{ width: "251px",overflow:"hidden" }}>
                                <div className={styles.CardImg}>
                                <Image
                                    src="/images/ourexperties/graphics.jpg"
                                    className={`card-img-top ${styles.zoom}`}                                    alt="psd-to-html"
                                    height={251}
                                    width={251}
                                />
                                </div>
                                <div className="card-body">
                                    <h6 className="card-title m-0">Graphics Design<i className={`bi bi-arrow-right ${styles.righterrow}`}></i></h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-12">
                            <div className="card shadow bg-body-tertiary rounded" style={{ width: "251px",overflow:"hidden" }}>
                                <div className={styles.CardImg}>
                                <Image
                                    src="/images/ourexperties/html-to-wp.jpg"
                                    className={`card-img-top ${styles.zoom}`}                                    alt="psd-to-html"
                                    height={251}
                                    width={251}
                                />
                                </div>
                                <div className="card-body">
                                    <h6 className="card-title m-0">Html To WordPress<i className={`bi bi-arrow-right ${styles.righterrow}`}></i></h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-12">
                            <div className="card shadow bg-body-tertiary rounded" style={{ width: "251px",overflow:"hidden" }}>
                                <div className={styles.CardImg}>
                                <Image
                                    src="/images/ourexperties/seo.jpg"
                                    className={`card-img-top ${styles.zoom}`}                                    alt="psd-to-html"
                                    height={251}
                                    width={251}
                                />
                                </div>
                                <div className="card-body">
                                    <h6 className="card-title m-0">Search Engine Optimization<i className={`bi bi-arrow-right ${styles.righterrow}`}></i></h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-12">
                            <div className="card shadow bg-body-tertiary rounded" style={{ width: "251px",overflow:"hidden" }}>
                                <div className={styles.CardImg}>
                                <Image
                                    src="/images/ourexperties/development.jpg"
                                    className={`card-img-top ${styles.zoom}`}                                    alt="psd-to-html"
                                    height={251}
                                    width={251}
                                />
                                </div>
                                <div className="card-body">
                                    <h6 className="card-title m-0">Web Development<i className={`bi bi-arrow-right ${styles.righterrow}`}></i></h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
