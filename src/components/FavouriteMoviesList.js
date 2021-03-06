import React from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';
import FavouriteMovie from './FavouriteMovie';

const FavouriteMoviesList = ({ favouritesList, navigation }) => {
  const renderFavourites = (fav) => {
    let uri = `http://image.tmdb.org/t/p/w500${fav.poster_path}`;
    return (
      <FavouriteMovie
        key={fav.id}
        item={fav}
        uri={uri}
        navigation={navigation}
      />
    );
  };

  return (
    <View style={styles.container}>{favouritesList.map(renderFavourites)}</View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 30,
    flex: 1,
  },
});

export default FavouriteMoviesList;
