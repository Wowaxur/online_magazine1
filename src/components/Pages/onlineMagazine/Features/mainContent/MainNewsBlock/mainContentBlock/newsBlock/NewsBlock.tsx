import React from "react";
import styles from "./NewsBlock.module.css";
import { NewsItem } from "../../../../../../../../data";

type NewsBlockProps = {
    news: NewsItem[]; // Список новостей
    categoryColor: string; // Цвет категории
};

const NewsBlock = ({ news, categoryColor }: NewsBlockProps) => {
    const excludedCategories = ['Startups', 'Humans'];
    const filteredNews = news.filter((item) => !excludedCategories.includes(item.category));

    const mainNews = filteredNews.find((item) => item.tags.includes("Main"));
    const smallerNews = filteredNews.filter((item) => !item.tags.includes("Main"));

    return (
        <div className={styles.container}>
            {mainNews && (
                <div className={styles.mainNews}>
                    <span
                        className={styles.category}
                        style={{ color: categoryColor }}
                    >
                        {mainNews.category.toUpperCase()}
                    </span>
                    <h2
                        className={styles.title}
                        style={{ borderColor: categoryColor }}
                    >
                        {mainNews.title}
                    </h2>
                    <p className={styles.content}>
                        {mainNews.content.substring(0, 350)}...
                    </p>
                    <button
                        className={styles.exploreButton}
                        style={{ color: categoryColor }}
                    >
                        Explore
                    </button>
                </div>
            )}
            <div className={styles.smallerNews}>
                {smallerNews.slice(0, 3).map((item) => (
                    <div key={item.id} className={styles.newsItem}>
                        <div
                            className={styles.placeholder}
                            // style={{ backgroundColor: categoryColor }}
                        ></div>
                        <div className={styles.textContent}>
                            <span className={styles.date}>
                                Posted {item.date}
                            </span>
                            <span className={styles.date}>
                                Author {item.author}
                            </span>
                            <h4 className={styles.newsTitle}>{item.title}</h4>
                            <p className={styles.newsContent}>
                                {item.content.length > 150
                                    ? `${item.content.substring(0, 150)}...`
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