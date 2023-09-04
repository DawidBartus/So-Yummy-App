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

const fetchSearchQuery = createAsyncThunk(
    'recipes/fetchSearchQuery',
    async (query, thunkApi) => {
        try {
            const response = await fetchRecipes(query);
            return response;
        } catch (error) {
            return thunkApi.rejectWithValue(error);
        }
    }
);

const initialState = {
    isPending: false,
    categoriesRecipes: {},
    foundRecipes: [],
};

const recipesSlice = createSlice({
    name: 'recipes',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchStartValue.pending, (state, _) => {
                state.isPending = true;
            })
            .addCase(fetchCategoriesRecipes.pending, (state, _) => {
                state.isPending = true;
            })
            .addCase(fetchSearchQuery.pending, (state, _) => {
                state.isPending = true;
            })
            .addCase(fetchStartValue.fulfilled, (state, action) => {
                state.isPending = false;
                state.categoriesRecipes = action.payload;
            })
            .addCase(fetchCategoriesRecipes.fulfilled, (state, action) => {
                state.isPending = false;
                let { id, response } = action.payload;
                state.categoriesRecipes[id] = response;
            })
            .addCase(fetchSearchQuery.fulfilled, (state, action) => {
                state.isPending = false;
                state.foundRecipes = action.payload;
            });
    },
});

export { fetchStartValue, fetchCategoriesRecipes, fetchSearchQuery };
export default recipesSlice.reducer;
