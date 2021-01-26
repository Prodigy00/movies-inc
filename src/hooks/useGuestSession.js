import { useState } from 'react';
import { useSelector } from 'react-redux';
import { guestSessionSelector, setGuestSession } from '../slices/moviesSlice';
import movies from '../api/movies';
import Constants from 'expo-constants';
import dayjs from 'dayjs';
import { notify } from '../utils/notify';

export const useGuestSession = () => {
  const guestSession = useSelector(guestSessionSelector);
  const { id, expiresAt } = guestSession;
  const [sessionId, setSessionId] = useState(() => id);

  const sessionIdExists = () => sessionId.length > 0;

  const sessionIsExpired = () => dayjs().isAfter(dayjs(expiresAt));

  const getGuestId = async () => {
    try {
      let response = await movies
        .accept('application/json')
        .query({ api_key: Constants.manifest.extra.moviesApiKey })
        .url('/authentication/guest_session/new')
        .get()
        .json();

      setGuestSession(response);
      setSessionId(response.guest_session_id);
      console.log({ guestSession });
    } catch (error) {
      console.log({ error });
      notify('Guest session could not be retrieved');
    }
  };

  const getSessionId = async () => {
    let idExists = sessionIdExists();
    let isExpired = sessionIsExpired();

    if (idExists && !isExpired) {
      return;
    } else {
      return await getGuestId();
    }
  };

  return [sessionId, getSessionId, sessionIsExpired, sessionIdExists];
};
