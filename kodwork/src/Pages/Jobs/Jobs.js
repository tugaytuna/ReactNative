import React from 'react'
import { Button, Text, View } from 'react-native'

function Jobs({navigation}) {
  return (
    <View>
        <Text>Jobs</Text>
        <Button title='go To Job Details' onPress={() => {navigation.navigate("JobDetails")}} />
    </View>
  )
}

export default Jobs