import React from "react";
import styles from "./popular.module.css";
import {categoryStyles} from "~/shared/helpers/categoryColor";

type NewsItem = {
    id: number;
    category: string;
    title: string;
    content: string;
    date: string;
    author: string;
    tags: string[];
    image?: string;
};

type PopularProps = {
    news: NewsItem[];
};

// Функция для выбора случайных новостей
function getRandomNewsSet(news: NewsItem[]): NewsItem[] {
    let count = 9
    if (count > news.length) {
        console.error("The requested number of news items exceeds the available list size.");
        return [];
    }

    const selectedNews: NewsItem[] = [];
    const usedIds = new Set<number>();

    while (selectedNews.length < count) {
        const randomIndex = Math.floor(Math.random() * news.length);
        const randomNews = news[randomIndex];

        if (!usedIds.has(randomNews.id)) {
            selectedNews.push(randomNews);
            usedIds.add(randomNews.id);
        }
    }

    return selectedNews;
}

const Popular = ({ news }: PopularProps) => {
    const randomNews = getRandomNewsSet(news);

    return (
        <div className={styles.popularContainer}>
            <div className={styles.popularTitle}>POPULAR ON INFORMAT</div>

            {randomNews.map((item) => {
                const categoryStyle = categoryStyles[item.category];

                if (!categoryStyle) {
                    console.error(`Category style for "${item.category}" is not defined.`);
                    return null;
                }

                return (
                    <div className={styles.newsCard} key={item.id}>
                        <div className={styles.imageContainer}>
                            <img
                                src={item.image || "https://via.placeholder.com/260x120"}
                                alt={item.category}
                                className={styles.newsImage}
                            />
                            <span
                                className={styles.newsTag}
                                style={{ color: categoryStyle.color }}
                            >
                                {item.category.toUpperCase()}
                            </span>
                        </div>
                        <div className={styles.newsContentContainer}>
                            <span className={styles.newsDate}>Posted {item.date}</span>
                            <h4 className={styles.newsTitle}>{item.title}</h4>
                            <p className={styles.newsContent}>
                                {item.content.length > 100
                                    ? `${item.content.substring(0, 100)}...`
                                    : item.content}
                            </p>
                            <button
                                className={styles.exploreButton}
                                style={{ color: categoryStyle.color }}
                            >
                                EXPLORE
                            </button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Popular;