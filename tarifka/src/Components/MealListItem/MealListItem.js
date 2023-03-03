import React from 'react'
import { Image, Text, View } from 'react-native'

import style from "./MealListItem.style"

function MealListItem({title, image}) {
  return (
    <View style={style.contain}>
        <Image style={style.image} src={image} />
        <Text style={style.sub_title} >{title}</Text>
    </View>
  )
}

export default MealListItem