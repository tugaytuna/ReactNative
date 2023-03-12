import 'react-native-gesture-handler';

import React from 'react';
import {Text,View, Button} from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Jobs from './src/Pages/Jobs';
import Favorites from './src/Pages/Favorites';
import JobDetails from './src/Pages/JobDetails';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

// function stackNav() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="JobDetails" component={JobDetails} />
//     </Stack.Navigator>
//   );
// }

function App(){
 
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Jobs} options={{title:"Jobs", headerTitleAlign: "center", headerTintColor:"#ee524e"}} />
        <Drawer.Screen name="Favorites" component={Favorites} />
        <Drawer.Screen name='JobDetails' component={JobDetails} options={{
    drawerItemStyle: { height: 0 }
  }} />
      </Drawer.Navigator>
    </NavigationContainer>
  
  );
}


export default App;
