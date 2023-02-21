import React from 'react'
import { Alert, Button, Text, TextInput, TouchableOpacity, View } from 'react-native';

import newTaskStyle from './newTask.style';

function NewTask() {

  return (
    <View style={newTaskStyle.container}>
    <TextInput placeholder='Yapılacak...' style={newTaskStyle.textinput} />
    
    <TouchableOpacity style={newTaskStyle.buttonSt}>
        <Text style={newTaskStyle.buttonText}>Kaydet</Text>
    </TouchableOpacity>


    </View>
  )
}

export default NewTask