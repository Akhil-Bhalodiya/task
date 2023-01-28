import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const STATUES = {
    IDLE: "idle",
    ERROR: "error",
    LOADING: "loading",
}
const initialstate = [];

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    movie: [],
    status: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state, action) => {
        state.status = STATUES.LOADING;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.movie = action.payload.results;
        state.status = STATUES.IDLE;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = STATUES.ERROR;
      });
  },
});

export const {movie, setStatus} = movieSlice.actions;
export default movieSlice.reducer;

export const fetchMovies = createAsyncThunk("movie/fetch", async()=> {
    const res = await fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=34142515d9d23817496eeb4ff1d223d0&language=en");
    return res.json();
    
})
