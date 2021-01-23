import { createSlice } from '@reduxjs/toolkit';

export const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    selectedMovie: {},
  },
  reducers: {
    selectMovie: (state, action) => {
      state.selectedMovie = action.payload;
    },
  },
});

export const { selectMovie } = moviesSlice.actions;

export const movieSelector = (state) => state.movies.selectedMovie;

export default moviesSlice.reducer;
