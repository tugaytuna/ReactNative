import React from 'react'
import { Text, View, Image } from 'react-native'
import style from "./Category.style";

function Category({title, image},prop) {


  return (
    <View style={style.contain}>
      <Image style={style.image} src={image}></Image>
       <Text style={style.text} >{title}</Text>
    </View>
  )
}

export default Category