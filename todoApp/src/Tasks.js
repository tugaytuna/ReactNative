import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

import taskStyle from "./tasks.style"

function Tasks() {
  return (
    <View>
        <TouchableOpacity style={taskStyle.container}>
            <Text>Tasks</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Tasks