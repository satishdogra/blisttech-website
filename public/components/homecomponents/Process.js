import React from "react";
import styles from './Process.module.css';
import Image from "next/image";
import processSteps from "@/app/json/HomeData/process";

export default function Process() {
  return (
    <div className={styles.Process}>
      <div className="container">
        <h2 className="heading">Process</h2>
        <p>
          We have a simple 3-step process.<br />
          Hassle-free process, budget websites, fast building.
        </p>
        <a href="#">MORE ABOUT US +</a>
        <div className="row py-5">
          {/* Map through process steps */}
          {processSteps.map((step, index) => (
            <div className="col-md-4 col-12" key={index}>
              <div className="card rounded-0" style={{ maxWidth: '100%' }}>
                <div className={styles.CardImg}>
                  <Image
                    src={step.image}
                    className={`card-img-top border-bottom ${styles.zoom}`}
                    alt={step.alt}
                    height={179}
                    width={353}
                  />
                </div>
                <h3 className={styles.Subheading}>{step.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
