import {useState, useEffect} from 'react'
import { FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native'
import InitTasksJson from './InitTasks';

import taskStyle from "./tasks.style"



function Tasks(newTaskInfo, ) {

const [initTasks, setInitTasks] = useState(InitTasksJson)
// const [taskNew, setTaskNew] = useState(newTaskInfo.newTaskInfo)

let lastId = 5;
let newTaskData = [];



useEffect(() => {
    // setTaskNew(newTaskInfo.newTaskInfo);    
    lastId = initTasks.length + 1;

    
    if (newTaskInfo.newTaskInfo != ""){
        newTaskData = {id: lastId, title: newTaskInfo.newTaskInfo, done: false};
        setInitTasks([...initTasks,newTaskData]);
        
    }


},[newTaskInfo.newTaskInfo])



useEffect(() => {
    setInitTasks(InitTasksJson);
},[])

return (
<>
    <FlatList keyExtractor={(item,index) => item.id} data={initTasks} renderItem={({item, index}) => (
    <View>
        <TouchableOpacity style={taskStyle.container}>
            <Text style={taskStyle.title}>{item.title}</Text>
        </TouchableOpacity>
    </View> 
  )}
  /> 

    {/* <TextInput  value={newTaskInfo.newTaskInfo} onChange={changeProp} ></TextInput> */}
    {/* style={{display: "none"}} */}

  </>
  )
}

export default Tasks