import React, {useState} from 'react';
import { View, Button, TextInput, StyleSheet, Text } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoal, setCourseGoal] = useState([]);

  const goalInputHandler = (enteredtext) => {
    setEnteredGoal(enteredtext);
  }

  const addGoalHandler = () => {
    setCourseGoal(currentGoals => [...courseGoal, enteredGoal]);
  }
  return (
    <View style={styles.screen}>
      <View style = {styles.input_container}>
        <TextInput placeholder = "Course Goal" 
        style={styles.input}  onChangeText = {goalInputHandler} value = {enteredGoal}
        />
        <Button title = "Add" onPress={addGoalHandler} />
      </View>
      <View>
        {courseGoal.map((value, index)=>{
          return (<View key={index} style={styles.listitem}>
                    <Text >{value}</Text>
                  </View>);
        }
        )}
      </View>
    </View>    
  );
}

const styles = StyleSheet.create({
  screen:{
    padding:50
  },
  input_container:{ flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center' 
  },
  input:{ width: '80%',
    height:'100%',
    borderColor:'black',
    borderWidth: 1,
    borderRadius:5
  },
  listitem:{
    padding:5,
    marginVertical:10,
    borderColor: 'black',
    backgroundColor: '#ccc',
    borderWidth: 1
  }
})
