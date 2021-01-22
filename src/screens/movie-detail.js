import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const MovieDetail = () => {
  return (
    <View style={styles.container}>
      <Text>MovieDetail</Text>
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

export default MovieDetail;
