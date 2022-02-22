import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { ProductsStackNavigator } from './StackNavigator';
import TabNavigator from './TabNavigator';
import Home from '../components/Home/Home';
import About from '../components/About/About';
import Products from '../components/Products/Products';
import Cart from '../components/Cart/Cart';

const Drawer = createDrawerNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: '#219ebc',
  },
  headerTintColor: '#fff',
  headerBackTitle: 'Back',
};

const DrawerNavigator = ({products}) => {
  return (
    <Drawer.Navigator screenOptions={screenOptionStyle}>
      <Drawer.Screen name="Home" component={Home} products={products}/>
      <Drawer.Screen name="About" component={About} />
      <Drawer.Screen name="Products" component={Products} />
      <Drawer.Screen name="Cart" component={Cart} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
