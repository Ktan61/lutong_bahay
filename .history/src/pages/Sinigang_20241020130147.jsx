import Header from '../components/Header/index.jsx';
import styles from '../styles/Sinigang.module.css';
import '@fontsource/berkshire-swash';
import '@fontsource/roboto';
import '@fontsource/koulen';
import React from 'react';

export default function Sinigang() {
    return (
        <>
            <Header />
            <div className={styles.sinigangPage}>
                <div className={styles.banner}>
                    <img 
                        src="https://cdn.shortpixel.ai/spai2/w_1193+q_glossy+ret_img+to_auto/www.hungryhuy.com/wp-content/uploads/pork-sinigang-pot.jpg"
                        alt="Sinigang na Baboy" 
                        className={styles.bannerImage}
                    />
                </div>
                <div>
                    <h1 className={styles.name}>Sinigang na Baboy</h1>
                    <h3>Filipino Pork Sinigang Soup with Vegetables.</h3>
                    <div className={styles.keyInfo}>
                        <div className={styles.infoChips}>
                            <p>Serves | <strong>4 Servings</strong></p>
                        </div>
                        <div className={styles.infoChips}>
                            <p>Course | <strong>Main</strong></p>
                        </div>
                        <div className={styles.infoChips}>
                            <p>Prep Time | <strong>20 mins</strong></p>
                        </div>
                        <div className={styles.infoChips}>
                            <p>Cook Time | <strong>1 hr 5 mins</strong></p>
                        </div>
                    </div>
                    <p>Tangy and sour broth filled to the brim with tender pork, succulent tomatoes, and other fresh vegetables — this sinigang na baboy recipe is purely homemade and great for weekend nights with the family.</p>
                </div>
                    <h1 className={styles.ingredientsLabel}>Ingredients</h1>
                    <div className={styles.ingredientsSection}>
                    <div className={styles.sinigangList}>
                        <h4>Sinigang</h4>
                        <div>
                            <ul>
                                <li>0.5 lb pork spare ribs</li>
                                <li>0.5 lb pork belly cut into ½ inch cubes</li>
                                <li>0.5 tbsp vegetable oil</li>
                                <li>0.5 medium yellow onion chopped</li>
                                <li>5 cloves garlic minced</li>
                                <li>2.5 small tomatoes (roma sized) quartered</li>
                                <li>4 c filtered water</li>
                                <li>1.33 tbsp salt and more as needed</li>
                                <li>0.5 tbsp fish sauce</li>
                                <li>0.38 c tamarind paste (store bought)</li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.veggieList}>
                        <h4>Vegetables</h4>
                        <div>
                            <ul>
                                <li>0.5 lb pork spare ribs</li>
                                <li>0.5 lb pork spare ribs</li>
                                <li>0.5 lb pork spare ribs</li>
                                <li>0.5 lb pork spare ribs</li>
                                <li>0.5 lb pork spare ribs</li>
                                <li>0.5 lb pork spare ribs</li>
                                <li>0.5 lb pork spare ribs</li>
                                <li>0.5 lb pork spare ribs</li>
                                </ul>
                            </div>
                    </div>
                    <div className={styles.equipList}>
                        <h4>Equipment Used</h4>
                        <div>
                            <ul>
                                <li>0.5 lb pork spare ribs</li>
                                <li>0.5 lb pork spare ribs</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
