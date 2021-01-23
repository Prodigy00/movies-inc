import { useState, useCallback, useEffect } from 'react';
import { normalizedGenres } from '../utils/normalizedGenres';
/**
 *
 * @param {Array} genreIdList list of ids of type:number
 */
export const useGenres = (genreIdList = []) => {
  const [genres, setGenres] = useState(genreIdList);

  let normalized = normalizedGenres();

  const condition = (id) => {
    if (normalized.hasOwnProperty(id)) {
      return normalized[id];
    }
  };

  const handleGenres = useCallback(() => {
    if (!genres.length || !genres) return;
    let retrievedGenres = genres.map(condition).join(',');
    setGenres(retrievedGenres);
  }, [genreIdList]);

  useEffect(() => {
    handleGenres();
  }, []);

  return [genres, handleGenres];
};
