import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Recents = () => {
  return (
    <View style={styles.container}>
      <Text>Recents</Text>
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

export default Recents;
