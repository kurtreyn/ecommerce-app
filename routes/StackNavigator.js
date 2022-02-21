import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../components/Home/Home';
import About from '../components/About/About';
import Products from '../components/Products/Products';
import Cart from '../components/Cart/Cart'


const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: '#9AC4F8',
  },
  headerTintColor: 'white',
  headerBackTitle: 'Back',
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  );
};

const ProductsStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Products" component={Products} />
    </Stack.Navigator>
  );
};

export { MainStackNavigator, ProductsStackNavigator };
