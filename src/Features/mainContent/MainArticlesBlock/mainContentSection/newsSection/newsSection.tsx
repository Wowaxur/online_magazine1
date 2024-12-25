import React from "react";
import styles from "./newsSection.module.css";
import { NewsArticle } from "~/shared/types/types";
import NewsCard from "~/Features/NewsCard/NewsCard";

interface NewsBlockProps {
    news: NewsArticle[];
    category: string;
}

const NewsSection: React.FC<NewsBlockProps> = ({ news, category }) => {
    if (!news.length) return null;

    return (
        <div className={styles.cardContainer}>
            {news.map((item, index) => (
                <NewsCard
                    key={index}
                    title={item.title}
                    link={item.link}
                    og={item.og}
                    sourceIcon={item.source_icon}
                    category={category}
                />
            ))}
        </div>
    );
};

export default NewsSection;