import React from "react";
import styles from "./BlisttechContactStrip.module.css";
import Image from "next/image";

export default function BlisttechContactStrip() {
  return (
    <>
      <div className={styles.Contact}>
        <div className="container">
          <ul className="row py-4 m-0">
            <li className="col">
              <div className={styles.ContactImg}>
                <Image
                  src="/images/Contact/location.png"
                  alt="Location"
                  height={56}
                  width={70}
                />
              </div>
              <div className={styles.ContentText}>
                <h4>LOCATION</h4>
                <p className="m-0"><a href="https://maps.app.goo.gl/g1RwQrxVPp9DA4AT8" target="_blank" title="Chandighar">Chandigarh, India</a></p>
              </div>
            </li>
            <li className="col">
              <div className={styles.ContactImg}>
                <Image
                  src="/images/Contact/email.png"
                  alt="Email"
                  height={56}
                  width={70}
                />
              </div>
              <div className={styles.ContentText}>
                <h4>EMAIL</h4>
                <p className="m-0"><a href="mailto:blisttech@gmail.com" title="blisttech@gmail.com">blisttech@gmail.com</a></p>
                
              </div>
            </li>
            <li className="col">
              <div className={styles.ContactImg}>
                <Image
                  src="/images/Contact/skype.png"
                  alt="Skype"
                  height={56}
                  width={70}
                />
              </div>
              <div className={styles.ContentText}>
                <h4>SKYPE</h4>
                <p className="m-0"><a href="skype:blisttech?chat" title="blisttech">blisttech</a></p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
