import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <ul className="footer-links">
          <li><a href="#">About Us</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <div className="footer-social">
          <a href="https://facebook.com"><FontAwesomeIcon icon={faFacebook} /></a>
          <a href="https://twitter.com"><FontAwesomeIcon icon={faTwitter} /></a>
          <a href="https://instagram.com"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="mailto:info@example.com"><FontAwesomeIcon icon={faEnvelope} /></a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Lutong Bahay. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
