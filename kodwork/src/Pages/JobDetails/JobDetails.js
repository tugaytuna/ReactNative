import React from 'react'
import { Text, View, Button } from 'react-native'

import style from "./JobDetails.style"


function JobDetails({route}) {
  console.log(route.params.item.name)
  return (
  <View style={style.contain} >
    <View >
      <Text style={style.title} >Job Details Page</Text>
      <View style={style.containLocation}>
        <Text style={style.locations} >Locations: </Text>
        <Text style={style.locationsName} >Paris, France</Text>
      </View>
      <View style={style.containLevel} >
        <Text style={style.jobLevel} >Job Level: </Text>
        <Text style={style.jobLevelName}>Mid Level</Text>
      </View>
      <Text style={style.jobDetailsTitle} >Job Detail</Text>
      <Text style={style.jobDetails} >lorem ipsum lorem ipsum</Text>
    </View>

    <View style={style.buttons}>
      <Button title={"it will be custom"} />
      <Button title={"it will be custom"} />
    </View>
  </View>
  )
}

export default JobDetails