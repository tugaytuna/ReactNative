import React from 'react'
import { Text, View } from 'react-native'

import style from "./JobSingleItem.style"

function JobSingleItem() {
  return (
    <View style={style.contain}>
        <Text style={style.title} >Managed Services Consultant</Text>
        <Text style={style.company} >Microsoft</Text>
        <View style={style.locationContain} >
            <Text style={style.location} >Istanbul, Turkey</Text>
            
        </View>
        <Text style={style.level} >Mid Level</Text>
    </View>
  )
}

export default JobSingleItem