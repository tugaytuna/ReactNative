import {useState} from 'react'
import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import InitTasks from './InitTasks';

import taskStyle from "./tasks.style"



function Tasks(props) {

const [initTasks, setInitTasks] = useState(InitTasks)


return (
<>
    <FlatList data={InitTasks} renderItem={({item, index}) => (
    <View>
        <TouchableOpacity style={taskStyle.container}>
            <Text style={taskStyle.title}>{item.title}</Text>
        </TouchableOpacity>
    </View> 
    
  )}
  /> 

  </>
  )
}

export default Tasks