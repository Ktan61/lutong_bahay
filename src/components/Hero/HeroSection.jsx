import React from 'react';
import Tocino from '/public/images_shoppingList/tocino-pork.jpg'
import styles from './Hero.module.css';

const HeroSection = () => {
  return (
    <>
      <section className={styles.heroSection}>
        <div className={styles.heroContainer}>
          <div className={styles.textContainer}>
            <h2 className={styles.heroHeader}>A Taste of Home into your Kitchen</h2>
            <p className={styles.heroText}>Get step by step instructions, videos, and recipes to create your favourite Filipino foods in your own kitchen!</p>
            <button className={styles.shopButton}>Start Cooking</button>
          </div>
          <div className={styles.photoContainer}>
          <img
            className={styles.tocino}
            src={Tocino}
          />
          </div>

        </div>

      </section>

    </>


  );
};

export default HeroSection;
