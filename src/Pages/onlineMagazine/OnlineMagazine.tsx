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
import {useNewsCache} from "~/shared/helpers/useNewsCache";
import {useAppDispatch} from "~/app/store/store";




const OnlineMagazine = () => {
    const { cachedNews} = useNewsCache();

    // Хуки для получения данных

    const {
        data: categoriesData,
        isLoading: isCategoriesLoading,
        isError: isCategoriesError,
    } = useGetNewsSectionsQuery();



    const newsByCategory = useMemo(() => cachedNews || {}, [cachedNews]);


    return (
        <div className={styles.container}>
            <Header categories={categoriesData || []}/>
            <MainContent
                newsByCategory={newsByCategory || {}}
                isLoading={isCategoriesLoading}
                isError={isCategoriesError}
            />
            <Footer columns={footerData.columns}/>
        </div>
    );
};

export default OnlineMagazine;