import React, {useState} from 'react';
import { View, Button, StyleSheet, FlatList } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  
  const [courseGoal, setCourseGoal] = useState([]);
  const [isGoalItem, setIsGoalItem] = useState(false);

  const addGoalHandler = goalTitle => {
    setCourseGoal(currentGoals => [...currentGoals, {key:Math.random().toString(), value:goalTitle}]);
    setIsGoalItem(false);
  }

  const removeGoalHandler = goalId => {
    setCourseGoal((currentGoals)=>{
        return currentGoals.filter((currentGoal)=> currentGoal.key !== goalId )
    })
  }

  const CancelButtonHandler = () =>{
    setIsGoalItem(false);
  }

  return (
    <View style={styles.screen}>
      <Button title="Add Goal Item" onPress={() => setIsGoalItem(true)}/>
      <GoalInput  visible={isGoalItem} onAddGoal = {addGoalHandler} onCancelClicked ={CancelButtonHandler} />
      <FlatList data={courseGoal} renderItem = {itemData => <GoalItem id={itemData.item.key} onDelete={removeGoalHandler} value={itemData.item.value}/>} />
    </View>    
  );
}

const styles = StyleSheet.create({
  screen:{
    padding:50
  }
})
