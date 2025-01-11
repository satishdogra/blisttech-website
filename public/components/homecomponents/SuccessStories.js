import React from "react";
import styles from "./SuccessStories.module.css";

export default function SuccessStories() {
  return (
    <>
      <div className={`bg-light-subtle ${styles.SuccessStories}`}>
        <div className="container py-3">
          <h2 className="heading">Success stories from our Partners</h2>
          <div id="carouselExampleIndicators" className="carousel slide">
            <div className={`carousel-indicators ${styles.SliderIndication}`}>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
                style={{ backgroundColor: "#333" }}
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
                style={{ backgroundColor: "#333" }}
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
                style={{ backgroundColor: "#333" }}
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row">
                  <div className="col-sm-6 mb-3 mb-sm-0">
                    <div className={`card ${styles.SliderCard}`}>
                      <div className="card-body">
                        <p className={`card-text ${styles.SliderCardText}`}>
                          BlistTech team did a fantastic job, Created one
                          landing page from scratch (design + HTML) and
                          implemented an existing sign up form. They are always
                          available to discuss any changes and give us an update
                          of the progress of the job I would recommend him with
                          no hesitation! Well definitely hire him again
                        </p>
                      </div>
                      <i
                        className={`bi bi-caret-down-fill ${styles.downSmallArrow}`}
                      ></i>
                    </div>
                    <span>Elena Magaña</span>
                    <br />
                    <span>Landing Page design &amp; Development</span>
                  </div>
                  <div className="col-sm-6 mb-3 mb-sm-0">
                    <div className={`card ${styles.SliderCard}`}>
                      <div className="card-body">
                        <p className={`card-text ${styles.SliderCardText}`}>
                          BlistTech team did a fantastic job, Created one
                          landing page from scratch (design + HTML) and
                          implemented an existing sign up form. They are always
                          available to discuss any changes and give us an update
                          of the progress of the job I would recommend him with
                          no hesitation! Well definitely hire him again
                        </p>
                      </div>
                      <i
                        className={`bi bi-caret-down-fill ${styles.downSmallArrow}`}
                      ></i>
                    </div>
                    <span>Elena Magaña</span>
                    <br />
                    <span>Landing Page design &amp; Development</span>
                  </div>
                </div>
              </div>
              <div className="carousel-item">Slide 2</div>
              <div className="carousel-item">Slide 3</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
