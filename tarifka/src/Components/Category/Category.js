import React from 'react'
import { Text, View, Image, TouchableWithoutFeedback, Alert } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import style from "./Category.style";


function Category({title, image},props) {

  const image_url = "https://www.themealdb.com/images/category/";


 


  return (
      <View style={style.contain}>
          <Image style={style.image} src={image_url + image + ".png"}></Image>
          <Text style={style.text} >{title}</Text>
      </View>
  )
}

export default Category