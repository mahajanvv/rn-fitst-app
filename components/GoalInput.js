import React, { useState } from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredtext) => {
        setEnteredGoal(enteredtext);
    }

    return (
        <View style = {styles.input_container}>
            <TextInput placeholder = "Course Goal" 
            style={styles.input}  onChangeText = {goalInputHandler} value = {enteredGoal}
            />
            <Button title = "Add" onPress={() => props.onAddGoal(enteredGoal)} />
        </View>
    );
}

const styles = StyleSheet.create({
    input_container:{ 
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center' 
    },
    input:{ 
        width: '80%',
        height:'100%',
        borderColor:'black',
        borderWidth: 1,
        borderRadius:5
    }
})

export default GoalInput;