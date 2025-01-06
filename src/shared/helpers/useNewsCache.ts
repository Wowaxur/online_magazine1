import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useGetNewsFeedQuery } from '~/shared/api/apiSlice';
import { setNewsByCategory } from '~/shared/api/newsSlice';
import {RootState, useAppDispatch} from '~/app/store/store';

export const useNewsCache = () => {
    const dispatch = useAppDispatch();
    const { data: newsData, isLoading } = useGetNewsFeedQuery();
    const cachedNews = useSelector((state: RootState) => state.news.newsByCategory);

    useEffect(() => {
        const storedNews = localStorage.getItem('newsByCategory');
        if (storedNews) {
            const parsedNews = JSON.parse(storedNews);
            dispatch(setNewsByCategory(parsedNews));
        }
    }, [dispatch]);

    useEffect(() => {
        if (newsData && !isLoading) {
            const storedNews = localStorage.getItem('newsByCategory');
            const parsedNews = storedNews ? JSON.parse(storedNews) : null;

            if (!parsedNews || JSON.stringify(parsedNews) !== JSON.stringify(newsData)) {
                localStorage.setItem('newsByCategory', JSON.stringify(newsData));
                // @ts-ignore
                dispatch(setNewsByCategory(newsData));
            }
        }
    }, [newsData, isLoading, dispatch]);

    return { cachedNews, isLoading };
};