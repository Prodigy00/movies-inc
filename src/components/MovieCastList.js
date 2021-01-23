import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
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
    <View style={{ marginHorizontal: 10, marginVertical: 30 }}>
      <Text
        style={{
          fontSize: 16,
          fontWeight: '700',
          color: 'white',
          marginLeft: 5,
        }}
      >
        Cast
      </Text>
      {cast.length > 0 ? cast.map(renderCast) : null}
    </View>
  );
};

export default MovieCastList;
