import React from "react";
import styles from './SuccessStories.module.css';


export default function SuccessStories() {
  return (
    <>
      <div className={`bg-light-subtle ${styles.SuccessStories}`}>
        <div className="container py-3">
          <h2 className="heading">Success stories from our Partners</h2>
          <div id="carouselExampleIndicators" className="carousel slide">
            <div className="carousel-indicators py-4">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row">
                  <div className="col-sm-6 mb-3 mb-sm-0">
                    <div className="card">
                      <div className="card-body">
                        <p className="card-text"> BlistTech team did a fantastic job, Created one landing page from scratch (design + HTML) and implemented an existing sign up form.
                          They are always available to discuss any changes and give us an update of the progress of the job I would recommend him with no hesitation! Well definitely hire him again</p>
                      </div><i className="bi bi-caret-down-fill"></i>
                    </div>
                    <span>Elena Magaña</span><br />
                    <span>Landing Page design &amp; Development</span>
                  </div>
                  <div className="col-sm-6 mb-3 mb-sm-0">
                    <div className="card">
                      <div className="card-body">
                        <p className="card-text"> BlistTech team did a fantastic job, Created one landing page from scratch (design + HTML) and implemented an existing sign up form.
                          They are always available to discuss any changes and give us an update of the progress of the job I would recommend him with no hesitation! Well definitely hire him again</p>
                      </div><i className="bi bi-caret-down-fill"></i>
                    </div>
                    <span>Elena Magaña</span><br />
                    <span>Landing Page design &amp; Development</span>
                  </div>
                </div></div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col-sm-6 mb-3 mb-sm-0">
                    <div className="card">
                      <div className="card-body">
                        <p className="card-text"> BlistTech team did a fantastic job, Created one landing page from scratch (design + HTML) and implemented an existing sign up form.
                          They are always available to discuss any changes and give us an update of the progress of the job I would recommend him with no hesitation! Well definitely hire him again</p>
                      </div><i className="bi bi-caret-down-fill"></i>
                    </div>
                    <span>Elena Magaña</span><br />
                    <span>Landing Page design &amp; Development</span>
                  </div>
                  <div className="col-sm-6 mb-3 mb-sm-0">
                    <div className="card">
                      <div className="card-body">
                        <p className="card-text"> BlistTech team did a fantastic job, Created one landing page from scratch (design + HTML) and implemented an existing sign up form.
                          They are always available to discuss any changes and give us an update of the progress of the job I would recommend him with no hesitation! Well definitely hire him again</p>
                      </div><i className="bi bi-caret-down-fill"></i>
                    </div>
                    <span>Elena Magaña</span><br />
                    <span>Landing Page design &amp; Development</span>
                  </div>
                </div>   </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col-sm-6 mb-3 mb-sm-0">
                    <div className="card">
                      <div className="card-body">
                        <p className="card-text"> BlistTech team did a fantastic job, Created one landing page from scratch (design + HTML) and implemented an existing sign up form.
                          They are always available to discuss any changes and give us an update of the progress of the job I would recommend him with no hesitation! Well definitely hire him again</p>
                      </div><i className="bi bi-caret-down-fill"></i>
                    </div>
                    <span>Elena Magaña</span><br />
                    <span>Landing Page design &amp; Development</span>
                  </div>
                  <div className="col-sm-6 mb-3 mb-sm-0">
                    <div className="card">
                      <div className="card-body">
                        <p className="card-text"> BlistTech team did a fantastic job, Created one landing page from scratch (design + HTML) and implemented an existing sign up form.
                          They are always available to discuss any changes and give us an update of the progress of the job I would recommend him with no hesitation! Well definitely hire him again</p>
                      </div><i className="bi bi-caret-down-fill"></i>
                    </div>
                    <span>Elena Magaña</span><br />
                    <span>Landing Page design &amp; Development</span>
                  </div>
                </div>   </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}