import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useMovieCast } from '../hooks/useMovieCast';
import MovieCast from './MovieCast';

const MovieCastList = ({ movieId }) => {
  const [cast, handleCastQuery] = useMovieCast(`/movie/${movieId}/credits`);
  React.useEffect(() => {
    handleCastQuery();
  }, [movieId]);

  const renderCast = (character) => {
    return <MovieCast key={character.credit_id} actor={character} />;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Cast</Text>
      {cast.length > 0 ? cast.map(renderCast) : null}
    </View>
  );
};
const styles = StyleSheet.create({
  heading: {
    fontSize: 16,
    fontWeight: '700',
    color: 'white',
    marginLeft: 5,
  },
  container: { marginHorizontal: 10, marginVertical: 30 },
});

export default MovieCastList;
