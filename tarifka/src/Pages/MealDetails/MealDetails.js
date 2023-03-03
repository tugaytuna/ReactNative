import {useState, useEffect} from 'react'
import { Button, Image, Text, View } from 'react-native'
import axios from 'axios';

import style from "./MealDetails.style"

function MealDetails({route}) {

  const base_url = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";
  let api_url = "";

  const [data, setData] = useState({strMeal: "kk"})
  const [mealId, setMealId] = useState(route.params)

  useEffect(() => {
    getData();
  },[])

  useEffect(() => {
    getData();
  },[mealId])


  const getData = async () => {
    api_url = base_url + mealId;
    console.log("api_url: ",api_url)
    const {data: response} = await axios.get(api_url);

    setData(response.meals[0]);
    console.log(data.strMeal);
  } 



  return (
    <View style={style.contain}>
      {/* <Image style={style.image} /> */}
      <Text style={style.title} >{data.strMeal}</Text>
      <Text style={style.country} >Country</Text>
      <Text style={style.description} >Description</Text>
      <Button color={"red"} title="Youtube"/>
    </View>
  )
}

export default MealDetails