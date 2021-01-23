import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { useMoviesFetch } from '../hooks/useMoviesFetch';

import Movie from './Movie';

const MovieList = ({ navigation }) => {
  const [movies, handleMoviesQuery] = useMoviesFetch('/trending/movie/day');

  React.useEffect(() => {
    handleMoviesQuery();
  }, []);

  const renderMovies = ({ item }) => {
    let uri = `http://image.tmdb.org/t/p/w500${item.poster_path}`;
    return <Movie uri={uri} item={item} navigation={navigation} />;
  };

  return (
    <FlatList
      data={movies.sort((a, b) =>
        a.original_title.localeCompare(b.original_title)
      )}
      renderItem={renderMovies}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default MovieList;
