import { useState } from 'react';
import movies from '../api/movies';
import { notify } from '../utils/notify';

export const useMoviesFetch = (url, queryParams = {}) => {
  const [data, setMoviesData] = useState([]);

  const handleMoviesQuery = async () => {
    try {
      let response = await movies
        .accept('application/json')
        .query({
          ...queryParams,
          api_key: process.env.REACT_NATIVE_MOVIES_DB_API_KEY,
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
