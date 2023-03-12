import 'react-native-gesture-handler';

import React from 'react';
import {Text,View, Button} from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Jobs from './src/Pages/Jobs';
import Favorites from './src/Pages/Favorites';

const Drawer = createDrawerNavigator();

function App(){
 
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Jobs} />
        <Drawer.Screen name="Favorites" component={Favorites} />
      </Drawer.Navigator>
    </NavigationContainer>
  
  );
}


export default App;
