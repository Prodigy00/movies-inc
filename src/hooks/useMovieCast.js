import { useState } from 'react';
import movies from '../api/movies';
import { notify } from '../utils/notify';

export const useMovieCast = (url, queryParams = {}) => {
  const [cast, setCastData] = useState([]);
  console.log({ cast });
  const handleCastQuery = async () => {
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

      setCastData(response.cast);
    } catch (error) {
      console.log({ error });
      notify('An error occured');
    }
  };

  return [cast, handleCastQuery];
};
