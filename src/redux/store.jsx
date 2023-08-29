import { configureStore } from '@reduxjs/toolkit';
import pageModeReducer from './pageModeSlice';
import recipesSlice from './recipesSlice';

const store = configureStore({
    reducer: {
        pageMode: pageModeReducer,
        recipes: recipesSlice,
    },
});

export default store;
