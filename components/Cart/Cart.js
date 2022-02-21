import React from 'react';
import { Text, View, Button } from 'react-native';

import styles from './stylesCart';

export default function Cart({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Cart</Text>
      <Button
        title="Go to About"
        onPress={() => navigation.navigate('About')}
      />
    </View>
  );
}
