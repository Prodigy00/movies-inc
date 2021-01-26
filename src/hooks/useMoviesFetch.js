import { useState } from 'react';
import movies from '../api/movies';
import { notify } from '../utils/notify';
import Constants from 'expo-constants';

export const useMoviesFetch = (url, queryParams = {}) => {
  const [data, setMoviesData] = useState([]);

  const handleMoviesQuery = async () => {
    try {
      let response = await movies
        .accept('application/json')
        .query({
          ...queryParams,
          api_key: Constants.manifest.extra.moviesApiKey,
        })

        .url(url)
        .get()
        .json();

      setMoviesData(response.results);
    } catch (error) {
      notify('An error occured', { type: 'data' });
    }
  };

  return [data, handleMoviesQuery];
};
