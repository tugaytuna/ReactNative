import React from 'react';
import {
  Text,
  View,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Categories from './src/Categories';

const Stack = createNativeStackNavigator();



function App(){
  

  return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Categories} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}



export default App;
