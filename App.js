import Front from './components/Screens/Front';
import Login from './components/Screens/Login';
import Signup from './components/Screens/Signup';
import Details from './components/Screens/Details';
import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './components/Screens/Home';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Front" component={Front} options={{headerShown: false}}/>
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
        <Stack.Screen name="Signup" component={Signup} options={{headerShown: false}} />
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
        <Stack.Screen name="Details" component={Details} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}


