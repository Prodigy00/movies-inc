import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const MovieCast = ({ actor }) => {
  let uri = `http://image.tmdb.org/t/p/w500${actor.profile_path}`;
  return (
    <View style={{ display: 'flex', flexDirection: 'row', margin: 5 }}>
      <Image source={{ uri }} style={styles.movieImg} />
      <View style={styles.castInfo}>
        <Text style={styles.colorWhite}>Character: {actor.character}</Text>
        <Text style={styles.colorWhite}>Name: {actor.original_name}</Text>
        <Text style={styles.colorWhite}>
          Department: {actor.known_for_department}
        </Text>
        <Text style={styles.colorWhite}>Popularity: {actor.popularity}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  colorWhite: {
    color: 'white',
  },
  movieImg: { width: 60, height: 80, borderRadius: 8 },
  castInfo: {
    marginVertical: 5,
    padding: 5,
    borderRadius: 8,
  },
});
export default MovieCast;
