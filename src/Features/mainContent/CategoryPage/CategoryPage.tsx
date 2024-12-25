import React from 'react';
import {useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import {NewsArticle} from '~/shared/types/types';
import styles from './CategoryPage.module.css';
import {RootState} from "~/app/store/store";
import NewsCard from "~/Features/NewsCard/NewsCard";
import {isWindowDesktop} from "~/shared/helpers/isWindowDesktopHelper";
import RightSideBar from "~/Features/mainContent/MainArticlesBlock/rightSideBar/rightSideBar";


const CategoryPage: React.FC = () => {
    const {categoryName} = useParams<{ categoryName: string }>();
    const newsData = useSelector((state: RootState) => state.news.newsByCategory);
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
            <div className={styles.Wrapper}>
                <h1 style={{flexWrap: 'nowrap'}}>News in {categoryName}</h1>
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
            </div>
            {isWindowDesktop && <RightSideBar/>}
        </div>
    );
};

export default CategoryPage;