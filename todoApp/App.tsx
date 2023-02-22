import {useState} from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import NewTask from './src/NewTask';
import Tasks from './src/Tasks';
import HomeStyle from './src/stylehome.style';

import InitTasks from './src/InitTasks';


function App() {

  const [taskNew, setTaskNew] = useState("");
//  const [count, setCount] = useState(InitTasks.length)

  // function updateCountF(last = 5){
  //   setCount(last);
  // }


  function getNewTask(tasknew = "kk") {
    setTaskNew(tasknew)
    // setUpdateListPropS("updated!")
  }

  return (
   <View style={HomeStyle.Allcontainer}>
    <View style={HomeStyle.container}>
      <Text style={HomeStyle.title}>Yapılacaklar</Text>
      <Text style={HomeStyle.counter} >{InitTasks.length}</Text>
    </View>

    <Tasks  newTaskInfo={taskNew} ></Tasks>

    <NewTask props={getNewTask}></NewTask>



   </View>
  );
}



export default App;
