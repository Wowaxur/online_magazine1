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
    error: any;
}

const MainContent: React.FC<MainContentProps> = ({
                                                     newsByCategory,
                                                     isLoading,
                                                     isError,
                                                     error,
                                                 }) => {
    if (isLoading) return <p>Loading news...</p>;
    if (isError) return <p>Error loading news: {error?.message || 'Unknown error'}</p>;

    return (
        <div className={s.mainContent}>
            {/*<SearchBlock />*/}
            <MainArticlesBlock newsByCategory={newsByCategory} />
            <SubscribeBlock />
        </div>
    );
};

export default MainContent;