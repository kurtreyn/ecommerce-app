import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack'
import { createAppContainer } from 'react-navigation';
import Home from '../components/Home/Home';
import About from '../components/About/About';

const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  );
}

// const screens = {
//   Home: {
//     screen: Home,
//   },
//   About: {
//     screen: About,
//   },
// };

// const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
