import React from "react";
import styles from "./SuccessStories.module.css";
import successStories from "@/app/json/HomeData/successstories";


export default function SuccessStories() {
 
  const slides = [];
  for (let i = 0; i < successStories.length; i += 2) {
    slides.push(successStories.slice(i, i + 2));
  }

  return (
    <div className={`bg-light-subtle ${styles.SuccessStories}`}>
      <div className="container py-3">
        <h2 className="heading">Success stories from our Partners</h2>
        <div id="carouselExampleIndicators" className="carousel slide">
          <div className={`carousel-indicators ${styles.SliderIndication}`}>
            
            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={index}
                className={index === 0 ? "active" : ""}
                aria-label={`Slide ${index + 1}`}
                style={{ backgroundColor: "#333" }}
              ></button>
            ))}
          </div>

          <div className="carousel-inner">
            {/* Only 4 slides */}
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
              >
                <div className="row">
                  {/* First story in the slide */}
                  <div className={`col-sm-6 mb-3 mb-sm-0 ${styles.TextStyle}`}>
                    <div className={`card ${styles.SliderCard}`}>
                      <div className="card-body">
                        <p className={`card-text ${styles.SliderCardText}`}>
                          {slide[0].feedback}
                        </p>
                      </div>
                      <i
                        className={`bi bi-caret-down-fill ${styles.downSmallArrow}`}
                      ></i>
                    </div>
                    <span className={styles.ClientName}>{slide[0].clientName}</span>
                    {slide[0].designation && (
                      <span className={styles.Designation}>{slide[0].designation}</span>
                    )}
                  </div>

                  {/* Second story in the slide */}
                  {slide[1] && (
                    <div className={`col-sm-6 mb-3 mb-sm-0 ${styles.TextStyle}`}>
                      <div className={`card ${styles.SliderCard}`}>
                        <div className="card-body">
                          <p className={`card-text ${styles.SliderCardText}`}>
                            {slide[1].feedback}
                          </p>
                        </div>
                        <i
                          className={`bi bi-caret-down-fill ${styles.downSmallArrow}`}
                        ></i>
                      </div>
                      <span className={styles.ClientName}>{slide[1].clientName}</span>
                      {slide[1].designation && (
                        <span className={styles.Designation}>{slide[1].designation}</span>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
