import { createSlice } from '@reduxjs/toolkit';

const getFav = JSON.parse(localStorage.getItem('favoritesRecipes'));
// Should be an array of object
//  [{name: url}, {name: url}]

const initialState = { recipeList: getFav || [], lastOpen: {} };

const saveInLocalStorage = (item) => {
    try {
        localStorage.setItem('favoritesRecipes', JSON.stringify(item));
    } catch (error) {
        throw new Error('Save item error:', error);
    }
};

const favoritesRecipes = createSlice({
    name: 'favoritesRecipes',
    initialState,
    reducers: {
        addFavItem: (state, action) => {
            if (
                !state.recipeList.find(
                    (elem) => elem.name === action.payload.name
                )
            ) {
                state.recipeList.push(action.payload);
                saveInLocalStorage(state.recipeList);
            }
        },
    },
});

export const { addFavItem } = favoritesRecipes.actions;
export default favoritesRecipes.reducer;
