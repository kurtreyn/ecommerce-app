import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { MainStackNavigator } from './routes/StackNavigator';
import BottomTabNavigator from './routes/TabNavigator';
import DrawerNavigator from './routes/DrawerNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}
