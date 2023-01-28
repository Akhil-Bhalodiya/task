import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const watchSlice = createSlice({
  name: "watchlist",
  initialState,
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
    remove(state, action) {
      return action.payload;
    },
  },
});

export const { add, remove } = watchSlice.actions;
export default watchSlice.reducer;
