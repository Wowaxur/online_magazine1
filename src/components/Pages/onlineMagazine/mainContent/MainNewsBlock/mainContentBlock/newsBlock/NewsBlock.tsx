import React from "react";
import styles from "./NewsBlock.module.css";
import {NewsItem} from "../../../../../../../data";


type NewsBlockProps = {
    news: NewsItem[]; // List of news items
};

const NewsBlock = ({ news }: NewsBlockProps) => {
    const mainNews = news.find((item) => item.tags.includes("Main"));
    const smallerNews = news.filter((item) => !item.tags.includes("Main"));

    return (
        <div className={styles.container}>
            {mainNews && (
                <div className={styles.mainNews}>
                    <span className={styles.category}>{mainNews.category.toUpperCase()}</span>
                    <h2 className={styles.title}>{mainNews.title}</h2>
                    <p className={styles.content}>{mainNews.content.substring(0, 100)}...</p>
                    <button className={styles.exploreButton}>Explore</button>
                </div>
            )}
            <div className={styles.smallerNews}>
                {smallerNews.slice(0, 3).map((item) => (
                    <div key={item.id} className={styles.newsItem}>
                        <div className={styles.placeholder}></div>
                        <div className={styles.textContent}>
                            <span className={styles.date}>Posted {item.date}</span>
                            <h4 className={styles.newsTitle}>{item.title}</h4>
                            <p className={styles.newsContent}>
                                {item.content.length > 50
                                    ? `${item.content.substring(0, 50)}...`
                                    : item.content}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NewsBlock;