import { createSlice } from '@reduxjs/toolkit';

const listFromLocalStorage =
    JSON.parse(localStorage.getItem('shoppingList')) || [];

const saveInLocalStorage = (item) => {
    try {
        localStorage.setItem('shoppingList', JSON.stringify(item));
    } catch (error) {
        throw new Error('Save item error:', error);
    }
};

const deleteFromLocalStorage = (item) => {
    try {
        localStorage.removeItem('shoppingList');
        saveInLocalStorage(item);
    } catch (error) {
        throw new Error('Delete item error:', error);
    }
};

const initialState = { listFromLocalStorage, lastDeleted: [] };

const shoppingListSlice = createSlice({
    name: 'shoppingList',
    initialState,
    reducers: {
        addItem: (state, action) => {
            state.listFromLocalStorage.push(action.payload);
            saveInLocalStorage(state.listFromLocalStorage);
        },
        deleteItem: (state, action) => {
            const updatedLastDeleted = [...state.lastDeleted, action.payload];
            if (updatedLastDeleted.length > 3) {
                updatedLastDeleted.splice(0, updatedLastDeleted.length - 3);
            }

            const newState = {
                ...state,
                lastDeleted: updatedLastDeleted,
                listFromLocalStorage: state.listFromLocalStorage.filter(
                    (element) => element.food !== action.payload
                ),
            };

            deleteFromLocalStorage(newState.listFromLocalStorage);
            return newState;
        },
    },
});

export const { addItem, deleteItem } = shoppingListSlice.actions;
export default shoppingListSlice.reducer;
