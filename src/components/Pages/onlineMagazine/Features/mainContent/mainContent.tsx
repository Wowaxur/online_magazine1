import React from 'react';
import s from './mainContent.module.css'
import SearchBlock from "./searchBlock/searchBlock";
import NewsBlock from "./MainNewsBlock/newsBlock";
import SubscribeBlock from "./SubscribeInfromatBlock/SubscribeBlock";
const MainContent = () => {
    return (
        <div className={s.mainContent}>
            <SearchBlock />
            <NewsBlock />
            <SubscribeBlock />
        </div>
    );
};

export default MainContent;