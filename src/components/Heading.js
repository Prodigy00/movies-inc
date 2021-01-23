import React from 'react';
import { Text } from 'react-native';

const Heading = ({ headingText, ...otherHeadingProps }) => (
  <Text {...otherHeadingProps}>{headingText}</Text>
);

export default Heading;
