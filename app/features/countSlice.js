import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    count: 1
};

export const countSlice = createSlice({
    name: 'count',
    initialState,
    reducers: {
        incrementCount: (state) => {
            state.count++;
        },
        decrementCount: (state, action) => {
            if (state.count > 1) {
                state.count--;
            }
        },
        resetCount: (state) => {
            state.count = 1;
        }
    }
});

export const countReducer = countSlice.reducer;

export const { incrementCount, decrementCount, resetCount } = countSlice.actions;