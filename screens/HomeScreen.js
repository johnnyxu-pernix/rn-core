import * as React from 'react';
import { View, Text } from 'react-native';
import moment from 'moment';

export default HomeScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Text>{moment().format('LLLL')}</Text>
    </View>
  );
}

