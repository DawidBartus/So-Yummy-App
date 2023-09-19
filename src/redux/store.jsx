import { configureStore } from '@reduxjs/toolkit';
import pageModeReducer from './pageModeSlice';
import recipesSlice from './recipesSlice';
import shoppingListSlice from './shoppingListSlice';
import favoritesRecipes from './favoritesRecipes';

const store = configureStore({
    reducer: {
        pageMode: pageModeReducer,
        recipes: recipesSlice,
        shoppingList: shoppingListSlice,
        favoriteRecipes: favoritesRecipes,
    },
});

export default store;
