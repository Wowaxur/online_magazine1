import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { NewsArticle } from '~/shared/types/types';
import styles from './CategoryPage.module.css';
import {RootState} from "~/app/store/store";



const CategoryPage: React.FC = () => {
    const { categoryName } = useParams<{ categoryName: string }>();
    const newsData = useSelector((state: RootState) => state.news.newsByCategory);
    console.log(newsData)
    if (!categoryName) {
        return (
            <div className={styles.container}>
                <h1>Category not specified</h1>
            </div>
        );
    }

    const filteredNews: NewsArticle[] = Object.entries(newsData || {}).flatMap(
        ([category, articles]) => (category === categoryName ? articles : [])
    );

    if (filteredNews.length === 0) {
        return (
            <div className={styles.container}>
                <h1>No news available for category {categoryName}</h1>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <h1>News in {categoryName}</h1>
            <ul>
                {filteredNews.map((newsItem, index) => (
                    <li key={index} className={styles.newsItem}>
                        <h2>{newsItem.title}</h2>
                        <a href={newsItem.link} target="_blank" rel="noopener noreferrer">
                            Read more
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CategoryPage;