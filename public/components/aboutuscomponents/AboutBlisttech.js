import React from 'react'
import styles from './AboutBlisttech.module.css';

export default function AboutBlisttech() {
  return (
    <>
      <div className={styles.aboutBT}>
        <div className="container-fluid">
          <div className={`row  ${styles.AboutBox}`}>
            <div className={`col-6 ${styles.about}`}>
              <h3>ABOUT US</h3>
              <p>We here in BlistTech, Chandigarh provide extremely functional, flexible and creative websites that can boost up your business.We offer the perfect blend of designs, creativity &amp; technology that can convert your company name into a global brand.</p>
              <p>We are committed towards achieving high levels of customer satisfaction by ensuring to provide best quality and cost effective business structure. </p>
              <p>With our team of the most talented individuals in the industry working for us, we have the resources and expertise to inspire confidence, no matter the size of your business or the scope of your project.</p>
            </div>
            <div className={`col-6 ${styles.contact}`}>
              <h3>CONTACT US</h3>
              {/*  <input className={`form-control  ${styles.form}`} type="text" value="Name" aria-label="Disabled input example" disabled readonly />
              <input className={`form-control  ${styles.form}`} type="text" value="Email Address" aria-label="Disabled input example" disabled readonly />
              <input className={`form-control  ${styles.form}`} type="text" value="Phone Number" aria-label="Disabled input example" disabled readonly />
              <input className={`form-control  ${styles.form}`} type="text" value="Comment" aria-label="Disabled input example" disabled readonly />
             */}
              <form>
                <div className="mb-3">
                  <input type="text" className={`form-control border-bottom  ${styles.form}`} value="Name" />
                </div>
                <div className="mb-3">
                  <input type="text" className={`form-control border-bottom  ${styles.form}`} value="Email Address" />
                </div>
                <div className="mb-3">
                  <input type="text" className={`form-control border-bottom  ${styles.form}`} value="Phone Number" />
                </div>
                <div className="mb-3">
                  <input type="text" className={`form-control border-bottom  ${styles.formComent}`} value="Coment" />
                </div>
                <div className="d-grid gap-2">
                  <button className={`btn border  ${styles.button}`} type="button">SEND</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
