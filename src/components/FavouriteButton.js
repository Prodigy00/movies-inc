import React from 'react';
import { Feather } from '@expo/vector-icons';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

const Favourite = ({ isLiked, handleLike, positionStyle }) => {
  return (
    <TouchableOpacity onPress={handleLike} style={positionStyle}>
      <View>
        <Feather
          name="heart"
          size={25}
          style={styles.heart}
          color={`${isLiked ? '#AD021B' : '#a39eaa'}`}
        />
      </View>
    </TouchableOpacity>
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
