import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MainStackNavigator, OtherStackNavigator } from './StackNavigator';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={MainStackNavigator} />
      <Tab.Screen name="Other" component={OtherStackNavigator} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
