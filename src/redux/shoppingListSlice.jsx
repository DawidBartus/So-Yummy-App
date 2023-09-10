import { createSlice } from '@reduxjs/toolkit';

const listFromLocalStorage =
    JSON.parse(localStorage.getItem('shoppingList')) || [];

const saveInLocalStorage = (item) => {
    try {
        localStorage.setItem('shoppingList', JSON.stringify(item));
        console.log(listFromLocalStorage);
    } catch (error) {
        console.error(error);
    }
};

const deleteFromLocalStorage = (item) => {
    try {
        localStorage.removeItem('shoppingList');
        saveInLocalStorage(item);
    } catch (error) {
        console.error(error);
    }
};

const initialState = listFromLocalStorage;

const shoppingListSlice = createSlice({
    name: 'shoppingList',
    initialState,
    reducers: {
        addItem: (state, action) => {
            state.push(action.payload);
            saveInLocalStorage(state);
        },
        deleteItem: (state, action) => {
            const newState = state.filter(
                (element) => element.food !== action.payload
            );
            deleteFromLocalStorage(newState);
            return newState;
        },
    },
});

export const { addItem, deleteItem } = shoppingListSlice.actions;
export default shoppingListSlice.reducer;
