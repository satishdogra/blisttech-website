import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div class="container">
          <div class="row">
            <div class="col-md-3 sd-12" >
              <h4>BLISTTECH</h4>
              <ul>
              <li><a href="#" title="blistTech"><i className={`bi bi-skype px-1 ${styles.skype}`}></i>blistTech</a></li>
              <li><a href="#" title="blisttech@gmail.com"><i className={`bi bi-envelope-fill px-1 ${styles.email}`}></i>blisttech@gmail.com</a></li>
              </ul>
            </div>
            <div className="col-md-3 sd-12">
              <h6>QUCK LINKS</h6>
              <ul>
                <li><a href="#" title="BlistTech">BlistTech</a></li>
                <li><a href="#" title="Design">Design</a></li>
                <li><a href="#" title="Development">Development</a></li>
                <li><a href="#" title="Team">Team</a></li>
                <li><a href="#" title="Contact Us">Contact Us</a></li>
              </ul>
            </div>
            <div className="col-md-3 sd-12">
              <h6>EXPERTIES</h6>
              <ul>
                <li><a href="#" title="Psd To Html">Psd To Html</a></li>
                <li><a href="#" title="Resposnive Design">Resposnive Design</a></li>
                <li><a href="#" title="Landing Page Design">Landing Page Design</a></li>
                <li><a href="#" title="Logo Design">Logo Design</a></li>
                <li><a href="#" title="Graphics Design">Graphics Design</a></li>
                <li><a href="#" title="Html To WordPress">Html To WordPress</a></li>
                <li><a href="#" title="Search Engine Optimization">Search Engine Optimization</a></li>
                <li><a href="#" title="Web Development">Web Development</a></li>
              </ul>
            </div>
            <div className="col-md-3 sd-12">
              <h6>CONNECT WITH BLISTTECH</h6>
              <ul>
                <li><a href="#" title="Facebook">Facebook</a></li>
                <li><a href="#" title="Twitter">Twitter</a></li>
                <li><a href="#" title="Linkedin">Linkedin</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer >
    </>
  )
}
