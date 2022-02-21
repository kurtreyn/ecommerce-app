import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { OtherStackNavigator } from './StackNavigator';
import TabNavigator from './TabNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={TabNavigator} />
      <Drawer.Screen name="Other" component={OtherStackNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;