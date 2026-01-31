import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value : 0,
}

 const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },

    decrement: (state) =>{
      state.value -= 1;
    },

    incrementByAmount: (state, action) =>{
      state.value += action.payload
    },

    multiply: (state)=>{
      state.value *= 2;
    }
  }
})

export const {increment, multiply, decrement, incrementByAmount} = counterSlice.actions;

export default counterSlice.reducer;