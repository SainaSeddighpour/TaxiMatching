import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
const Settings = ({ navigation }) => {
    return (




        <View style={styles.container}>
            <Text style={styles.title}>Settings</Text>
            <TouchableOpacity // LOGOUT
                style={[styles.button, { backgroundColor: '#007bff' }]}
                onPress={() => navigation.navigate('Home')}
            >
                <Text style={styles.buttonText}>Logout</Text>
            </TouchableOpacity>
            <TouchableOpacity // DELETE ACCOUNT BUTTON
                style={[styles.button, { backgroundColor: '#007bff' }]}
                onPress={() => navigation.navigate('DeletionReasonPage')}
            >
                <Text style={styles.buttonText}>Delete Account</Text>
            </TouchableOpacity>

            <TouchableOpacity // EDIT ACCOUNT BUTTON
                style={[styles.button, { backgroundColor: '#007bff' }]}
                onPress={() => navigation.navigate('EditPage')}
            >
                <Text style={styles.buttonText}>Edit Account</Text>
            </TouchableOpacity>






        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    button: {
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

export default Settings;
