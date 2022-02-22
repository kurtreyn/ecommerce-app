import React, { useState, useEffect } from 'react';
import { Text, View, Button } from 'react-native';
import { commerce } from '../../lib/commerce';
// import tempProducts from '../../lib/tempProducts';

import styles from './stylesHome';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button
        title="Go to About"
        onPress={() => navigation.navigate('About')}
      />
    </View>
  );
}
