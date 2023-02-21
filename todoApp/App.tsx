import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import NewTask from './src/NewTask';

import Tasks from './src/Tasks';

import HomeStyle from './src/stylehome.style';


function App() {
 
  return (
   <>
    <Text>Yapılacaklar</Text>
    <Text style={HomeStyle.title}>0</Text>


   </>
  );
}



export default App;
