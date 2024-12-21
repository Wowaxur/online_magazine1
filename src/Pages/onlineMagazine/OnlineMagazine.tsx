import React, {useMemo} from 'react';
import Header from "~/entities/header/header";
import Footer from "~/entities/footer/footer";
import MainContent from "~/Features/mainContent/mainContent";
import styles from './OnlineMagazine.module.css';
import {footerData} from "~/data";
import { NewsByCategory} from "~/shared/types/types";
import {useGetNewsFeedQuery, useGetNewsSectionsQuery} from "~/shared/api/apiSlice";


const OnlineMagazine = () => {
    // Хуки для получения данных
    const {
        data: categoriesData,
        isLoading: isCategoriesLoading,
        isError: isCategoriesError,
        error: categoriesError,
    } = useGetNewsSectionsQuery();
    const {
        data: newsData,
        isLoading: isNewsDataLoading,
        isError: isNewsDataError,
        error: newsDataError,
    } = useGetNewsFeedQuery()
    const newsByCategory: NewsByCategory = useMemo(() => {
        if (!newsData || typeof newsData !== 'object') return {};
        return newsData; // Используем данные как есть
    }, [newsData]);
    console.log(newsData)
    return (
        <div className={styles.container}>
            <Header categories={categoriesData || []}/>
            <MainContent
                newsByCategory={newsByCategory || {}}
                isLoading={isNewsDataLoading}
                isError={isNewsDataError}
                error={newsDataError}
            />

            {/* Footer */}
            <Footer columns={footerData.columns}/>
        </div>
    );
};

export default OnlineMagazine;