import React from 'react';
import { Feather } from '@expo/vector-icons';
import { View, StyleSheet } from 'react-native';

const Favourite = ({ isLiked, handleLike, positionStyle }) => {
  return (
    <View style={positionStyle}>
      <Feather
        name="heart"
        size={25}
        style={styles.heart}
        onPress={handleLike}
        color={`${isLiked ? '#AD021B' : '#a39eaa'}`}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  isLiked: {
    color: '#AD021B',
  },
  isNotLiked: {
    color: '#a39eaa',
  },
  heart: {
    zIndex: 1,
  },
});
export default Favourite;
