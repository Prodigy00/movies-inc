import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  ImageBackground,
  TextInput,
  FlatList,
  SafeAreaView,
} from 'react-native';
import Carousel from 'react-native-anchor-carousel';
import { FontAwesome5, Feather, MaterialIcons } from '@expo/vector-icons';
import { useMoviesFetch } from '../hooks/useMoviesFetch';

const Home = () => {
  const [movies, handleMoviesQuery] = useMoviesFetch('/trending/movie/day');

  const { width, height } = Dimensions.get('window');

  React.useEffect(() => {
    handleMoviesQuery();
  }, []);

  const renderMovies = ({ item, index }) => {
    console.log({ item });
    let uri = `http://image.tmdb.org/t/p/w500${item.poster_path}`;
    return (
      <TouchableOpacity>
        <View
          key={item.id}
          style={{
            border: 1,
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
          }}
        >
          <Image
            source={{
              uri,
            }}
            style={{
              width: 100,
              height: 150,
              borderRadius: 5,
              marginRight: 16,
            }}
          />
          <View
            style={{
              margin: 5,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <Text style={{ color: 'white', fontSize: 16, fontWeight: '600' }}>
              {item.title}
            </Text>

            <View>
              <Text style={{ color: 'white', fontSize: 16, fontWeight: '600' }}>
                Rating: {item.vote_average}
              </Text>
              <Text
                style={{ color: '#abb2bf', fontSize: 16, fontWeight: '600' }}
              >
                Release Date: {item.release_date}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ backgroundColor: 'black', flex: 1 }}>
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
        <Text
          style={{
            color: 'white',
            fontSize: 24,
            fontWeight: 'bold',
            marginLeft: 10,
            marginVertical: 10,
          }}
        >
          Trending Now
        </Text>

        <FlatList
          data={movies.sort((a, b) =>
            a.original_title.localeCompare(b.original_title)
          )}
          renderItem={renderMovies}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
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

  movieItem: {
    flex: 0,
    flexShrink: 30,
    // height: 100,
    // width: width * 0.3,
    marginBottom: '2%',
  },
});

export default Home;
