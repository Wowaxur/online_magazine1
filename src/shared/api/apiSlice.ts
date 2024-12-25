import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {NewsByCategory, NewsResponse, NewsSection} from "~/shared/types/types";
import {RootState} from "~/app/store/store";

export const okSurfApiSlice = createApi({
    reducerPath: 'okSurfApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://ok.surf/api/v1',
    }),
    tagTypes: ['News', 'Sections', 'Feed'], // Добавлено для корректной работы RTK Query
    endpoints: (builder) => ({
        // Получение всех новостей
        getAllNews: builder.query<NewsResponse, void>({
            query: () => '/cors/news-feed',
            providesTags: ['News'], // Укажите зависимости для кеширования
        }),
        // Получение доступных секций новостей
        getNewsSections: builder.query<NewsSection[], void>({
            query: () => '/cors/news-section-names',
            providesTags: ['Sections'],
        }),
        getNewsFeed: builder.query<NewsByCategory[], void>({
            query: () => '/cors/news-feed',
            providesTags: ['Feed'],
        }),
        // Получение новостей для указанных секций
        getNewsBySections: builder.mutation<NewsResponse, { sections: string[] }>({
            query: (body) => ({
                url: '/news-section',
                method: 'POST',
                body,
            }),
            invalidatesTags: ['News'],
        }),
    }),
});
export const selectCategories = (state: RootState) =>
    state.okSurfApi.queries['getNewsSections(undefined)']?.data || [];
// Экспорт хуков
export const {
    useGetAllNewsQuery,
    useGetNewsSectionsQuery,
    useGetNewsFeedQuery,
    useGetNewsBySectionsMutation,
} = okSurfApiSlice;