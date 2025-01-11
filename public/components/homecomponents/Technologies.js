import React from "react";
import styles from './Technologies.module.css';
import Image from "next/image";

export default function Technologies() {
    return (
        <>
            <div className={`bg-light-subtle ${styles.Technologies}`}>
                <div className="container py-4 m-auto">
                    <h2 className="heading">Technologies Used</h2>
                    <div className="TechnologiesIcon">
                        <ul>
                            <li>
                                <div className="TechnologiesImg">
                                    <Image
                                        src="/images/technologies/dream.png"
                                        alt="psd-to-html"
                                        height={113}
                                        width={113}
                                    />
                                </div>
                            </li>
                            <li>
                                <div className="TechnologiesImg">
                                    <Image
                                        src="/images/technologies/photoshop.png"
                                        alt="psd-to-html"
                                        height={113}
                                        width={113}
                                    />
                                </div>
                            </li>
                            <li>
                                <div className="TechnologiesImg">
                                    <Image
                                        src="/images/technologies/html.png"
                                        alt="psd-to-html"
                                        height={113}
                                        width={113}
                                    />
                                </div>
                            </li>
                            <li>
                                <div className="TechnologiesImg">
                                    <Image
                                        src="/images/technologies/css.png"
                                        alt="psd-to-html"
                                        height={113}
                                        width={113}
                                    />
                                </div>
                            </li>
                            <li>
                                <div className="TechnologiesImg">
                                    <Image
                                        src="/images/technologies/js.png"
                                        alt="psd-to-html"
                                        height={113}
                                        width={113}
                                    />
                                </div>
                            </li>
                            <li>
                                <div className="TechnologiesImg">
                                    <Image
                                        src="/images/technologies/wordpress.png"
                                        alt="psd-to-html"
                                        height={113}
                                        width={113}
                                    />
                                </div>
                            </li>
                            <li>
                                <div className="TechnologiesImg">
                                    <Image
                                        src="/images/technologies/php.png"
                                        alt="psd-to-html"
                                        height={113}
                                        width={113}
                                    />
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}