import { createSlice } from '@reduxjs/toolkit';

export const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    selectedMovie: {},
    guestSession: {
      id: '',
      expiresAt: '',
    },
  },
  reducers: {
    selectMovie: (state, action) => {
      state.selectedMovie = action.payload;
    },
    setGuestSession: (state, action) => {
      state.guestSession = action.payload;
    },
  },
});

export const { selectMovie, setGuestSession } = moviesSlice.actions;

export const movieSelector = (state) => state.movies.selectedMovie;
export const guestSessionSelector = (state) => state.movies.guestSession;

export default moviesSlice.reducer;
