import Front from './components/Screens/Front';
import Login from './components/Screens/Login';
import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Front"
          component={Front}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}


