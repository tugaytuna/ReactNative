import {useState, useEffect} from 'react'
import { Button, FlatList, Text, View } from 'react-native'

import axios from 'axios';

import Category from '../../Components/Category';
import style from "./Categories.style"



function Categories() {

    const api_categories = "https://www.themealdb.com/api/json/v1/1/list.php?c=list";
    // const api_categories = "https://jsonplaceholder.typicode.com/users";
    const api_imageLink = "https://www.themealdb.com/images/category/Goat.png";

    useEffect(() => {
  
      getData();
    },[])


    function getData(){
      console.log("started...");
      // setData(axios.get(api_categories));
      let data2 = null;
      axios.get(api_categories).then((response) => {
         data2 = response; 
         console.log("finished");
         console.log("let data2: ", data2.data.meals)
         setData(data2.data.meals);
     
      }).catch(error => console.log(error));
     
      
    }

  
    const [data, setData] = useState([
      {id:1,title:"Beef",image: "https://www.themealdb.com/images/category/beef.png"},
      {id:2,title:"Chicken", image: "https://www.themealdb.com/images/category/chicken.png"}
    ]);
    


  return (
    <View style={style.contain}>
      {/* <Button title='get data' onPress={getData} /> */}
      <Text style={style.text}>Categories</Text>
      <FlatList contentContainerStyle={{ paddingBottom: 100 }} data={data} renderItem={({item}) => {return(<Category title={item.strCategory} image={item.strCategory} />)}}  />
    </View>
  )
}

export default Categories