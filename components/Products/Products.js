import React from 'react';
import { Text, View,Button } from 'react-native';

import styles from './stylesProducts';

export default function Products({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Products</Text>
      <Button
        title="Go to About"
        onPress={() => navigation.navigate('About')}
      />
    </View>
  );
}