import React from 'react';
import { Feather } from '@expo/vector-icons';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

const IS_LIKED_COLOUR = '#AD021B';
const DEFAULT_COLOUR = '#a39eaa';

const Favourite = ({ isLiked, handleLike, positionStyle }) => {
  return (
    <TouchableOpacity onPress={handleLike} style={positionStyle}>
      <View>
        <Feather
          name="heart"
          size={25}
          style={styles.heart}
          color={`${isLiked ? IS_LIKED_COLOUR : DEFAULT_COLOUR}`}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  heart: {
    zIndex: 1,
  },
});
export default Favourite;
