import React from 'react'
import { Text, View, FlatList } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
// import { Divider } from '@rneui/themed';

import JobSingleItem from '../../Components/JobSingleItem'
import CButton from '../../Components/CButton'
import FavoriteSingleItem from '../../Components/FavoriteSingleItem'
import style from "./Favorites.style"


const testData = [{item: {name:"kk", company:{name:"kkcomp"}, locations:[{name: "kkloc"}], levels:[{name:"kklevel"}]}}, {item: {name:"kk", company:{name:"kkcomp"}, locations:[{name: "kkloc"}], levels:[{name:"kklevel"}]}}]

function Favorites() {

  const selectorReturn = useSelector(s => s.favData)
  const dispatch = useDispatch();

  // if (!selectorReturn){
  //   return(
  //     <View>
  //       <Text>There is no favorite job!</Text>
  //     </View>
  //   )
  // }

  console.log(selectorReturn)

  const renderFavorites = (item) => {

  const onTapRemove = () => {
    console.log("tapped: ",item.index)

    dispatch({type: "DeleteOnes", payload: {removeIndex: item.index}})
    console.log("tapped!")
  }

  return(
    <View>
      <FavoriteSingleItem onTap={onTapRemove} data={item} />
    </View>
  )
}

 


  return (
    <View>
      <FlatList  data={selectorReturn} renderItem={(item) => renderFavorites(item)} />
    </View>
  )
}

export default Favorites