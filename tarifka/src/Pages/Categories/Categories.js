import {useState, useEffect} from 'react'
import { Alert, Button, FlatList, Text, TouchableWithoutFeedback, View } from 'react-native'

import axios from 'axios';

import Category from '../../Components/Category';
import style from "./Categories.style"



function Categories(props) {

    const api_categories = "https://www.themealdb.com/api/json/v1/1/list.php?c=list";
    // const api_categories = "https://jsonplaceholder.typicode.com/users";
    const api_imageLink = "https://www.themealdb.com/images/category/Goat.png";

    useEffect(() => {
  
      getData();
    },[])


    function getData(){
      // console.log("started...");
      // setData(axios.get(api_categories));
      let data2 = null;
      axios.get(api_categories).then((response) => {
         data2 = response; 
        //  console.log("finished");
        //  console.log("let data2: ", data2.data.meals)
         //activity indicator
         setData(data2.data.meals);
        //  console.log(data2.data.meals);
     
      }).catch(error => console.log(error));
     
      
    }

    const onPressCategory = (title) => {
      console.log(title)
   
    };

    const renderItems = ({item}) =>  {
      return(
      <TouchableWithoutFeedback onPress={() => {props.navigation.navigate("MealList",item)}}>
        <View>
          <Category title={item.strCategory} image={item.strCategory} />
        </View>
      </TouchableWithoutFeedback>
      )
    }


    const [data, setData] = useState([
      {id:1,strCategory:"Beef",image: "https://www.themealdb.com/images/category/beef.png"},
      // {id:2,strCategory:"Breakfast", image: "https://www.themealdb.com/images/category/chicken.png"},
      // {id:3,strCategory:"Chicken", image: "https://www.themealdb.com/images/category/chicken.png"},
      // {id:4,strCategory:"Dessert", image: "https://www.themealdb.com/images/category/chicken.png"},
      // {id:5,strCategory:"Goat", image: "https://www.themealdb.com/images/category/chicken.png"},
      // {id:6,strCategory:"Lamb", image: "https://www.themealdb.com/images/category/chicken.png"},
    ]);
    


  return (
    <View style={style.contain}>
      {/* <Button title='get data' onPress={getData} /> */}
      {/* <Text style={style.text}>Categories</Text> */}
      <FlatList contentContainerStyle={{ paddingBottom: 100 }} data={data} renderItem={(item) => renderItems(item)}  />
    </View>
  )
}

export default Categories