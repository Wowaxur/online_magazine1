import React from 'react';
import { useSelector } from 'react-redux';
import {useNavigate, useParams} from 'react-router-dom';
import { NewsArticle } from '~/shared/types/types';
import styles from './CategoryPage.module.css';
import { RootState } from '~/app/store/store';
import NewsCard from '~/Features/NewsCard/NewsCard';

const CategoryPage: React.FC = () => {
    const { categoryName } = useParams<{ categoryName: string }>();
    const navigate = useNavigate(); // Хук для навигации

    const cachedNews = useSelector((state: RootState) => state.news.newsByCategory);
    if (!categoryName) {
        return (
            <div className={styles.container}>
                <h1>Category not specified</h1>
                <button className={styles.redirectButton} onClick={() => navigate('/news')}>
                    Go to News
                </button>
            </div>
        );
    }

    const filteredNews: NewsArticle[] = Object.entries(cachedNews || {}).flatMap(
        ([category, articles]) => (category === categoryName ? articles : [])
    );

    if (filteredNews.length === 0) {
        return (
            <div className={styles.container}>


                <h1>No news available for category {categoryName}</h1>
                <button className={styles.redirectButton} onClick={() => navigate('/news')}>
                    Go to News
                </button>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <div className={styles.Wrapper}>
                <h1>News in {categoryName}</h1>
                <div className={styles.NewsContainer}>
                    {filteredNews.map((newsItem, index) => (
                        <NewsCard
                            key={index}
                            title={newsItem.title}
                            link={newsItem.link}
                            og={newsItem.og}
                            sourceIcon={newsItem.source_icon}
                            category={categoryName}
                        />
                    ))}
                </div>
                <button className={styles.redirectButton} onClick={() => navigate('/news')}>
                    Go to News
                </button>
            </div>
        </div>
    );
};

export default CategoryPage;