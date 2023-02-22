import {useState} from 'react'
import { Alert, Button, Text, TextInput, TouchableOpacity, View } from 'react-native';

import newTaskStyle from './newTask.style';

import InitTasks from './InitTasks';


function NewTask(props) {

  const [newTaskText, setNewTaskText] = useState("")

    const buttonClicked = () => {
        
        if(newTaskText != "")
        {

        props.props(newTaskText);

        setNewTaskText("");
        Alert.alert("Yeni yapılacak eklendi!")
      }
    }

  return (
    <View style={newTaskStyle.container}>
    <TextInput onChangeText={(e) => {setNewTaskText(e)} } value={newTaskText} placeholder="Yapılacak..." style={newTaskStyle.textinput} />
    
    <TouchableOpacity onPress={buttonClicked} style={newTaskStyle.buttonSt}>
        <Text style={newTaskStyle.buttonText}>Kaydet</Text>
    </TouchableOpacity>


    </View>
  )
}

export default NewTask