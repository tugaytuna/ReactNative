import React, { useState } from 'react'
import { FlatList, Text, View } from 'react-native'
import MealListItem from '../../Components/MealListItem/MealListItem'

import style from "./MealList.style"

function MealList({route}) {
  // console.log(route.params.strCategory);

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

  const renderItems = (item) => {
    console.log(item.item.strMeal);
    console.log(item.item.strMealThumb);

    return (
      <View>
        <MealListItem title={item.item.strMeal} image={item.item.strMealThumb} />
      </View>
    )
  }

  

  return (
    <View style={style.contain}>
        <Text style={style.title} >{route.params.strCategory}</Text>
        <FlatList data={tempData} renderItem={(item) => renderItems(item)} />
    </View>
  )
}

export default MealList