import { configureStore } from '@reduxjs/toolkit';
import pageModeReducer from './pageModeSlice';
import recipesSlice from './recipesSlice';
import shoppingListSlice from './shoppingListSlice';

const store = configureStore({
    reducer: {
        pageMode: pageModeReducer,
        recipes: recipesSlice,
        shoppingList: shoppingListSlice,
    },
});

export default store;
