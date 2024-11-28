import { cartReducer } from '@/app/features/cartSlice';
import { countReducer } from '@/app/features/countSlice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        count: countReducer
    },
});

store.subscribe(() => {
    const { products, } = store.getState().cart;
    try {
        localStorage.setItem('cart', JSON.stringify(products));
    } catch (error) {
        console.error("Error saving cart to localStorage:", error);
    }
});
