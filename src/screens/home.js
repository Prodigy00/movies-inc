import React from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';

import SearchBar from '../components/SearchBar';
import MovieList from '../components/MovieList';
import Heading from '../components/Heading';

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ backgroundColor: 'black', flex: 1 }}>
        <SearchBar />
        <Heading style={styles.movieListHeader} headingText="Trending Now" />
        <MovieList navigation={navigation} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  movieListHeader: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 10,
    marginVertical: 10,
  },

  movieItem: {
    flex: 0,
    flexShrink: 30,
    marginBottom: '2%',
  },
});

export default Home;
