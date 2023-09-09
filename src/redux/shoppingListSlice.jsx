import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const shoppingListSlice = createSlice({
    name: 'shoppingList',
    initialState,
    reducers: {
        addItem: (state, action) => {
            state.push(action.payload);
        },
        deleteItem: (state, action) => {
            return state.filter((element) => element.food !== action.payload);
        },
    },
});

export const { addItem, deleteItem } = shoppingListSlice.actions;
export default shoppingListSlice.reducer;
