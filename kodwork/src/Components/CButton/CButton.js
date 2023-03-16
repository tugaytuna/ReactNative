import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'


import style from "./CButton.style"

function CButton({title = "test", onTap}) {
  return (
    <TouchableOpacity onPress={onTap}  style={style.container} >
        <Text style={style.title} >{title}</Text>
    </TouchableOpacity>
    
  )
}

export default CButton