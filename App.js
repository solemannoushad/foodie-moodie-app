import Front from './components/Screens/Front';
import Login from './components/Screens/Login';
import Signup from './components/Screens/Signup';
import Details from './components/Screens/Details';
import Home from './components/Screens/Home';
import Categories from './components/Screens/Categories';
import Favourites from './components/Screens/Favourites';
import Cart from './components/Screens/Cart';
import Profile from './components/Screens/Profile';
import Menu from './components/Screens/Menu';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Front" component={Front} options={{headerShown: false}}/>
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
        <Stack.Screen name="Signup" component={Signup} options={{headerShown: false}} />
        <Stack.Screen name="Menu" component={Menu} options={{headerShown: false}} />
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
        <Stack.Screen name="Details" component={Details} options={{headerShown: false}}/>
        <Stack.Screen name="Categories" component={Categories} options={{headerShown: false}}/>
        <Stack.Screen name="Favourites" component={Favourites} options={{headerShown: false}}/>
        <Stack.Screen name="Cart" component={Cart} options={{headerShown: false}}/>
        <Stack.Screen name="Profile" component={Profile} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}


