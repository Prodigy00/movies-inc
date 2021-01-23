import React from 'react';
import { Text, SafeAreaView, View } from 'react-native';
import { Container, Button } from 'native-base';
import { Feather } from '@expo/vector-icons';
import Heading from './Heading';

const NothingSelected = ({
  navigation,
  destinationRoute,
  buttonText,
  infoText,
}) => (
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
          headingText={infoText}
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
          onPress={() => navigation.navigate(`${destinationRoute}`)}
        >
          <Text style={{ color: 'white' }}>{buttonText}</Text>
        </Button>
      </View>
    </Container>
  </SafeAreaView>
);

export default NothingSelected;
