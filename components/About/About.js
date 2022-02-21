import React from 'react';
import { Text, View, Button } from 'react-native';

import styles from './stylesAbout';

export default function About({navigation}) {
  return (
    <View style={styles.container}>
      <Text>About</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}
