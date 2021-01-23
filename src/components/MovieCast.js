import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const MovieCast = ({ actor }) => {
  let uri = `http://image.tmdb.org/t/p/w500${actor.profile_path}`;
  return (
    <View style={{ display: 'flex', flexDirection: 'row', margin: 5 }}>
      <Image
        source={{ uri }}
        style={{ width: 60, height: 80, borderRadius: 8 }}
      />
      <View
        style={{
          marginVertical: 5,
          padding: 5,
          borderRadius: 8,
        }}
      >
        <Text style={{ color: 'white' }}>Character: {actor.character}</Text>
        <Text style={{ color: 'white' }}>Name: {actor.original_name}</Text>
        <Text style={{ color: 'white' }}>
          Department: {actor.known_for_department}
        </Text>
        <Text style={{ color: 'white' }}>Popularity: {actor.popularity}</Text>
      </View>
    </View>
  );
};

export default MovieCast;
