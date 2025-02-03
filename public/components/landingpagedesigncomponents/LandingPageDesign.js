import React from "react";
import styles from "./LandingPageDesign.module.css";
import Image from "next/image";

export default function LandingPageDesign() {
  return (
    <>
    <div className={styles.cardImg}>
                  <Image
                    src="/images/portfolio/landingpagedesign/med.jpg" // Adjust the path to your image
                    alt="Project 2"
                    width={1400}
                    height={2580}
                    style={{ width: "100%", height: "auto" }}
                  />
                  </div>
    </>
   
  );
}