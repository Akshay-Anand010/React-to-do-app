import React ,{useState} from 'react';
import {View ,TextInput, StyleSheet,Button,Modal } from 'react-native';

const GoalInput = props =>{

const [enteredGoal,setenteredGoal] = useState('');

const goaliphandler = (enteredtext) => {
    setenteredGoal(enteredtext);
  };

  const addGoalHandler = () =>{
    props.onAddGoal(enteredGoal)
    setenteredGoal('')
};

      return(
        <Modal visible={props.visible} animationType="slide">
        <View style={styles.inputcontainer}>
        <TextInput placeholder="course goal"
         style={styles.input} 
         onChangeText={goaliphandler}
         value={enteredGoal}
         />
         <View style={styles.buttoncontainer}>
        <Button title="cancel" color="red" onPress={props.onCancel}/>
        <Button title="Add" onPress={addGoalHandler}/>
        </View>
        </View>
        </Modal>
      );
};

const styles = StyleSheet.create({
    inputcontainer:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
      },
      input:{
        width:'80%',
        borderBottomColor:'black',
        borderBottomWidth: 1,
        padding:10,
        marginBottom:10
      },
      buttoncontainer :{
        flexDirection:'row',
        justifyContent:'space-between',
        width:'60%'
      }
});

export default GoalInput;