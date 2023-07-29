import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';

const DeletionReasonPage = ({ navigation }) => {
  const [reason, setReason] = useState('');
  const onPressHandler = () => {
    Alert.alert(
      'Are you sure you want to delete your account',
      'press ok to confirm (have to add stuff to this, read comment in code)', ///ADD THE REASON TO THE DATABASE, REMOVE ACCOUNT INFO FROM DATABASE
      [
        {
          text: 'OK', onPress: () => console.log('OK Pressed --> delete info from database and add reason to the database')
        },
        {
          text: 'Cancel',
          onPress: () => navigation.navigate('Main'),
          style: 'cancel',
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Deleting your account... but why?</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Provide Your Reasoning:</Text>
        <TextInput
          style={styles.input}
          value={reason}
          onChangeText={setReason}
          placeholder="why are you leaving us?"
        />
      </View>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: 'grey' }]}
        onPress={onPressHandler}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>

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
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    width: '60%', // add this style
    alignItems: 'center', // add this style to center the text horizontally
  },

});

export default DeletionReasonPage;
