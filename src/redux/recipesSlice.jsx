import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import firstApiFetch, { fetchMore, fetchRecipes } from '../Services/ApiFetch';

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

const fetchMoreRecipes = createAsyncThunk(
    'recipes/fetchMore',
    async ({ nextPage, newId }, thunkApi) => {
        try {
            const response = await fetchMore(nextPage, newId);
            const { responseArray, loadMore } = response;
            return { responseArray, loadMore, newId };
        } catch (error) {
            return thunkApi.rejectWithValue(error);
        }
    }
);

const initialState = {
    isPending: false,
    categoriesRecipes: {},
    foundRecipes: [],
    nextPage: [],
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
                state.foundRecipes = [];
                state.isPending = true;
            })
            .addCase(fetchMoreRecipes.pending, (state, _) => {
                state.isPending = true;
            })
            .addCase(fetchStartValue.fulfilled, (state, action) => {
                state.isPending = false;
                state.categoriesRecipes = action.payload;
            })
            .addCase(fetchCategoriesRecipes.fulfilled, (state, action) => {
                state.isPending = false;
                const { response, id } = action.payload;
                state.nextPage = response.nextPage;
                state.categoriesRecipes[id] = response.responseArray;
            })
            .addCase(fetchSearchQuery.fulfilled, (state, action) => {
                state.isPending = false;
                state.foundRecipes = action.payload;
            })
            .addCase(fetchMoreRecipes.fulfilled, (state, action) => {
                state.isPending = false;
                const { responseArray, loadMore, newId } = action.payload;
                state.nextPage = loadMore;
                state.categoriesRecipes[newId] = [
                    ...state.categoriesRecipes[newId],
                    ...responseArray,
                ];
            })
            .addCase(fetchStartValue.rejected, (state, _) => {
                state.categoriesRecipes = [];
            })
            .addCase(fetchCategoriesRecipes.rejected, (state, action) => {
                state.nextPage = [];
                state.categoriesRecipes[action.id] = [];
            })
            .addCase(fetchSearchQuery.rejected, (state, _) => {
                state.foundRecipes = [];
            });
    },
});

export {
    fetchStartValue,
    fetchCategoriesRecipes,
    fetchSearchQuery,
    fetchMoreRecipes,
};
export default recipesSlice.reducer;
