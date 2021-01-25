import React from 'react';
import { SafeAreaView, StyleSheet, View, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import FavouriteMoviesList from '../components/FavouriteMoviesList';
import Heading from '../components/Heading';
import NothingSelected from '../components/NothingSelected';

import { selectFavourites } from '../slices/favouritesSlice';

const Favourites = ({ navigation }) => {
  const favourites = useSelector(selectFavourites);

  if (favourites.length < 1) {
    return (
      <NothingSelected
        navigation={navigation}
        infoText="Add Favourites"
        buttonText="Go to Movies"
        destinationRoute="Home"
      />
    );
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Heading headingText="Favourites" style={styles.favListHeader} />
        <ScrollView>
          <FavouriteMoviesList
            navigation={navigation}
            favouritesList={favourites}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  favListHeader: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    marginVertical: 10,
  },
});

export default Favourites;
