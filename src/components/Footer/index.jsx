import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import EmailIcon from '@mui/icons-material/Email';
import styles from './Footer.Module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <ul className={styles.footerLinks}>
          <li className={styles.footerLinksList}><a className={styles.footerLinksLink} href="#">About Us</a></li>
          <li className={styles.footerLinksList}><a className={styles.footerLinksLink} href="#">Privacy Policy</a></li>
          <li className={styles.footerLinksList}><a className={styles.footerLinksLink} href="#">Contact</a></li>
        </ul>
        <div className={styles.footerSocial}>
          <a className={styles.footerSocialLink} href="https://facebook.com"><FacebookIcon/></a>
          <a className={styles.footerSocialLink} href="https://twitter.com"><InstagramIcon/></a>
          <a className={styles.footerSocialLink} href="https://instagram.com"><XIcon/></a>
          <a className={styles.footerSocialLink} href="mailto:info@example.com"><EmailIcon/></a> 
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p className={styles.footerBottomText}>&copy; 2024 Lutong Bahay. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
