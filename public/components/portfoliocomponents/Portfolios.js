import React from "react";
import styles from "./Portfolios.module.css";
import Image from "next/image";
import portfolios from "@/app/json/PortfolioData/portfolio";

export default function Portfolios() {
  return (
    <div className={styles.portfolios}>
      <div className="container">
        {portfolios.map((portfolio, index) => (
          <div className="row py-5" key={index}>
            {index % 2 === 0 ? (
              <>
                <div className={`col-8 ${styles.portfolio_img}`}>
                  <Image
                    src={portfolio.imageSrc}
                    alt={`Image of ${portfolio.name}`}
                    width={726}
                    height={353}
                  />
                </div>
                <div className={`col-4 ${styles.portfolio_Name}`}>
                  <h2>{portfolio.name}</h2>
                  <p>{portfolio.description}</p>
                  <a className="waves-light btn red" href={portfolio.website}>
                    Visit Website
                  </a>
                </div>
              </>
            ) : (
              <>
                <div className={`col-4 ${styles.portfolio_Name}`}>
                  <h2>{portfolio.name}</h2>
                  <p>{portfolio.description}</p>
                  <a className="waves-light btn red" href={portfolio.website}>
                    Visit Website
                  </a>
                </div>
                <div className={`col-8 ${styles.portfolio_img}`}>
                  <Image
                    src={portfolio.imageSrc}
                    alt={`Image of ${portfolio.name}`}
                    width={726}
                    height={353}
                  />
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
