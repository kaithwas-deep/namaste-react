import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        removetem: (state) => {
            state.items.pop();
        },
        clearCart: (state) => {
            // state.items.length = 0;
            state.items = [];
        }
    }
});

export const {addItem, removetem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;