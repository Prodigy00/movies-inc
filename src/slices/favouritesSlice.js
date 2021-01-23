import { createSlice } from '@reduxjs/toolkit';

export const favouritesSlice = createSlice({
  name: 'favourites',
  initialState: {
    favouriteMovies: [],
  },
  reducers: {
    addToFavourites: (state, action) => {
      state.favouriteMovies.push(action.payload);
    },
    removeFromFavourites: (state, action) => {
      state.favouriteMovies = state.favouriteMovies.filter(
        (movie) => movie.id !== action.payload.id
      );
    },
  },
});

export const {
  addToFavourites,
  removeFromFavourites,
} = favouritesSlice.actions;

export const selectFavourites = (state) => state.favourites.favouriteMovies;

export default favouritesSlice.reducer;
