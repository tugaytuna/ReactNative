import React from 'react'
import { Button, Text, View } from 'react-native'
import JobSingleItem from '../../Components/JobSingleItem'

function Jobs({navigation}) {
  return (
    <View>
        <Text>Jobs</Text>
        <Button title='go To Job Details' onPress={() => {navigation.navigate("JobDetails")}} />

        <JobSingleItem/>
        <JobSingleItem/>
    </View>
  )
}

export default Jobs