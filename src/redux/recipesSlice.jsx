import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import firstApiFetch, { fetchRecipes } from '../Services/ApiFetch';

const fetchStartValue = createAsyncThunk(
    'recipes/fetchStartValue',
    async (_, thunkApi) => {
        try {
            const response = await firstApiFetch();
            return response;
        } catch (error) {
            return thunkApi.rejectWithValue(error);
        }
    }
);

const fetchCategoriesRecipes = createAsyncThunk(
    'recipes/fetchCategoriesRecipes',
    async (id, thunkApi) => {
        try {
            const response = await fetchRecipes(id);
            return { response, id };
        } catch (error) {
            return thunkApi.rejectWithValue(error);
        }
    }
);

const initialState = { recipes: [], isPending: false, categoriesRecipes: {} };

const recipesSlice = createSlice({
    name: 'recipes',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchStartValue.pending, (state, payload) => {
                state.isPending = true;
            })
            .addCase(fetchCategoriesRecipes.pending, (state, payload) => {
                state.isPending = true;
            })
            .addCase(fetchStartValue.fulfilled, (state, action) => {
                state.isPending = false;
                state.recipes = action.payload;
            })
            .addCase(fetchCategoriesRecipes.fulfilled, (state, action) => {
                state.isPending = false;
                let { id, response } = action.payload;
                state.categoriesRecipes[id] = response;
            });
    },
});

export { fetchStartValue, fetchCategoriesRecipes };
export default recipesSlice.reducer;
