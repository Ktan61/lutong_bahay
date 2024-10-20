// Sinigang.jsx
import Header from '../components/Header/index.jsx'; // Ensure correct import
import styles from '/styles/Sinigang.module.css';
import '@fontsource/berkshire-swash';
import '@fontsource/roboto';
import '@fontsource/koulen';
import React from 'react';

export default function Sinigang() {
    return (
        <div>
            <Header />
            <div>
                <h1>Sinigang na Baboy Recipe</h1>
                {/* Add more recipe details here */}
            </div>
        </div>
    );
}
