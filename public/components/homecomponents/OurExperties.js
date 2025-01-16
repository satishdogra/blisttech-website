"use client";

import React from "react";
import styles from "./OurExperties.module.css";
import Image from "next/image";

// Array of expertise data
const expertiseData = [
  {
    title: "PSD To HTML",
    imageSrc: "/images/ourexperties/psd-to-html.jpg",
    altText: "psd-to-html",
    link: "#"
  },
  {
    title: "Responsive Design",
    imageSrc: "/images/ourexperties/responsive.jpg",
    altText: "responsive-design",
    link: "#"
  },
  {
    title: "Landing Page Design",
    imageSrc: "/images/ourexperties/landing-page-design.jpg",
    altText: "landing-page-design",
    link: "#"
  },
  {
    title: "Logo Design",
    imageSrc: "/images/ourexperties/logo-design.jpg",
    altText: "logo-design",
    link: "#"
  },
  {
    title: "Graphics Design",
    imageSrc: "/images/ourexperties/graphics.jpg",
    altText: "graphics-design",
    link: "#"
  },
  {
    title: "Html To WordPress",
    imageSrc: "/images/ourexperties/html-to-wp.jpg",
    altText: "html-to-wordpress",
    link: "#"
  },
  {
    title: "Search Engine Optimization",
    imageSrc: "/images/ourexperties/seo.jpg",
    altText: "seo",
    link: "#"
  },
  {
    title: "Web Development",
    imageSrc: "/images/ourexperties/development.jpg",
    altText: "web-development",
    link: "#"
  },
];

export default function OurExperties() {
  return (
    <div className={styles.ourexperties}>
      <div className="container">
        <h2 className="heading">Our Expertise</h2>

        <div className="row">
          {/* Map through the expertiseData array to dynamically generate the expertise cards */}
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
