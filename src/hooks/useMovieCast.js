import { useState } from 'react';
import movies from '../api/movies';
import { notify } from '../utils/notify';
import Constants from 'expo-constants';

export const useMovieCast = (url, queryParams = {}) => {
  const [cast, setCastData] = useState([]);

  const handleCastQuery = async () => {
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

      setCastData(response.cast);
    } catch (error) {
      console.log({ error });
      notify('An error occured');
    }
  };

  return [cast, handleCastQuery];
};
