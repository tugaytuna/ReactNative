import React, { useState } from 'react'
import { Button, Text, View } from 'react-native'

import { useDispatch } from 'react-redux'

function FirstPage({navigation}) {

    const [text, setText] = useState("tugay")
    const dispatch = useDispatch();

    const handleTap = () => {
        dispatch({type: "ADD_NAME",payload: {name:text}})


        console.log("itsworks")
        navigation.navigate("SecondPage");
    }



  return (
    <View>
        <Text>First Page</Text>
        <Button title='go to Second' onPress={() => {handleTap()}}/>
    </View>
  )
}

export default FirstPage