import React, {useEffect, useMemo} from 'react';
import Header from "~/entities/header/header";
import Footer from "~/entities/footer/footer";
import MainContent from "~/Features/mainContent/mainContent";
import styles from './OnlineMagazine.module.css';
import {footerData} from "~/data";
import { NewsByCategory} from "~/shared/types/types";
import {useGetNewsFeedQuery, useGetNewsSectionsQuery} from "~/shared/api/apiSlice";
import {useDispatch} from "react-redux";
import {setNewsByCategory} from "~/shared/api/newsSlice";




const OnlineMagazine = () => {
    const dispatch = useDispatch();

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
    useEffect(() => {
            // @ts-ignore
        dispatch(setNewsByCategory(newsData)); // Если это уже объект, передаем как есть

    }, [newsData, dispatch]);
    const newsByCategory: NewsByCategory = useMemo(() => {
        if (!newsData || typeof newsData !== 'object') return {};
        return newsData; // Используем данные как есть
    }, [newsData]);
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