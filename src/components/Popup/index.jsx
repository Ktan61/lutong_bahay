import React from 'react';
import styles from './Popup.module.css'; // Add a CSS module for styling

const Popup = ({ isVisible, title, content, onClose, onConfirm }) => {
    if (!isVisible) return null;

    return (
        <div className={styles.overlay}>
            <div className={styles.popup}>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.content}>{content}</p>
                <div className={styles.actions}>
                    <button className={styles.cancelButton} onClick={onClose}>Cancel</button>
                    <button className={styles.confirmButton} onClick={onConfirm}>Confirm</button>
                </div>
            </div>
        </div>
    );
};

export default Popup;
