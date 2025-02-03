import React from "react";
import styles from "./LandingPage.module.css";
import Image from "next/image";
import landingpage from "@/app/json/LandingPageData/landingpage";

export default function LandingPage() {
  return (
    <div className={styles.landingPage}>
      <div className="container py-5">
        <h2 className="heading">Landing Page Design..</h2>
        <div className="row">
          {landingpage.map((project, index) => (
            <div
              key={project.id}
              className={`col-md-3 col-12 p-0 ${index % 4 === 3 ? "pr-3" : ""}`}
              style={{ paddingRight: "0" }}
            >
              <div
                className="card rounded-0 border border-white"
                style={{ width: "100%", overflow: "hidden" }}
              >
                <div className={styles.cardImg}>
                  <Image
                    src={project.src}
                    alt={project.alt}
                    className={`card-img-top rounded-0 ${styles.zoom}`}
                    width={286}
                    height={286}
                    style={{ width: "100%" }}
                  />
                  <div className={styles.overlay}>
                    <a href={project.link} className={styles.text}>
                      <p>{project.title}</p>
                      <p>Design</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
