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
                    <h2>Filipino Pork Sinigang Soup with Vegetables.</h2>
                </div>
            </div>
        </div>
    );
}
