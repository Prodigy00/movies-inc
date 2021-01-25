import React from 'react';
import { Text, SafeAreaView, View, StyleSheet } from 'react-native';
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
    <Container style={styles.container}>
      <View>
        <Feather name="wind" size={40} color="grey" style={styles.iconStyle} />
        <Heading headingText={infoText} style={styles.heading} />

        <Button
          style={styles.button}
          danger
          active
          bordered
          onPress={() => navigation.navigate(`${destinationRoute}`)}
        >
          <Text style={styles.buttonText}>{buttonText}</Text>
        </Button>
      </View>
    </Container>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconStyle: { alignSelf: 'center' },
  heading: {
    color: 'grey',
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 10,
    marginVertical: 10,
  },
  button: { alignSelf: 'center', padding: 5 },
  buttonText: { color: 'white' },
});

export default NothingSelected;
