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
    <View style={HomeStyle.container}>
      <Text style={HomeStyle.title}>Yapılacaklar</Text>
      <Text style={HomeStyle.counter} >0</Text>
    </View>

    <Tasks></Tasks>

    <NewTask></NewTask>



   </>
  );
}



export default App;
