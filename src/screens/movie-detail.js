import React from 'react';
import { Dimensions, SafeAreaView } from 'react-native';
import { movieSelector } from '../slices/moviesSlice';
import { useSelector } from 'react-redux';

import MovieCastList from '../components/MovieCastList';
import MovieDetailBackDrop from '../components/MovieDetailBackdrop';
import MovieOverview from '../components/MovieOverview';
import NothingSelected from '../components/NothingSelected';
import Ratings from '../components/Ratings';
import { useGuestSession } from '../hooks/useGuestSession';
import { useMovieRatingsUpdate } from '../hooks/useMovieRatingsUpdate';
import movieUri from '../utils/movieUri';

const { width, height } = Dimensions.get('window');

const MovieDetailScreen = ({ navigation }) => {
  const movie = useSelector(movieSelector);
  const [rating, setRating] = React.useState(0);
  const [ratingIsLoading, setRatingIsLoading] = React.useState(false);
  const [sessionId, getSessionId] = useGuestSession();
  const [ratingIsUpdated, handleRatingsUpdate] = useMovieRatingsUpdate(
    movie.id,
    { value: rating },
    { guest_session_id: sessionId }
  );

  const handleRating = async () => {
    setRatingIsLoading(true);

    await getSessionId();

    await handleRatingsUpdate();

    setRatingIsLoading(false);
  };

  if (Object.keys(movie).length < 1) {
    return (
      <NothingSelected
        navigation={navigation}
        destinationRoute="Home"
        buttonText="Go to Movies"
        infoText="Select A Movie"
      />
    );
  }

  let backdropUri = movieUri.backdropUri(movie);
  let posterUri = movieUri.posterUri(movie);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <MovieDetailBackDrop
        dimensions={{ screenWidth: width, screenHeight: height }}
        backdropUri={backdropUri}
        posterUri={posterUri}
      >
        <MovieOverview item={movie} />
        <Ratings
          ratingCompleted={(rating) => setRating(rating)}
          isLoading={ratingIsLoading}
          handleRating={handleRating}
        />
        <MovieCastList movieId={movie.id} />
      </MovieDetailBackDrop>
    </SafeAreaView>
  );
};

export default MovieDetailScreen;
