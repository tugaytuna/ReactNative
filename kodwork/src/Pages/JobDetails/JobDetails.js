import React, {useState, useEffect} from 'react'
import { Text, View, Button } from 'react-native'

import style from "./JobDetails.style"
import { LogBox } from 'react-native';



function JobDetails({route}) {
  LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
  ]);
  
  const [data, setData] = useState()
  console.log("tıpatıp:",route.params.item.item.categories.name)

  useEffect(() => {
    setData(route.params.item);

    console.log("state data: ",data.item.categories[0].name)
  },[]);


  
  return (
  <View style={style.contain} >
    <View >
      <Text style={style.title} >{data.item.categories[0].name}</Text>
      <View style={style.containLocation}>
        <Text style={style.locations} >Locations: </Text>
        <Text style={style.locationsName} >Paris, France</Text>
      </View>
      <View style={style.containLevel} >
        <Text style={style.jobLevel} >Job Level: </Text>
        <Text style={style.jobLevelName}>data.levels[0].name</Text>
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