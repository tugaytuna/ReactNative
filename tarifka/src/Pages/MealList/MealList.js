import React, { useState, useEffect } from 'react'
import { FlatList, Text, View, TouchableWithoutFeedback } from 'react-native'
import axios from 'axios'

import MealListItem from '../../Components/MealListItem/MealListItem'


import style from "./MealList.style"

function MealList({route, navigation}) {
  // console.log(route.params.strCategory);
  const base_api_key = "https://www.themealdb.com/api/json/v1/1/filter.php?c=";
  let api_key = "";
  const fake_api = "https://jsonplaceholder.typicode.com/users";

  const [tempData, setTempData] = useState(
     [{
            strMeal: "Beef and Mustard Pie",
            strMealThumb: "https://www.themealdb.com/images/media/meals/sytuqu1511553755.jpg",
            idMeal: "52874"
        },
        {
            strMeal: "Beef and Oyster pie",
            strMealThumb: "https://www.themealdb.com/images/media/meals/wrssvt1511556563.jpg",
            idMeal: "52878"
        }]
      );

  const [data, setData] = useState();

  


  const getData = async () => {
    api_key = base_api_key + route.params.strCategory;

    const {data: response} = await axios.get(api_key);
    setData(response.meals);
  }

  useEffect(() => {
    getData();
  },[])
  
  const mealOnClick = (id) => {
    navigation.navigate("MealDetails",id);
  }


  const renderItems = ({item}) => {   
    return (
      <TouchableWithoutFeedback onPress={() => {mealOnClick(item.idMeal)}}>
        <View>
          <MealListItem title={item.strMeal} image={item.strMealThumb} />
        </View>
      </TouchableWithoutFeedback>
    )
  }

  

  return (
    <View style={style.contain}>
        <Text style={style.title} >{route.params.strCategory}</Text>
        <FlatList contentContainerStyle={{ paddingBottom: 100 }} data={data} renderItem={(item) => renderItems(item)} />
    </View>
  )
}

export default MealList