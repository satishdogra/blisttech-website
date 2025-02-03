import React from 'react';
import styles from './OurSkill.module.css';
import Image from 'next/image';

export default function OurSkill() {
    return (
        <>
            <div className={styles.skill}>
                <div className={`container pt-5 ${styles.skill_box}`}>
                    <h3>Our Skill</h3>
                    <div className="row py-5">
                        <div className="col-sm-3 pt-15">
                            <div className={styles.single_skill}>
                                <div className={styles.photo_skill}>
                                    <p><em>90%</em></p>
                                    <p>Photoshop/<br />
                                        Graphics</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3 pt-15">
                            <div className={styles.single_skill}>
                                <div className={styles.html_skill}>
                                    <p><em>99%</em></p>
                                    <p>html/css</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3 pt-15">
                            <div className={styles.single_skill}>
                                <div className={styles.boot_skill}>
                                    <p><em>93%</em></p>
                                    <p>bootstrap</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3 pt-15">
                            <div className={styles.single_skill}>
                                <div className={styles.wp_skill}>
                                    <p><em>90%</em></p>
                                    <p>wordpress</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
