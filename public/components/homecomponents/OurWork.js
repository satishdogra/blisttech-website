import React from "react";
import styles from "./OurWork.module.css";
import Image from "next/image";

export default function OurWork() {
  return (
    <>
      <div className={styles.OurWork}>
        <div className="container">
          <h2 className="heading">Our Work</h2>
          <div className="row">
            <div className="col-md-3 col-12 p-0 column-gap-3">
              <div
                className="card rounded-0 border border-white"
                style={{ width: "100%", overflow: "hidden" }}
              >
                <div className={styles.CardImg}>
                  <Image
                    src="/images/ourwork/caravanPlus.jpg"
                    className={`card-img-top ${styles.zoom}`}
                    alt="psd-to-html"
                    height={286.75}
                    width={286.75}
                    style={{ width: "100%" }}
                  />
                  <div className={styles.overlay}>
                    <a href="#" className={styles.text}>
                      <p>CARAVANPLUS</p>
                      <p>Website</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-12 p-0">
              <div
                className="card rounded-0 border border-white"
                style={{ width: "100%", overflow: "hidden" }}
              >
                <div className={styles.CardImg}>
                  <Image
                    src="/images/ourwork/alpha-defense.jpg"
                    className={`card-img-top ${styles.zoom}`}
                    alt="psd-to-html"
                    height={286.75}
                    width={286.75}
                    style={{ width: "100%" }}
                  />
                  <div className={styles.overlay}>
                    <a href="#" className={styles.text}>
                      <p>ALPHADEFENSE</p>
                      <p>Website</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-12 p-0">
              <div
                className="card rounded-0 border border-white"
                style={{ width: "100%", overflow: "hidden" }}
              >
                <div className={styles.CardImg}>
                  <Image
                    src="/images/ourwork/measure.jpg"
                    className={`card-img-top ${styles.zoom}`}
                    alt="psd-to-html"
                    height={286.75}
                    width={286.75}
                    style={{ width: "100%" }}
                  />
                  <div className={styles.overlay}>
                    <a href="#" className={styles.text}>
                      <p>MEASUREANDDRAW</p>
                      <p>Website</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-12 p-0">
              <div
                className="card rounded-0 border border-white"
                style={{ width: "100%", overflow: "hidden" }}
              >
                <div className={styles.CardImg}>
                  <Image
                    src="/images/ourwork/3gcollect.jpg"
                    className={`card-img-top ${styles.zoom}`}
                    alt="psd-to-html"
                    height={286.75}
                    width={286.75}
                    style={{ width: "100%" }}
                  />
                  <div className={styles.overlay}>
                    <a href="#" className={styles.text}>
                      <p>COLLECTTOCELL</p>
                      <p>Website</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row py-1">
            <div className="col-md-3 col-12 p-0">
              <div
                className="card rounded-0 border border-white"
                style={{ width: "100%", overflow: "hidden" }}
              >
                <div className={styles.CardImg}>
                  <Image
                    src="/images/ourwork/apex-gulf.jpg"
                    className={`card-img-top ${styles.zoom}`}
                    alt="psd-to-html"
                    height={286.75}
                    width={286.75}
                    style={{ width: "100%" }}
                  />
                  <div className={styles.overlay}>
                    <a href="#" className={styles.text}>
                      <p>AGEFILMS</p>
                      <p>Website</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-12 p-0">
              <div
                className="card rounded-0 border border-white"
                style={{ width: "100%", overflow: "hidden" }}
              >
                <div className={styles.CardImg}>
                  <Image
                    src="/images/ourwork/ncrease.jpg"
                    className={`card-img-top ${styles.zoom}`}
                    alt="ncrease"
                    height={286.75}
                    width={286.75}
                    style={{ width: "100%" }}
                  />
                  <div className={styles.overlay}>
                    <a href="#" className={styles.text}>
                      <p>NCREASE</p>
                      <p>Website</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-12 p-0">
              <div
                className="card rounded-0 border border-white"
                style={{ width: "100%", overflow: "hidden" }}
              >
                <div className={styles.CardImg}>
                  <Image
                    src="/images/ourwork/esl.jpg"
                    className={`card-img-top ${styles.zoom}`}
                    alt="psd-to-html"
                    height={286.75}
                    width={286.75}
                    style={{ width: "100%" }}
                  />
                  <div className={styles.overlay}>
                    <a href="#" className={styles.text}>
                      <p>ESL SOLUTION</p>
                      <p>Website</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-12 p-0 column-gap-3">
              <div
                className="card rounded-0 border border-white"
                style={{ width: "100%", overflow: "hidden" }}
              >
                <div className={styles.CardImg}>
                  <Image
                    src="/images/ourwork/teknicforce.jpg"
                    className={`card-img-top ${styles.zoom}`}
                    alt="psd-to-html"
                    height={286.75}
                    width={286.75}
                    style={{ width: "100%" }}
                  />
                  <div className={styles.overlay}>
                    <a href="#" className={styles.text}>
                      <p>TEKNIKFORCE</p>
                      <p>Website</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
