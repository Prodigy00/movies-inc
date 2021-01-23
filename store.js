import { configureStore } from '@reduxjs/toolkit';
import favouritesReducer from './src/slices/favouritesSlice';
import moviesReducer from './src/slices/moviesSlice';

export default configureStore({
  reducer: {
    favourites: favouritesReducer,
    movies: moviesReducer,
  },
});
