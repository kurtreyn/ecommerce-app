import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MainStackNavigator, ProductsStackNavigator } from './StackNavigator';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeStyle" component={MainStackNavigator} />
      <Tab.Screen name="Products" component={ProductsStackNavigator} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
