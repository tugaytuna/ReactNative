import {useState} from 'react'
import { FlatList, Text, View } from 'react-native'

import Category from '../../Components/Category';
import style from "./Categories.style"



function Categories() {

  
    const [data, setData] = useState([
      {id:1,title:"Beef",image: "https://www.themealdb.com/images/category/beef.png"},
      {id:2,title:"Chicken", image: "https://www.themealdb.com/images/category/chicken.png"}
    ]);
    


  return (
    <View style={style.contain}>
      <Text style={style.text}>Categories</Text>
      <FlatList data={data} renderItem={({item}) => {return(<Category title={item.title} image={item.image} />)}}  />
    </View>
  )
}

export default Categories