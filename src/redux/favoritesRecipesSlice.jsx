import { createSlice } from '@reduxjs/toolkit';

const getFav = JSON.parse(localStorage.getItem('favoritesRecipes'));

// Should be an array of object
//  [{name: uri}, {name: uri}]

const initialState = { recipeList: getFav || [], lastOpen: {} };

const saveInLocalStorage = (item) => {
    try {
        localStorage.setItem('favoritesRecipes', JSON.stringify(item));
    } catch (error) {
        throw new Error('Save item error:', error);
    }
};

const favoritesRecipesSlice = createSlice({
    name: 'favoritesRecipesSlice',
    initialState,
    reducers: {
        addFavItem: (state, action) => {
            if (
                !state.recipeList.find(
                    (elem) => elem.name === action.payload.name
                )
            ) {
                // if action.payload.name isn't in state: add
                state.recipeList.push(action.payload);
                saveInLocalStorage(state.recipeList);
            } else if (
                state.recipeList.find(
                    (elem) => elem.name === action.payload.name
                )
            ) {
                // if action.payload.name is in state: delete
                state.recipeList = state.recipeList.filter(
                    (elem) => elem.name !== action.payload.name
                );
                saveInLocalStorage(state.recipeList);
            }
        },
    },
});

export const { addFavItem } = favoritesRecipesSlice.actions;
export default favoritesRecipesSlice.reducer;
