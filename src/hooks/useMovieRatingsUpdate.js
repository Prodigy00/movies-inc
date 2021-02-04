import { useState } from 'react';
import movies from '../api/movies';
import { notify } from '../utils/notify';
import Constants from 'expo-constants';
import { Toast } from 'native-base';

export const useMovieRatingsUpdate = (movieId, data = {}, queryParams = {}) => {
  const [ratingIsUpdated, setRatingIsUpdated] = useState('');

  const handleRatingsUpdate = async () => {
    try {
      await movies
        .accept('application/json')
        .accept('charset=utf-8')
        .query({
          ...queryParams,
          api_key: Constants.manifest.extra.moviesApiKey,
        })

        .url(`/movie/${movieId}/rating`)
        .post({ ...data })
        .unauthorized(() => {
          notify('Unauthorized. Please try again.', {
            buttonText: 'Okay',
            type: 'danger',
          });
        })
        .json((res) => {
          setRatingIsUpdated(res.sucess);
          notify('Your rating has been updated!', {
            buttonText: 'Okay',
            type: 'success',
          });
        });
    } catch (error) {
      notify('An error occured', { type: 'danger' });
    }
  };

  return [ratingIsUpdated, handleRatingsUpdate];
};
