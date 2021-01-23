import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useGenres } from '../hooks/useGenres';

const MovieOverview = ({ item }) => {
  const [genres, handleGenres] = useGenres(item.genre_ids);

  return (
    <>
      <Text style={styles.title}>{item ? item.title : ''}</Text>
      <Text style={styles.releaseYear}>
        Release Year: {item ? new Date(item.release_date).getFullYear() : ''}
      </Text>
      <Text style={styles.genres}>Genre: {item ? genres : ''}</Text>
      <View style={styles.overviewContainer}>
        <Text style={styles.overview}>{item ? item.overview : ''}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    color: 'white',
    fontSize: 28,
    fontWeight: '700',

    letterSpacing: 1.5,
    alignSelf: 'center',
  },
  releaseYear: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 1.5,
    alignSelf: 'center',
  },
  genres: {
    color: 'white',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1.5,
    alignSelf: 'center',
  },
  overviewContainer: { padding: 10 },
  overview: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '400',
    letterSpacing: 1.5,
    alignSelf: 'center',
  },
});

export default MovieOverview;
