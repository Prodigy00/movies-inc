import { useState } from 'react';
import movies from '../api/movies';
import { notify } from '../utils/notify';
import Constants from 'expo-constants';

export const useMoviesFetch = (url, queryParams = {}) => {
  const [data, setMoviesData] = useState([]);
  // console.log({ data });
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
      console.log({ error });
      notify('An error occured');
    }
  };

  return [data, handleMoviesQuery];
};
