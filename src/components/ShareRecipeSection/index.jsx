import React from 'react';
import styles from './ShareRecipe.module.css'
import Tocino from '/public/images_shoppingList/tocino-pork.jpg'
import Palabok from '/public/images_shoppingList/palabok.jpg'

const ShareRecipeSection = () => {
  return (
    <>
      <section className={styles.shareRecipeSection}>
        <div className={styles.innerContainer}>
          <img
            className={styles.round}
            src={Tocino}
          />
          <div className={styles.textContainer}>
            <h3>Got a Secret Family Recipe? <br /> Don't be shy... Share it with us!</h3>
            <p>Share your own personal recipes that you learned <br /> from from your Lola, Tita, Tito, or created yourself. <br />The world needs to know your at home specialties. </p>
            <button className={styles.shareButton}>Share Your Recipe</button>
          </div>
        </div>

        <img
          src={Palabok}
          className={styles.palabok}
        />

      </section>
    </>

  );
};

export default ShareRecipeSection;
