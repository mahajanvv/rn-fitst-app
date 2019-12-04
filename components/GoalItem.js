import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const GoalItem = props => {
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={props.onDelete.bind(this, props.id)}>
            <View style={styles.listitem}>
                <Text>{props.value}</Text>
            </View>
        </TouchableOpacity>
        
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