import React from 'react'
import { Button, Text, View } from 'react-native'

function FirstPage({navigation}) {
  return (
    <View>
        <Text>First Page</Text>
        <Button title='go to Second' onPress={() => {navigation.navigate("SecondPage")}}/>
    </View>
  )
}

export default FirstPage