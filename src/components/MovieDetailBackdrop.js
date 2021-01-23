import React from 'react';
import {
  ImageBackground,
  Image,
  StyleSheet,
  ScrollView,
  View,
} from 'react-native';

const MovieDetailBackDrop = ({
  backdropUri,
  posterUri,
  dimensions,
  children,
}) => {
  return (
    <View style={styles.imgBackground}>
      <ImageBackground
        source={{ uri: backdropUri }}
        style={{
          width: dimensions.screenWidth,
          height: dimensions.screenHeight * 0.89,
        }}
        blurRadius={10}
      >
        <ScrollView style={{ flex: 1 }}>
          <Image source={{ uri: posterUri }} style={styles.img} />
          {children}
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  imgBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  img: {
    width: 300,
    height: 300,
    marginVertical: 50,
    marginHorizontal: 50,
    borderRadius: 8,
  },
});

export default MovieDetailBackDrop;
