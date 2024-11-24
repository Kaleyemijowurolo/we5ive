import { cartReducer } from '@/app/features/cartSlice';
import { countReducer } from '@/app/features/countSlice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        count: countReducer
    },
});