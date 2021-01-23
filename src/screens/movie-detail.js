import React from 'react';
import { Dimensions, SafeAreaView, View, Text } from 'react-native';
import { movieSelector } from '../slices/moviesSlice';
import { useSelector } from 'react-redux';
import { Feather } from '@expo/vector-icons';
import { Button, Container } from 'native-base';

import Heading from '../components/Heading';
import MovieCastList from '../components/MovieCastList';
import MovieDetailBackDrop from '../components/MovieDetailBackdrop';
import MovieOverview from '../components/MovieOverview';
import NoSelectedMovie from '../components/NoSelectedMovie';

const { width, height } = Dimensions.get('window');

const MovieDetailScreen = ({ navigation }) => {
  const movie = useSelector(movieSelector);

  if (Object.keys(movie).length < 1) {
    return <NoSelectedMovie navigation={navigation} />;
  }

  let backdropUri = movie
    ? `http://image.tmdb.org/t/p/w780${movie.backdrop_path}`
    : '';
  let posterUri = movie
    ? `http://image.tmdb.org/t/p/w780${movie.backdrop_path}`
    : '';

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <MovieDetailBackDrop
        dimensions={{ screenWidth: width, screenHeight: height }}
        backdropUri={backdropUri}
        posterUri={posterUri}
      >
        <MovieOverview item={movie} />
        <MovieCastList movieId={movie.id} />
      </MovieDetailBackDrop>
    </SafeAreaView>
  );
};

export default MovieDetailScreen;
