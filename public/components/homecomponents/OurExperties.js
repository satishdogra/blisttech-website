"use client";

import React from "react";
import styles from "./OurExperties.module.css";
import Image from "next/image";
import expertiseData from "@/app/json/HomeData/ourexperties";

export default function OurExperties() {
  return (
    <div className={styles.ourexperties}>
      <div className="container">
        <h2 className="heading">Our Expertise</h2>

        <div className="row">
          {expertiseData.map((expertise, index) => (
            <div className="col-md-3 col-12 py-3" key={index}>
              <a
                href={expertise.link}
                target="_blank"
                className="card shadow bg-body-tertiary rounded"
                style={{
                  width: "100%",
                  overflow: "hidden",
                  textDecoration: "none",
                }}
              >
                <span className={styles.CardImg}>
                  <Image
                    src={expertise.imageSrc}
                    className={`card-img-top ${styles.zoom}`}
                    alt={expertise.altText}
                    height={251}
                    width={251}
                    style={{ width: "100%", height: "auto" }}
                  />
                </span>
                <span className="card-body">
                  <h6 className="card-title m-0">
                    {expertise.title}
                    <i className={`bi bi-arrow-right ${styles.rightArrow}`}></i>
                  </h6>
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
