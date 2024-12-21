import React from 'react';
import MainContentSection from "~/Features/mainContent/MainArticlesBlock/mainContentSection/mainContentSection";
import RightSideBar from "./rightSideBar/rightSideBar";
import s from './MainArticlesBlock.module.css';
import { isWindowDesktop } from "~/shared/helpers/isWindowDesktopHelper";
import { NewsArticle } from "~/shared/types/types";

type NewsByCategory = Record<string, NewsArticle[]>;

interface MainArticlesBlockProps {
    newsByCategory: NewsByCategory;
}

const MainArticlesBlock: React.FC<MainArticlesBlockProps> = ({ newsByCategory }) => {
    const hasNews = newsByCategory && Object.keys(newsByCategory).length > 0;

    if (!hasNews) return <p>No news available.</p>;

    return (
        <div className={s.mainContent}>
            <div className={s.newsWrapper}>
            {Object.entries(newsByCategory).map(([category, articles]) => (
                <div key={category} className={s.categoryBlock}>
                    <h2 className={s.categoryTitle}>{category}</h2>
                    <MainContentSection news={articles} category={category} />
                </div>
            ))}
            </div>
            {isWindowDesktop && <RightSideBar />}
        </div>
    );
};

export default MainArticlesBlock;