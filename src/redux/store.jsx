import { configureStore } from '@reduxjs/toolkit';
import pageModeReducer from './pageModeSlice';
import recipesSlice from './recipesSlice';
import shoppingListSlice from './shoppingListSlice';
import favoritesRecipesSlice from './favoritesRecipesSlice';

const store = configureStore({
    reducer: {
        pageMode: pageModeReducer,
        recipes: recipesSlice,
        shoppingList: shoppingListSlice,
        favoriteRecipes: favoritesRecipesSlice,
    },
});

export default store;
