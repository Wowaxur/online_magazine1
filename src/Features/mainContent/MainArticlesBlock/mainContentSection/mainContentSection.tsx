import React from "react";
import styles from "./mainContentSection.module.css";
import { NewsArticle } from "~/shared/types/types";
import NewsSection from "~/Features/mainContent/MainArticlesBlock/mainContentSection/newsSection/newsSection";

interface MainContentSectionProps {
    news: NewsArticle[];
    category: string;
}

const MainContentSection: React.FC<MainContentSectionProps> = ({ news, category }) => {
    if (!news.length) return <p>No news available for {category}.</p>;
    return (
        <div className={styles.container}>
            <NewsSection news={news} category={category} />
        </div>
    );
};

export default MainContentSection;