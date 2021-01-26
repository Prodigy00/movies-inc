import { Button, Spinner } from 'native-base';
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Rating } from 'react-native-ratings';
import Heading from './Heading';

const Ratings = ({ ratingCompleted, handleRating, isLoading }) => {
  return (
    <View style={{ marginVertical: 15 }}>
      <Heading
        headingText="Rate this movie"
        style={{
          fontSize: 16,
          alignSelf: 'center',
          color: 'white',
          fontWeight: '700',
        }}
      />

      <Rating
        type="heart"
        ratingTextColor="white"
        startingValue={0}
        ratingCount={8}
        imageSize={30}
        showRating
        onFinishRating={ratingCompleted}
        style={{ marginBottom: 10 }}
      />
      <Button
        danger
        active
        style={{ alignSelf: 'center', padding: 20, marginTop: 10 }}
        onPress={handleRating}
        disabled={isLoading}
      >
        {isLoading ? (
          <Spinner color="white" size="small" />
        ) : (
          <Text style={{ color: 'white' }}>Rate</Text>
        )}
      </Button>
    </View>
  );
};

export default Ratings;
