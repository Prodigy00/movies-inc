import React from 'react';
import { Dimensions, SafeAreaView } from 'react-native';
import MovieCastList from '../components/MovieCastList';
import MovieDetailBackDrop from '../components/MovieDetailBackdrop';
import MovieOverview from '../components/MovieOverview';

const { width, height } = Dimensions.get('window');

const MovieDetailScreen = ({ route }) => {
  const { item } = route.params;

  let backdropUri = item
    ? `http://image.tmdb.org/t/p/w780${item.backdrop_path}`
    : '';
  let posterUri = item
    ? `http://image.tmdb.org/t/p/w780${item.backdrop_path}`
    : '';

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <MovieDetailBackDrop
        dimensions={{ screenWidth: width, screenHeight: height }}
        backdropUri={backdropUri}
        posterUri={posterUri}
      >
        <MovieOverview item={item} />
        <MovieCastList movieId={item.id} />
      </MovieDetailBackDrop>
    </SafeAreaView>
  );
};

export default MovieDetailScreen;
