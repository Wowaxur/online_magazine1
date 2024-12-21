import React from "react";
import styles from "./newsSection.module.css";
import { NewsArticle } from "~/shared/types/types";
import ValidatedImage from "~/shared/helpers/ValidatedImage";

interface NewsBlockProps {
    news: NewsArticle[];
    categoryColor: string;
}

const NewsSection: React.FC<NewsBlockProps> = ({ news, categoryColor }) => {
    if (!news.length) return null;

    return (
        <div className={styles.container}>
            {/* Остальные новости */}
            <div className={styles.otherNews}>
                {news.slice(0, 5).map((item, index) => (
                    <div key={index} className={styles.newsItem}>
                        <ValidatedImage src={item.source_icon} width={'25px'} height={'25px'}   />                     <>
                            <h3>{item.title}</h3>
                            <ValidatedImage src={item.og} width="100px" height="100px" />
                        </>
                        <a rel="noreferrer" href={`${item.link}`} target="_blank">
                            Read More
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NewsSection;