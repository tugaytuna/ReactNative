import React from 'react'
import { Text, View } from 'react-native'

import style from "./JobSingleItem.style"

function JobSingleItem({data}) {
  console.log("normally data is like: ", data)

  return (
    <View style={style.contain}>
        <Text style={style.title} >{data.item.name}</Text>
        <Text style={style.company} >{data.item.company.name}</Text>
        <View style={style.locationContain} >
            <Text style={style.location} >{data.item.locations[0].name}</Text>
        </View>
        <Text style={style.level} >{data.item.levels[0].name}</Text>
    </View>
  )
}

export default JobSingleItem