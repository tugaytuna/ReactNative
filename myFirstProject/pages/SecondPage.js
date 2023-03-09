import React from 'react'
import { Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'



function SecondPage() {

    const list = useSelector(s => s.nameList);


  return (
    <View>
        <Text>{list}</Text>
    </View>
  )
}

export default SecondPage