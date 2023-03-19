import React from 'react'
import { Text, View, FlatList } from 'react-native'
import { useSelector } from 'react-redux'
// import { Divider } from '@rneui/themed';

import JobSingleItem from '../../Components/JobSingleItem'
import CButton from '../../Components/CButton'

import style from "./Favorites.style"

const testData = [{item: {name:"kk", company:{name:"kkcomp"}, locations:[{name: "kkloc"}], levels:[{name:"kklevel"}]}}, {item: {name:"kk", company:{name:"kkcomp"}, locations:[{name: "kkloc"}], levels:[{name:"kklevel"}]}}]



const renderFavorites = ({item}) => {

  console.log(item)

  return(
    <View>
      <JobSingleItem data={item} />
      <CButton title='Remove' />
      {/* <Divider width={5} color={"#ee524e"} /> */}
    </View>
  )
}


function Favorites() {

  const selectorReturn = useSelector(s => s.favData)
  console.log("Selector Item: ", selectorReturn);





  return (
    <View>
      <FlatList data={testData} renderItem={(item) => renderFavorites(item)} />
    </View>
  )
}

export default Favorites