import React from 'react'
import styles from './contact.module.css';
import Image from 'next/image';

export default function Contact() {
    return (
        <>
            <div className={styles.Contact}>
                <div className="container">
                    <ul className="row py-4 m-0">
                        <li className="col">
                            <div className={styles.ContactImg}>
                                <Image
                                    src="/images/Contact/location.png"
                                    alt="locaton"
                                    height={56}
                                    width={70}
                                />
                            </div>
                            <div className={styles.content}>
                                <h4>LOCATION</h4>
                                <p className="m-0">Chandigarh, India</p>
                            </div>
                        </li>
                        <li className="col">
                            <div className={styles.ContactImg}>
                                <Image
                                    src="/images/Contact/email.png"
                                    alt="locaton"
                                    height={56}
                                    width={70}
                                />
                            </div>
                            <div className={styles.content}>
                                <h4>EMAIL</h4>
                                <p className="m-0">blisttech@gmail.com</p>
                            </div>
                        </li>
                        <li className="col">
                            <div className={styles.ContactImg}>
                                <Image
                                    src="/images/Contact/skype.png"
                                    alt="locaton"
                                    height={56}
                                    width={70}
                                />
                            </div>
                            <div className={styles.content}>
                                <h4>SKYPE</h4>
                                <p className="m-0">blisttech</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}