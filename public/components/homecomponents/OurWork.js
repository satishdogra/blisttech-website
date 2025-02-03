import React from "react";
import styles from "./OurWork.module.css";
import Image from "next/image";
import projects from "@/app/json/HomeData/ourwork";

export default function OurWork() {
  return (
    <div className={styles.OurWork}>
      <div className="container">
        <h2 className="heading">Our Work</h2>
        <div className="row">
          {projects.map((project, index) => (
            <div
              key={index}
              className="col-md-3 col-12 p-0"
              style={{ paddingRight: index % 4 === 3 ? "3px" : "0" }} 
            >
              <div
                className="card rounded-0 border border-white"
                style={{ width: "100%", overflow: "hidden" }}
              >
                <div className={styles.CardImg}>
                  <Image
                    src={project.imageUrl}
                    className={`card-img-top ${styles.zoom}`}
                    alt={project.name}
                    height={286}
                    width={286}
                    style={{ width: "100%" }}
                  />
                  <div className={styles.overlay}>
                    <a href={project.link} className={styles.text}>
                      <p>{project.name}</p>
                      <p>{project.description}</p>
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
