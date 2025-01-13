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
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="3"
                aria-label="Slide 4"
                style={{ backgroundColor: "#333" }}
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row">
                  <div className={`col-sm-6 mb-3 mb-sm-0 ${styles.TextStyle}`}>
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
                    <span className={styles.ClientName}>Elena Magaña</span>                    
                    <span className={styles.Designation}>Landing Page design &amp; Development</span>
                  </div>
                  <div className={`col-sm-6 mb-3 mb-sm-0 ${styles.TextStyle}`}>
                    <div className={`card ${styles.SliderCard}`}>
                      <div className="card-body">
                        <p className={`card-text ${styles.SliderCardText}`}>
                          BlistTech team have done a great job for me on developing my mobile application for my business. They worked through many problems with me that were due to my lack of familiarity with application development. I would highly recommend them.
                        </p>
                      </div>
                      <i
                        className={`bi bi-caret-down-fill ${styles.downSmallArrow}`}
                      ></i>
                    </div>
                    <span className={styles.ClientName}>Ben.</span>                    
                    <span className={styles.Designation}>Mobie App for IOS</span>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                <div className={`col-sm-6 mb-3 mb-sm-0 ${styles.TextStyle}`}>
                    <div className={`card ${styles.SliderCard}`}>
                      <div className="card-body">
                        <p className={`card-text ${styles.SliderCardText}`}>
                          The Blistech team is always so responsive and helpful! Thanks for great work!
                        </p>
                      </div>
                      <i
                        className={`bi bi-caret-down-fill ${styles.downSmallArrow}`}
                      ></i>
                    </div>
                    <span className={styles.ClientName}>Janet Griffin</span>                    
                  </div>
                  <div className={`col-sm-6 mb-3 mb-sm-0 ${styles.TextStyle}`}>
                    <div className={`card ${styles.SliderCard}`}>
                      <div className="card-body">
                        <p className={`card-text ${styles.SliderCardText}`}>
                          Team was communicative and delivered on deadline. I am satisfied !
                        </p>
                      </div>
                      <i
                        className={`bi bi-caret-down-fill ${styles.downSmallArrow}`}
                      ></i>
                    </div>
                    <span className={styles.ClientName}>Dinesh Moddi</span>                    
                    <span className={styles.Designation}>Creative Logo Design</span>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                <div className={`col-sm-6 mb-3 mb-sm-0 ${styles.TextStyle}`}>
                    <div className={`card ${styles.SliderCard}`}>
                      <div className="card-body">
                        <p className={`card-text ${styles.SliderCardText}`}>
                          All around good job and got the job done in a timely manner. I am already hiring him for another job.
                        </p>
                      </div>
                      <i
                        className={`bi bi-caret-down-fill ${styles.downSmallArrow}`}
                      ></i>
                    </div>
                    <span className={styles.ClientName}>Julian Lejade</span>                    
                    <span className={styles.Designation}> Wordpress Expert</span>
                  </div>
                  <div className={`col-sm-6 mb-3 mb-sm-0 ${styles.TextStyle}`}>
                    <div className={`card ${styles.SliderCard}`}>
                      <div className="card-body">
                        <p className={`card-text ${styles.SliderCardText}`}>
                          Enthousiastic Professional. Very Responsive. Friendly Contact.
                        </p>
                      </div>
                      <i
                        className={`bi bi-caret-down-fill ${styles.downSmallArrow}`}
                      ></i>
                    </div>
                    <span className={styles.ClientName}>Benno.</span>
                    <span className={styles.Designation}>One-Page Homepage for aureum.ag</span>
                  </div>
                </div>

              </div>
              <div className="carousel-item">
                <div className="row">
                <div className={`col-sm-6 mb-3 mb-sm-0 ${styles.TextStyle}`}>
                    <div className={`card ${styles.SliderCard}`}>
                      <div className="card-body">
                        <p className={`card-text ${styles.SliderCardText}`}>
                          Outstanding work! We needed a quick turn-around, and the work was completed within a couple hours - including my multiple revisions. Great job!                        </p>
                      </div>
                      <i
                        className={`bi bi-caret-down-fill ${styles.downSmallArrow}`}
                      ></i>
                    </div>
                    <span className={styles.Designation}>Expert guidance and quick changes to PSD logo, multiple output - Immediate need</span>
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
