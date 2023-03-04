import {useState, useEffect} from 'react'
import { Button, Image, Linking, ScrollView, Text, View } from 'react-native'
import axios from 'axios';

import style from "./MealDetails.style"

function MealDetails({route}) {

  const base_url = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";
  let api_url = "";

  const [data, setData] = useState({strMeal: "temp"})
  const [mealId, setMealId] = useState(route.params)

  useEffect(() => {
    getData();
  },[])

  useEffect(() => {
    getData();
  },[mealId])


  const getData = async () => {
    api_url = base_url + mealId;
    const {data: response} = await axios.get(api_url);
    
    setData(response.meals[0]);
  } 


  return (
    <View style={style.contain}>
      <ScrollView style={style.scroll}>
        <Image style={style.image} src={data.strMealThumb} />
        <Text style={style.title} >{data.strMeal}</Text>
        <Text style={style.country} >{data.strArea}</Text>
        <Text style={style.description} >{data.strInstructions}</Text>
        {(data.strYoutube != "") && (
        <Button style={style.button} onPress={() => {Linking.openURL(data.strYoutube)}} color={"red"} title="Watch on Youtube"/>
        )} 
        
      </ScrollView>
    </View>
  )
}

export default MealDetails