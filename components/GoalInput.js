import React, { useState } from 'react';
import {View, TextInput, Button, StyleSheet, Modal} from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredtext) => {
        setEnteredGoal(enteredtext);
    }

    const addButtonHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
    }

    const cancelButtonHandler = () => {
        props.onCancelClicked();
        setEnteredGoal('');
    }

    return (
        <Modal visible={props.visible} animationType="slide" >
            <View style = {styles.input_container}>
                <TextInput placeholder = "Course Goal" 
                style={styles.input}  onChangeText = {goalInputHandler} value = {enteredGoal}
                />
                <Button title="cancel" color="red" onPress={cancelButtonHandler} />
                <Button title = "Add" onPress={addButtonHandler} />
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    input_container:{ 
        flex : 1,
        justifyContent: 'center',
        alignItems: 'center' 
    },
    input:{ 
        width: '80%',
        borderColor:'black',
        borderWidth: 1,
        borderRadius:5,
        marginBottom: 10
    }
})

export default GoalInput;