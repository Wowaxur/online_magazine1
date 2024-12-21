import { configureStore } from '@reduxjs/toolkit';
import {okSurfApiSlice} from "~/shared/api/apiSlice";

export const store = configureStore({
    reducer: {
        [okSurfApiSlice.reducerPath]: okSurfApiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(okSurfApiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;