import React from "react";
import styles from './Count.module.css';
import Image from "next/image";

export default function Count() {
    return (
        <>
            <div className={styles.Count}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-12">
                            <div className={styles.CountBox}>
                                <div className={styles.CountIcon}>
                                   <Image src="/images/Counter/finished_project.png" 
                                   alt="psd-to-html"
                                   height={119}
                                   width={112}
                                   />
                                   
                                </div>
                                <p className={styles.Number}>1000+</p>
                                   <p className={styles.Text}>Finished Projects</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-12">
                            <div className={styles.CountBox}>
                                <div className={styles.CountIcon}>
                                   <Image src="/images/Counter/year_existence.png" 
                                   alt="psd-to-html"
                                   height={119}
                                   width={77}
                                   />
                                   
                                </div>
                                <p className={styles.Number}>8+</p>
                                   <p className={styles.Text}>Years of existence</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-12">
                            <div className={styles.CountBox}>
                                <div className={styles.CountIcon}>
                                   <Image src="/images/Counter/customer_satisfaction.png" 
                                   alt="psd-to-html"
                                   height={119}
                                   width={112}
                                   />
                                   
                                </div>
                                <p className={styles.Number}>100%</p>
                                   <p className={styles.Text}>Customer Satisfaction</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-12">
                            <div className={styles.CountBox}>
                                <div className={styles.CountIcon}>
                                   <Image src="/images/Counter/countries_served.png" 
                                   alt="psd-to-html"
                                   height={119}
                                   width={112}
                                   />
                                   
                                </div>
                                <p className={styles.Number}>12+</p>
                                   <p className={styles.Text}>Countries We Have Served</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}