import React from 'react';
import {View ,Text, StyleSheet,TouchableNativeFeedback } from 'react-native';

const GoalItem = props =>{
    return(
        <TouchableNativeFeedback
         activeOpacity={0.8}
          onPress={props.onDelete.bind(this,props.id)}>
        <View style={styles.listitem}> 
        <Text >{props.title}</Text>
        </View>
        </TouchableNativeFeedback>
    );
};

const styles = StyleSheet.create({
    listitem :{
        padding:10,
        margin:10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1
      }
});

export default GoalItem;