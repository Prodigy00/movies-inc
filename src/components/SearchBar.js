import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = () => (
  <View style={styles.searchBarContainer}>
    <TextInput
      placeholder="Search Movies"
      placeholderTextColor="#666"
      style={styles.searchBar}
    />
    <Feather
      name="search"
      size={22}
      color="#666"
      style={styles.searchBarIcon}
    />
  </View>
);

const styles = StyleSheet.create({
  searchBarContainer: {
    backgroundColor: '#fff',
    elevation: 10,
    borderRadius: 4,
    marginVertical: 10,
    width: '95%',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  searchBar: {
    padding: 12,
    paddingLeft: 20,
    fontSize: 16,
  },
  searchBarIcon: {
    position: 'absolute',
    right: 20,
    top: 10,
  },
});

export default SearchBar;
