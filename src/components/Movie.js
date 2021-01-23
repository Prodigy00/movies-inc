import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Favourite from './Favourite';
const Movie = ({ item, uri, navigation }) => {
  const [isLiked, setIsLiked] = React.useState(false);

  const handleNavigation = () => navigation.navigate('MovieDetail', { item });
  return (
    <View key={item.id} style={styles.movieContainer}>
      <TouchableOpacity onPress={() => handleNavigation()}>
        <Image
          source={{
            uri,
          }}
          style={styles.image}
        />
      </TouchableOpacity>

      <View style={styles.detailContainer}>
        <TouchableOpacity onPress={() => handleNavigation()}>
          <Text style={styles.movieTitle}>{item.title}</Text>
        </TouchableOpacity>
        <View>
          <Text style={styles.movieRating}>Rating: {item.vote_average}</Text>
          <Text style={styles.releaseDate}>
            Release Date: {item.release_date}
          </Text>
        </View>
      </View>
      <Favourite
        isLiked={isLiked}
        handleLike={() => setIsLiked(!isLiked)}
        positionStyle={styles.favouriteIconPosition}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  movieContainer: {
    borderWidth: 1,
    borderColor: '#1e1a1a',
    backgroundColor: '#1e1a1a',
    paddingHorizontal: 10,
    elevation: 10,
    borderRadius: 5,
    marginVertical: 3,
    marginHorizontal: 5,
    paddingVertical: 8,
    display: 'flex',
    flexDirection: 'row',
  },
  image: {
    width: 100,
    height: 150,
    borderRadius: 5,
    marginRight: 16,
  },
  detailContainer: {
    margin: 5,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  movieTitle: { color: 'white', fontSize: 16, fontWeight: '600' },
  movieRating: { color: 'white', fontSize: 16, fontWeight: '600' },
  releaseDate: { color: '#abb2bf', fontSize: 16, fontWeight: '600' },
  favouriteIconPosition: { position: 'absolute', right: 20, top: 20 },
});

export default Movie;
