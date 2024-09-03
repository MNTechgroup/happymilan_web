import React from 'react';
import styles from './Button.module.css'; // Import CSS Module

const SaveButton = ({ children, onClick, type = 'button', className }) => {
    return (
        <button
            type={type}
            className={`${styles.button} ${className || ''}`} // Apply styles from CSS Module
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default SaveButton;
