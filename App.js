import React ,{useState} from 'react';
import { StyleSheet, Text, View,TextInput,Button,ScrollView,FlatList } from 'react-native';

import GoalItem from './components/Goalitem';
import GoalInput from './components/Goalinput';

export default function App() {

  // const [enteredGoal,setenteredGoal] = useState('');

  const [courcegoals,setcourcegoals] = useState([]);
  const [isAddMode,setAddMode] = useState(false);

  
  // const goaliphandler = (enteredtext) => {
  //   setenteredGoal(enteredtext);
  // };

  const addGoalhandler=(goalTitle)=>{
      // setcourcegoals(courcegoals => [...courcegoals,enteredGoal]);

      setcourcegoals(courcegoals => [...courcegoals,
        {id : Math.random().toString(),value:goalTitle}
      ]);
      setAddMode(false);
  };


  const removeGoalHandler = goalId => {
    setcourcegoals(currentgoals => {
     return currentgoals.filter((goal) => goal.id!== goalId);
    });
  }

const cancelgoal = () =>{
  setAddMode(false);
};

  return (
    <View  style={styles.screen}>
      <Button title="ADD NEW GOAL" onPress={() => setAddMode(true)}/>
      <GoalInput visible={isAddMode} onAddGoal={addGoalhandler} onCancel={cancelgoal}/>
      <FlatList 
      keyExtractor={(item,index) => item.id}
      data={courcegoals} 
      renderItem={itemData => <GoalItem
         id={itemData.item.id} 
         onDelete={removeGoalHandler}
          title={itemData.item.value} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding:50
  },

});
