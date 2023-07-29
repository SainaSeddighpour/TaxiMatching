import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Alert} from 'react-native';

const EditPage = ({navigation}) => {
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [DateOfBirth, setDateOfBirth] = useState('');
    const onPressHandler = () =>{
        Alert.alert(
            'Your changes are confirmed',
            'press ok to confirm',
            [
                {
                    text: 'OK', onPress: () => navigation.goBack()
                },
            ],
            { cancelable: false }
        );
    };

    return (
        <View style={styles.container}>

            <Text style={styles.title}>Account Information</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>password:</Text>
                <TextInput
                style={styles.input}
                value={password}
                onChangeText={setPassword}
                placeholder="Enter new password"
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>name:</Text>
                <TextInput
                style={styles.input}
                value={name}
                onChangeText={setName}
                placeholder="Enter your name"
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Data of Birth:</Text>
                <TextInput
                style={styles.input}
                value={DateOfBirth}
                onChangeText={setDateOfBirth}
                placeholder="Enter your date of birth" ////////STILL NEED A BUTTON TO SUBMIT CHANGES TO THE USER DATABASE
                /> 
            </View>
            
            <View>
                <Button title="Submit" onPress={onPressHandler} />
            </View>

        </View>
    );
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f5f5f5',
      padding: 20,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
        textTransform: 'uppercase',
    },
    inputContainer: {
        marginBottom: 20,
        width: '100%',
    },
    label: {
        fontSize: 18,
        marginBottom: 5,
        color: '#333',
        fontWeight: 'bold',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        width: '100%',
        backgroundColor: '#fff',
        fontSize: 16,
        color: '#333',
    },
    button: {
        backgroundColor: '#007bff',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
        width: '60%', // add this style
        alignItems: 'center', // add this style to center the text horizontally
      },

    buttonText: {
        color: '#fff',
        fontSize: 18,
    },  
});

export default EditPage;
