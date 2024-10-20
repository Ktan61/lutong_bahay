import Header from '../components/Header/index.jsx';
import styles from '../styles/Sinigang.module.css';
import '@fontsource/berkshire-swash';
import '@fontsource/roboto';
import '@fontsource/koulen';
import React from 'react';

export default function Sinigang() {
    return (
        <div>
            <Header />
            <div className={styles.sinigang}>
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
                            <p>Serves <strong>4 Servings</strong></p>
                        </div>
                        <div>
                            <p>Course <strong>Main</strong></p>
                        </div>
                        <div>
                            <p>Prep Time <strong>20 mins</strong></p>
                        </div>
                        <div>
                            <p>Cook Time <strong>1 hr 5 mins</strong></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
