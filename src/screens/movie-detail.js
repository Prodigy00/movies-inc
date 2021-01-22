import React from 'react';
import {
  Dimensions,
  ImageBackground,
  SafeAreaView,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import genres from '../utils/genres.json';
import { normalizedGenres } from '../utils/normalizedGenres';

const { width, height } = Dimensions.get('window');

const MovieDetail = ({ navigation, route }) => {
  const { item } = route.params;

  console.log({ item, route, genres, nrom: normalizedGenres() });

  let backdropUri = item
    ? `http://image.tmdb.org/t/p/w780${item.backdrop_path}`
    : '';
  let posterUri = item
    ? `http://image.tmdb.org/t/p/w780${item.backdrop_path}`
    : '';

  const renderGenres = (genre_ids) => {
    // let genresArr = Object.keys(genres).map(genre => genre);
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <ImageBackground
          source={{ uri: backdropUri }}
          style={{
            width: width,
            height: height * 0.89,
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
          }}
          blurRadius={10}
        >
          <ScrollView style={{ flex: 1 }}>
            <Image
              source={{ uri: posterUri }}
              style={{
                width: 300,
                height: 300,
                marginVertical: 50,
                marginHorizontal: 50,
                borderRadius: 8,
              }}
            />
            <Text
              style={{
                color: 'white',
                fontSize: 28,
                fontWeight: '700',

                letterSpacing: 1.5,
                alignSelf: 'center',
              }}
            >
              {item ? item.title : ''}
            </Text>
            <Text
              style={{
                color: 'white',
                fontSize: 16,
                fontWeight: '700',
                letterSpacing: 1.5,
                alignSelf: 'center',
              }}
            >
              Release Year:{' '}
              {item ? new Date(item.release_date).getFullYear() : ''}
            </Text>
            <Text
              style={{
                color: 'white',
                fontSize: 16,
                fontWeight: '700',
                letterSpacing: 1.5,
                alignSelf: 'center',
              }}
            >
              Genre: {item ? renderGenres(item.genres_ids) : ''}
            </Text>
            <View style={{ padding: 10 }}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 13,
                  fontWeight: '400',
                  letterSpacing: 1.5,
                  alignSelf: 'center',
                }}
              >
                {item ? item.overview : ''}
              </Text>
            </View>
          </ScrollView>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
});

export default MovieDetail;
