import React from 'react';
import TodoProvider from './src/context/Todoprovider';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './src/Navigator';

const App = () => {
  return (
    <TodoProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </TodoProvider>
  );
};
export default App;
