import React from 'react';
import styles from './Header.module.css';
import Image from 'next/image';

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <nav className="navbar navbar-expand-lg bg-body-tertiary p-0">
          <div className="container">
            <div className={styles.logo}>
              <Image src="/images/header/logo.png" alt="Description of the image" width={251} height={58} />
            </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className={`navbar-nav ${styles.sociellink}`}>
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#">BEHANCE
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">/</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">LINKEDIN</a>
                </li>
              </ul>

              <ul className="navbar-nav me-0 ms-auto gap-4">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#">BlistTech</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Design
                  </a>
                  <ul className="dropdown-menu ">
                    <li><a className="dropdown-item col-sm-3" href="#">Action</a></li>
                    <li><a className="dropdown-item col-sm-3" href="#">Another action</a></li>
                    <li><a className="dropdown-item col-sm-3" href="#">Something else here</a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Devlopment</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Team</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Portfolio</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}
