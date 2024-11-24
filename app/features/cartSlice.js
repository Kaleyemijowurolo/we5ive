import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: []
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const productInCart = state.products.find((item) => item.id === action.payload.id);
            if (productInCart) {
                productInCart.quantity++;
            } else {
                state.products.push({ ...action.payload });
            }
        },
        incrementQuantity: (state, action) => {
            const productInCart = state.products.find((item) => item.id === action.payload);
            if (productInCart) {
                productInCart.quantity++;
            }
        },
        decrementQuantity: (state, action) => {
            const productInCart = state.products.find((item) => item.id === action.payload);
            if (productInCart && productInCart.quantity > 1) {
                productInCart.quantity--;
            }
        },
        removeFromCart: (state, action) => {
            const productsAfterRemove = state.products.filter((item) => item.id !== action.payload);
            state.products = productsAfterRemove;
        },
        incrementQuantityByNumber: (state, action) => {
            const productInCart = state.products.find((item) => item.id === action.payload.id);
            if (productInCart?.quantity) {
                productInCart.quantity = action.payload.quantity;
            }
        }
    }
});

export const cartReducer = cartSlice.reducer;

export const { addToCart, incrementQuantity, decrementQuantity, removeFromCart, incrementQuantityByNumber } = cartSlice.actions;