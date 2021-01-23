import React from 'react';

import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

function GoBack() {
  const navigation = useNavigation();

  return (
    <Feather
      name="arrow-left"
      size={30}
      color="white"
      style={{ marginVertical: 12, marginHorizontal: 12 }}
      onPress={() => navigation.goBack()}
    />
  );
}
export default GoBack;
