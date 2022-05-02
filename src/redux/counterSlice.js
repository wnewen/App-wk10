import { createSlice } from '@reduxjs/toolkit';


// Part1: Define Slice (including reducers and actions)
const initialState = { counterValue: 0 };

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setIncreaseCounter: (state, action) => {
      state.counterValue = action.payload;
    },
    setDecreaseCounter: (state, action) => {
      state.counterValue = action.payload;
    },
  },
});

// export state to global
export const selectCounter = (state) => state.counter.counterValue;

// export actions to global
export const { setIncreaseCounter } = counterSlice.actions;
export const { setDecreaseCounter } = counterSlice.actions;

// export reducer to global
export default counterSlice.reducer;