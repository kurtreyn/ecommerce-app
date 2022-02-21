import React from 'react';
import { Text, View, Button } from 'react-native';

import styles from './stylesCartItem';

export default function CartItem({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Cart Item</Text>
      <Button
        title="Go to About"
        onPress={() => navigation.navigate('About')}
      />
    </View>
  );
}