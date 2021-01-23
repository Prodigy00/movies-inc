import React from 'react';
import { Text, SafeAreaView, View } from 'react-native';
import { Container, Button } from 'native-base';
import { Feather } from '@expo/vector-icons';
import Heading from './Heading';

const NoSelectedMovie = ({ navigation }) => (
  <SafeAreaView style={{ flex: 1 }}>
    <Container
      style={{
        backgroundColor: 'black',
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <View>
        <Feather
          name="wind"
          size={40}
          color="grey"
          style={{ alignSelf: 'center' }}
        />
        <Heading
          headingText="Select A Movie"
          style={{
            color: 'grey',
            fontSize: 24,
            fontWeight: 'bold',
            marginLeft: 10,
            marginVertical: 10,
          }}
        />

        <Button
          style={{ alignSelf: 'center', padding: 5 }}
          danger
          active
          bordered
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={{ color: 'white' }}>Go to Movies</Text>
        </Button>
      </View>
    </Container>
  </SafeAreaView>
);

export default NoSelectedMovie;
