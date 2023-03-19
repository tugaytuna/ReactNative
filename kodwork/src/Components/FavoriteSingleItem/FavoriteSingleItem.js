import { View, Text, TouchableWithoutFeedback } from 'react-native'
import React from 'react'

import style from "./FavoriteSingleItem.style"
import CButton from '../CButton'

function FavoriteSingleItem({data, onTap}) {
    // console.log("favorite item data: ", data)
  return (
    <TouchableWithoutFeedback>
      <View style={style.contain}>
          <Text style={style.title} >{data.item.name}</Text>
          <Text style={style.company} >{data.item.company}</Text>
          <View style={style.locationContain} >
              <Text style={style.location} >{data.item.location}</Text>
              <Text style={style.level} >{data.item.level}</Text>
          </View>
        

      <CButton onTap={onTap} title='Remove' />
      </View>
    </TouchableWithoutFeedback>
  )
}

export default FavoriteSingleItem