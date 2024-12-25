import React from "react";
import styles from "./NewsCard.module.css";

interface NewsCardProps {
    title: string;
    link: string;
    og: string;
    sourceIcon: string;
    category: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ title, link, og, sourceIcon, category }) => {
    return (
        <div className={styles.card}>
            <div className={styles.imageWrapper}>
                <img src={og} alt={title} className={styles.cardImage} />
                <div className={styles.sourceIcon} style={{ backgroundImage: `url(${sourceIcon})` }}></div>
            </div>
            <div className={styles.cardBody}>
                <div className={styles.category}>{category}</div>
                <h3 className={styles.title}>{title}</h3>
                <a href={link} target="_blank" rel="noreferrer" className={styles.link}>
                    {"Read More"}
                </a>
            </div>
        </div>
    );
};

export default NewsCard;