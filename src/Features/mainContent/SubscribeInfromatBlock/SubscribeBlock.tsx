import React from 'react';
import styles from './SubscribeBlock.module.css';
import { purpleLogo } from '~/shared/ui/assets/images/ColorBlocks';
import ButtonIcon from '~/shared/ui/assets/images/Button.png';
import {addOpacityToColor} from "~/shared/helpers/addOpacityToColorHelper"; // Импорт изображения кнопки
import {categoryStyles} from '~/shared/helpers/categoryColor'
const SubscribeBlock = () => {
    const categoryColor = categoryStyles?.Startups?.color || '#6f42c1'
    const newColor = addOpacityToColor(categoryColor, 0.1)


    return (
        <div className={styles.subscribeBlock}>
            <div className={styles.logoWrapper} style={{backgroundColor: newColor}}>
                <div className={styles.iconContainer}
                     style={{
                         backgroundImage: `url(${purpleLogo})`, // Устанавливаем картинку фоном

                     }}>
                    <h2 className={styles.logoText}>@</h2>
                </div>
            </div>
            <div className={styles.textContainer}>
                    <h2 className={styles.title}>
                        Subscribe to INFORMAT
                        <br/>
                        Email Briefings
                    </h2>
                    <p className={styles.description}>
                        Sign up for our daily newsletter and get the best of The INFORMAT in <br/>your in-box.
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