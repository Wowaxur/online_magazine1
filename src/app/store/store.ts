import { configureStore } from '@reduxjs/toolkit';
import newsReducer from '~/shared/api/newsSlice';
import { okSurfApiSlice } from '~/shared/api/apiSlice';
import {useDispatch} from "react-redux";

export const store = configureStore({
    reducer: {
        news: newsReducer,
        [okSurfApiSlice.reducerPath]: okSurfApiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(okSurfApiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;