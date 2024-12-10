import React from 'react';
import styles from './SubscribeBlock.module.css';
import { purpleLogo } from './../../../assets/images/ColorBlocks/index';
import ButtonIcon from './../../../assets/images/Button.png'; // Импорт изображения кнопки

const SubscribeBlock = () => {
    return (
        <div className={styles.subscribeBlock}>
            <div className={styles.iconContainer}>
                <img src={purpleLogo} alt="Subscribe Icon" className={styles.icon} />
            </div>
            <div className={styles.textContainer}>
                <h2 className={styles.title}>
                    Subscribe to INFORMAT
                    <br />
                    Email Briefings
                </h2>
                <p className={styles.description}>
                    Sign up for our daily newsletter and get the best of The INFORMAT in <br />your in-box.
                </p>
                <form className={styles.form}>
                    <div className={styles.inputGroup}>
                        <input
                            type="email"
                            placeholder="Your email"
                            className={styles.input}
                        />
                        <button type="submit" className={styles.button}>
                            <img
                                src={ButtonIcon}
                                alt="Submit Icon"
                                className={styles.buttonImage}
                            />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SubscribeBlock;