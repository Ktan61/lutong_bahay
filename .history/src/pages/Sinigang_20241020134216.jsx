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
                <div className={styles.ingredientsSection}></div>
                    <h1 className={styles.ingredientsLabel}>Ingredients</h1>
                    <div className={styles.ingredientsList}>
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
                        <div className={styles.sinigangList}>
                            <h4>Vegetables</h4>
                            <div>
                                <ul>
                                    <li>0.5 small eggplant cut into ½" pieces</li>
                                    <li>3.5 pieces okra cut into ½" pieces</li>
                                    <li>3.5 string beans cut into 3" pieces</li>
                                    <li>0.25 tsp pepper to taste</li>
                                    <li>lime juice optional for more sourness</li>
                                    <li>0.5 finger chile pepper optional for spiciness</li>
                                    <li>15 stems kang kong / water spinach / on choy</li>
                                    <li>2 inches daikon radish cut in ¼" slices, then cut into half rounds</li>
                                </ul>
                            </div>
                        </div>
                        <div className={styles.sinigangList}>
                            <h4>Equipment Used</h4>
                            <div>
                                <ul>
                                    <li>stainless steel strainer</li>
                                    <li>cast iron dutch oven - 6.75 qt</li>
                                </ul>
                            </div>
                        </div>
                </div>
                <div className={styles.stepsSection}>
                    <h1 className={styles.stepsLabel}>Instructions</h1>
                    <div className={styles.stepsDetails}>
                        <div className={styles.stepsColumns}>
                            <ol>
                                <li>Pat the pork dry with a paper towel to improve browning during searing.</li>
                                <li>In a large pot over medium heat, add the vegetable oil and begin to sear your meat in batches until all the sides have a nice golden brown crust. This should be about 2-5 minutes per batch. Try to not crowd the meat while searing. Transfer the meat onto a clean plate.
                                    <img 
                                        src="https://www.hungryhuy.com/wp-content/uploads/searing-pork.jpg"
                                        alt="Seared meat" 
                                        className={styles.stepsImage}
                                    />
                                </li>
                                <li>In the same pot, add the onions and sauté for about one minute or until the onions are slightly translucent. Add the garlic and sauté for 30 seconds or until it's fragrant.</li>
                                <li>Add 2 cups of filtered water to deglaze the pot thoroughly. Gently scrape the golden brown parts from the searing meat at the bottom of the pan.</li>
                                <li>Add the meat back to the pot with only 4 tomatoes (reserve the 5th one for later). Add 2 tablespoons of salt and stir to dissolve.</li>
                                <li>Add 6 cups of water or enough so the meat is completely submerged. Bring the heat up to medium-high heat, once the liquid hits a boil let it boil for about 30 seconds.</li>
                            </ol>
                        </div>
                        <div className={styles.stepsColumns}>
                            <ol>
                                <li>Drop the heat to a simmer (about medium-low heat) and simmer for about 45 minutes to 1 hour or until the meat is tender to your liking.</li>
                                <li>Add the tamarind paste, pepper, and fish sauce to the pot and stir.
                                    <img 
                                        src="https://www.hungryhuy.com/wp-content/uploads/adding-tamarind-paste.jpg"
                                        alt="Adding in the tamarind paste" 
                                        className={styles.stepsImage}
                                    />
                                </li>
                                <li>Add the last tomato, eggplant, okra, string beans, and daikon radish into the pot and stir. Simmer for 5-8 minutes or until vegetables are tender, then add kang kong and cook for an additional one minute.</li>
                                <li>Taste the soup and adjust with salt, pepper, or lime juice based on your preference. Serve immediately with a side of rice.</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
