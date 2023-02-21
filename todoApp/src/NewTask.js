import React from 'react'
import { Alert, Button, Text, TextInput, TouchableOpacity, View } from 'react-native';

import newTaskStyle from './newTask.style';

import InitTasks from './InitTasks';


function NewTask() {


    const buttonClicked = () => {
        InitTasks.push({
            id: 6,
            title: "deneme",
            done: true,
          });

          console.log(InitTasks);
    }



  return (
    <View style={newTaskStyle.container}>
    <TextInput placeholder='Yapılacak...' style={newTaskStyle.textinput} />
    
    <TouchableOpacity onPress={buttonClicked} style={newTaskStyle.buttonSt}>
        <Text style={newTaskStyle.buttonText}>Kaydet</Text>
    </TouchableOpacity>


    </View>
  )
}

export default NewTask