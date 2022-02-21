import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from '../components/Home/Home'
import About from '../components/About/About'
import Main from '../components/Main/Main'

const Stack = createStackNavigator();

const screenOptionStyle = {
    headerStyle: {
      backgroundColor: "#9AC4F8",
    },
    headerTintColor: "white",
    headerBackTitle: "Back",
  };

const MainStackNavigator = () => {
  return (
    <Stack.Navigator   screenOptions={screenOptionStyle}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  );
}

const OtherStackNavigator = () => {
    return(
        <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen name="Main" component={Main} />
      </Stack.Navigator>
    )
}

export { MainStackNavigator, OtherStackNavigator };