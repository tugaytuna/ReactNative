import {useState, useEffect} from 'react';
import {
  FlatList,
  Text,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';



const Stack = createNativeStackNavigator();

function App() {
  
  return (
    <NavigationContainer>
     <Stack.Navigator>
      <Stack.Screen name="Home" component={FirstPage} />
      <Stack.Screen name="SecondPage" component={SecondPage} />
      </Stack.Navigator>
    </NavigationContainer>
   
  );
}


export default App;
