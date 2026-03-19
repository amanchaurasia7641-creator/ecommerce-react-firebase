import { createSlice } from '@reduxjs/toolkit';

let initialState = [];

try {
    const cartData = localStorage.getItem("cart");
    initialState = cartData ? JSON.parse(cartData) : [];
} catch (error) {
    initialState = [];
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            state.push(action.payload)
        },
        deleteFromCart(state, action) {
            return state.filter((item) => item.id !== action.payload);
        },
        incrementQuantity(state, action) {
            state.forEach(item => {
                if (item.id === action.payload) {
                    item.quantity++;
                }
            });
        },
        decrementQuantity(state, action) {
            state.forEach(item => {
                if (item.id === action.payload && item.quantity > 1) {
                    item.quantity--;
                }
            });
        },
    },
})

export const { addToCart, deleteFromCart, incrementQuantity, decrementQuantity } = cartSlice.actions

export default cartSlice.reducer