import React from 'react';
import s from './mainContent.module.css'
import SearchBlock from "./searchBlock/searchBlock";
import NewsBlock from "./MainNewsBlock/newsBlock";
const MainContent = () => {
    return (
        <div className={s.mainContent}>
            <SearchBlock />
            <NewsBlock />

        </div>
    );
};

export default MainContent;