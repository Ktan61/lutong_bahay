import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import EmailIcon from '@mui/icons-material/Email';
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
          <a href="https://facebook.com"><FacebookIcon/></a>
          <a href="https://twitter.com"><InstagramIcon/></a>
          <a href="https://instagram.com"><XIcon/></a>
          <a href="mailto:info@example.com"><EmailIcon/></a> 
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Lutong Bahay. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
