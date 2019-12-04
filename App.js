import React, {useState} from 'react';
import { View, Button, TextInput, StyleSheet, Text, FlatList } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  
  const [courseGoal, setCourseGoal] = useState([]);

  const addGoalHandler = goalTitle => {
    setCourseGoal(currentGoals => [...currentGoals, {key:Math.random().toString(), value:goalTitle}]);
  }

  const removeGoalHandler = goalId => {
    setCourseGoal((currentGoals)=>{
        return currentGoals.filter((currentGoal)=> currentGoal.key !== goalId )
    })
  }

  return (
    <View style={styles.screen}>
      <GoalInput  onAddGoal = {addGoalHandler} />
      <FlatList data={courseGoal} renderItem = {itemData => <GoalItem id={itemData.item.key} onDelete={removeGoalHandler} value={itemData.item.value}/>} />
    </View>    
  );
}

const styles = StyleSheet.create({
  screen:{
    padding:50
  }
})
