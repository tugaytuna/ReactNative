import React, { useState } from 'react'
import { Text, View } from 'react-native'
import MealListItem from '../../Components/MealListItem/MealListItem'

function MealList({route}) {
  // console.log(route.params.strCategory);

  const [tempData, setTempData] = useState({
    meals: [
        {
            strMeal: "Beef and Mustard Pie",
            strMealThumb: "https://www.themealdb.com/images/media/meals/sytuqu1511553755.jpg",
            idMeal: "52874"
        },
        {
            strMeal: "Beef and Oyster pie",
            strMealThumb: "https://www.themealdb.com/images/media/meals/wrssvt1511556563.jpg",
            idMeal: "52878"
        }]
      });


  return (
    <View>
        <Text >{route.params.strCategory}</Text>
        <MealListItem title={tempData.meals.strMeal} image={tempData.meals.strMealThumb} />
    </View>
  )
}

export default MealList