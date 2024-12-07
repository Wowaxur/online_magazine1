import React from "react";
import styles from "./popular.module.css";

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
function getRandomNewsSet(news: NewsItem[], count: number): NewsItem[] {
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

// Функция для определения класса цвета по категории
const getCategoryClass = (category: string): string => {
    switch (category.toUpperCase()) {
        case "TECH":
            return styles.tech;
        case "POLITICS":
            return styles.politics;
        case "HOME":
            return styles.home;
        case "HUMANS":
            return styles.human;
        case "STARTUPS":
            return styles.startups;
        case "HEALTH":
            return styles.health;
        case "LIFESTYLE":
            return styles.lifestyle;
        default:
            return "";
    }
};

const Popular = ({ news }: PopularProps) => {
    const randomNews = getRandomNewsSet(news, 9);

    return (
        <div className={styles.popularContainer}>
            {randomNews.map((item) => (
                <div className={styles.newsCard} key={item.id}>
                    <div className={styles.imageContainer}>
                        <img
                            src={item.image || "https://via.placeholder.com/300x150"}
                            alt={item.category}
                            className={styles.newsImage}
                        />
                        <span className={`${styles.newsTag} ${getCategoryClass(item.category)}`}>
              {item.category.toUpperCase()}
            </span>
                    </div>
                    <div className={styles.newsContentContainer}>
                        <span className={styles.newsDate}>Posted {item.date}</span>
                        <h4 className={styles.newsTitle}>{item.title}</h4>
                        <p className={styles.newsContent}>
                            {item.content.length > 50 ? `${item.content.substring(0, 50)}...` : item.content}
                        </p>
                        <button className={styles.exploreButton}>EXPLORE</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Popular;