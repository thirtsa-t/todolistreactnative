import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Screens/Home';
import SecondScreen from './SecondScreen/SecondScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SecondScreen"
        component={SecondScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
export default AppNavigator;
