import React from 'react'
import { Button, Text, View } from 'react-native'
import JobSingleItem from '../../Components/JobSingleItem'

import useFetch from '../../Components/getData/useFetch'

function Jobs({navigation}) {

  const {data, loading, err} = useFetch("https://www.themuse.com/api/public/jobs?page=1");

  const getDataHandle = () => {
    console.log(data.results[1].name);
  }



  return (
    <View>
        <Text>Jobs</Text>
        <Button title='go To Job Details' onPress={() => {getDataHandle()}} />

        <JobSingleItem/>
        <JobSingleItem/>
    </View>
  )
}

export default Jobs