import React from 'react';
import {
  Text,
  View,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Categories from './src/Pages/Categories';
import MealList from './src/Pages/MealList';
import MealDetails from './src/Pages/MealDetails';

const Stack = createNativeStackNavigator();



function App(){
  

  return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Categories" component={Categories} options={{title: 'Categories', headerTitleAlign: "center", statusBarColor: "orange", navigationBarColor: "orange", headerTitleStyle:{fontWeight:"bold" ,color:"orange"} }} />
      <Stack.Screen name="MealList" component={MealList} options={{title: 'Categories', headerTitleAlign: "center", statusBarColor: "orange", navigationBarColor: "orange", headerTitleStyle:{fontWeight:"bold" ,color:"orange"} }} />
      <Stack.Screen name="MealDetails" component={MealDetails} options={{title: 'Categories', headerTitleAlign: "center", statusBarColor: "orange", navigationBarColor: "orange", headerTitleStyle:{fontWeight:"bold" ,color:"orange"} }} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}



export default App;
