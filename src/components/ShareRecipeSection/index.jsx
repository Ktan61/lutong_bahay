import React from 'react';
import styles from './ShareRecipe.module.css';
import Carousel from '../Carousel';

const ShareRecipeSection = () => {
  return (
    <section className={styles.shareRecipeSection}>
      <div className={styles.innerContainer}>
        <img
          className={styles.round}
          src="/images_shoppingList/tocino-pork.jpg"
          alt="Tocino pork dish"
        />
        <div className={styles.textContainer}>
          <h3 className={styles.secretRecipeHeader}>
            Got a Secret Family Recipe? <br /> Don't be shy... Share it with us!
          </h3>
          <p className={styles.shareRecipeText}>
            Share your own personal recipes that you learned <br />
            from your Lola, Tita, Tito, or created yourself. <br />
            The world needs to know your at-home specialties.
          </p>
          <button className={styles.shareButton}>Share Your Recipe</button>
        </div>
      </div>

      <Carousel/>

      {/* <div className={styles.palabokContainer}>
        <img
          src="/images_shoppingList/palabok.jpg"
          className={styles.palabok}
          alt="Palabok noodle dish"
        />
      </div> */}
    </section>
  );
};

export default ShareRecipeSection;
