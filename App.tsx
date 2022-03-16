import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './src/Navigator';

const App = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};
export default App;
