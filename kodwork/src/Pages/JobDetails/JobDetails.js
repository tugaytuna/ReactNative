import React, {useState, useEffect} from 'react'
import { Text, View, Button, ScrollView } from 'react-native'

import style from "./JobDetails.style"
import { LogBox } from 'react-native';



function JobDetails({route}) {
  LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
  ]);
  
  const [data, setData] = useState()
  console.log("tıpatıp:",route.params.data.detail)

  useEffect(() => {
    // setData(route.params.item);
    console.log("done")
    // console.log("state data: ",data.item.categories[0].name)
  },[]);


  
  return (
  <View style={style.contain} >
    <View style={style.contain}>
      <Text style={style.title} >{route.params.data.name}</Text>
      <View style={style.containLocation}>
        <Text style={style.locations} >Locations: </Text>
        <Text style={style.locationsName} >{route.params.data.location}</Text>
      </View>
      <View style={style.containLevel} >
        <Text style={style.jobLevel} >Job Level: </Text>
        <Text style={style.jobLevelName}>{route.params.data.level}</Text>
      </View>
      <Text style={style.jobDetailsTitle} >Job Detail</Text>
      <ScrollView style={style.jobDetails}>
        <Text>{route.params.data.detail}</Text>
      </ScrollView>
    </View>

    <View style={style.buttons}>
      <Button title={"it will be custom"} />
      <Button title={"it will be custom"} />
    </View>
  </View>
  )
}

export default JobDetails