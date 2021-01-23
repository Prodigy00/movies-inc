import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Favourites = () => {
  return (
    <View style={styles.container}>
      <Text>Favourites</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Favourites;
