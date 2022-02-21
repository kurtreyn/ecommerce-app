import React from 'react';
import { Text, View,Button } from 'react-native';

import styles from './stylesProduct';

export default function Product({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Product</Text>
      <Button
        title="Go to About"
        onPress={() => navigation.navigate('About')}
      />
    </View>
  );
}