import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NewsByCategory } from '~/shared/types/types';

interface NewsState {
    newsByCategory: NewsByCategory;
}

const initialState: NewsState = {
    newsByCategory: {}, // Объект с категориями и новостями
};

const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        setNewsByCategory: (state, action: PayloadAction<NewsByCategory>) => {
            state.newsByCategory = action.payload;
        },
    },
});

export const { setNewsByCategory } = newsSlice.actions;
export default newsSlice.reducer;