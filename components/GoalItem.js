import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const GoalItem = props => {
    return (
        <View style={styles.listitem}>
            <Text>{props.value}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    listitem:{
        padding:5,
        marginVertical:10,
        borderColor: 'black',
        backgroundColor: '#ccc',
        borderWidth: 1
    }
})

export default GoalItem;