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
                <li className={`nav-item dropdown${styles.DropdownMenu}`}>
                 <a className={`nav-link dropdown-toggle ${styles.DropdownArrow}`} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Design
                  </a>
                 <ul className={`dropdown-menu row ${styles.megamenu}`}>
                    <div className={styles.MegaWrap}>
                      <li className="col-sm-3">
                        <ul>
                          <li><a href="#">Website Designing</a></li>
                          <li><a href="#">Responsive Web Design</a></li>
                          <li><a href="#">Landing Page Design</a></li>
                          <li><a href="#">Website Redesign</a></li>
                          <li><a href="#">Material Design</a></li>
                          <li><a href="#">Application Designing</a></li>
                          <li><a href="#">Graphics Design</a></li>
                        </ul>
                      </li>
                      <li className="col-sm-3">
                        <ul>
                          <li><a href="#">Photoshop Design</a></li>
                          <li><a href="#">Infographics Design</a></li>
                          <li><a href="#">PSD Slice To HTML</a></li>
                          <li><a href="#">Responsive HTML</a></li>
                          <li><a href="#">HTML To WordPress</a></li>
                          <li><a href="#">Bootstrap Framework</a></li>
                          <li><a href="#">Material Design Framework</a></li>
                        </ul>
                      </li>
                      <li className="col-sm-3">
                        <ul>
                          <li><a href="#">Logo Design Package</a></li>
                          <li><a href="#">User Experience Design</a></li>
                          <li><a href="#">Full Website Design</a></li>
                          <li><a href="#">Other Designing Work</a></li>
                        </ul>
                      </li>
                      <li className="col-sm-3"></li>
                    </div>
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
