import React from 'react';
import styles from './Hero.module.css';

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContainer}>
        <div className={styles.textContainer}>
          <h2 className={styles.heroHeader}>A Taste of Home into your Kitchen</h2>
          <p className={styles.heroText}>
            Get step-by-step instructions, videos, and recipes to create your favorite Filipino foods in your own kitchen!
          </p>
          <button className={styles.shopButton}>Shop Now</button>
        </div>
        <div className={styles.photoContainer}>
          <img
            className={styles.tocino}
            src="/images_shoppingList/tocino-pork.jpg"
            alt="Tocino pork dish"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
