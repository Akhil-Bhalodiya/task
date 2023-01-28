import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./MovieSlice";
import watchReducers from './WatchSlice'

const store = configureStore({
  reducer: {
    movie: movieReducer,
    watchlist: watchReducers
  },
});

export default store;
