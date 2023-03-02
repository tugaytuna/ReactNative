import React from 'react'
import { Text, View, Image } from 'react-native'
import style from "./Category.style";

function Category({title, image},prop) {

  const image_url = "https://www.themealdb.com/images/category/";

  return (
    <View style={style.contain}>
      <Image style={style.image} src={image_url + image + ".png"}></Image>
       <Text style={style.text} >{title}</Text>
    </View>
  )
}

export default Category