import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { MainStackNavigator } from './routes/StackNavigator';
import BottomTabNavigator from './routes/TabNavigator';
import DrawerNavigator from './routes/DrawerNavigator';
import products from './lib/tempProducts';

export default function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState('');

  return (
    <NavigationContainer>
      <DrawerNavigator products={products} />
    </NavigationContainer>
  );
}
