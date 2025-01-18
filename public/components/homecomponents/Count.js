"use client"
import React, { useState, useEffect, useRef } from "react";
import styles from './Count.module.css';
import Image from "next/image";

export default function Count() {
  const [startCounting, setStartCounting] = useState(false);
  const [countValues, setCountValues] = useState({
    finishedProjects: 0,
    yearsExistence: 0,
    customerSatisfaction: 0,
    countriesServed: 0,
  });
  
  const countRef = useRef(null); // Reference for the count section

  const countUp = (target, value) => {
    let current = 0;
    const step = value / 100; // Adjust for smooth animation
    const interval = setInterval(() => {
      current += step;
      if (current >= value) {
        clearInterval(interval);
        current = value;
      }
      setCountValues((prev) => ({
        ...prev,
        [target]: Math.floor(current),
      }));
    }, 10); // Adjust speed of counting
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !startCounting) {
          setStartCounting(true); // Start counting when the element is in view
          countUp('finishedProjects', 1000);
          countUp('yearsExistence', 8);
          countUp('customerSatisfaction', 100);
          countUp('countriesServed', 12);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the component is visible
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, [startCounting]);

  return (
    <div className={styles.Count} ref={countRef}>
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-12">
            <div className={styles.CountBox}>
              <div className={styles.CountIcon}>
                <Image
                  src="/images/home/Counter/finished_project.png"
                  alt="psd-to-html"
                  height={119}
                  width={112}
                />
              </div>
              <p className={styles.Number}>{countValues.finishedProjects}+</p>
              <p className={styles.Text}>Finished Projects</p>
            </div>
          </div>
          <div className="col-md-3 col-12">
            <div className={styles.CountBox}>
              <div className={styles.CountIcon}>
                <Image
                  src="/images/Counter/year_existence.png"
                  alt="psd-to-html"
                  height={119}
                  width={77}
                />
              </div>
              <p className={styles.Number}>{countValues.yearsExistence}+</p>
              <p className={styles.Text}>Years of existence</p>
            </div>
          </div>
          <div className="col-md-3 col-12">
            <div className={styles.CountBox}>
              <div className={styles.CountIcon}>
                <Image
                  src="/images/Counter/customer_satisfaction.png"
                  alt="psd-to-html"
                  height={119}
                  width={112}
                />
              </div>
              <p className={styles.Number}>{countValues.customerSatisfaction}%</p>
              <p className={styles.Text}>Customer Satisfaction</p>
            </div>
          </div>
          <div className="col-md-3 col-12">
            <div className={styles.CountBox}>
              <div className={styles.CountIcon}>
                <Image
                  src="/images/Counter/countries_served.png"
                  alt="psd-to-html"
                  height={119}
                  width={112}
                />
              </div>
              <p className={styles.Number}>{countValues.countriesServed}+</p>
              <p className={styles.Text}>Countries We Have Served</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
