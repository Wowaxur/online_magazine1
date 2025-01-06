import React from 'react';
import s from './mainContent.module.css';
import SearchBlock from "./searchBlock/searchBlock";
import SubscribeBlock from "./SubscribeInfromatBlock/SubscribeBlock";
import MainArticlesBlock from "~/Features/mainContent/MainArticlesBlock/MainArticlesBlock";
import { NewsArticle} from "~/shared/types/types";

type NewsByCategory = Record<string, NewsArticle[]>;

interface MainContentProps {
    newsByCategory: NewsByCategory;
    isLoading: boolean;
    isError: boolean;
}

const MainContent: React.FC<MainContentProps> = ({
                                                     newsByCategory,
                                                     isLoading,
                                                     isError,
                                                 }) => {
    if (isLoading) return <p>Loading news...</p>;

    return (
        <div className={s.mainContent}>
            {/*<SearchBlock />*/}
            <MainArticlesBlock newsByCategory={newsByCategory} />
            <SubscribeBlock />
        </div>
    );
};

export default MainContent;