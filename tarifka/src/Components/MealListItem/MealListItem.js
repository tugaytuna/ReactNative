import React from 'react'
import { Image, Text, TouchableWithoutFeedback, View } from 'react-native'

import style from "./MealListItem.style"

function MealListItem({title, image}) {
    console.log("title: ",title);
    console.log("image: ",image)



  return (
    <View style={style.contain}>
        <Image src={title} />
        <Text></Text>
    </View>
  )
}

export default MealListItem