import React, { useState, useContext } from 'react';
import axios from 'axios';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import findOne from './findOne';

export var userID = '';
export const setUserID = (uID) => { userID = uID }
export var userName = ''
export const setUserName = (uName) => { userName = uName }


const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {

    collection = 'UserData'

    credentials = {
      "email": email,
      "password": password
    }

    exists = findOne(collection, credentials)

    axios(exists).then(function (response) {
      if (response.data.document == null) {
        alert("Email or Password is incorrect. Please try again");
        return
      }

      setUserID(response.data.document._id)
      setUserName(response.data.document.name)
      console.log(userID)
      navigation.navigate('Main')
    }
    ).catch(function (error) {
      console.log(error);
    })


  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login Screen</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.linkText}>Don't have an account? Sign Up</Text>
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
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    width: '80%',
    fontSize: 18,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  linkText: {
    color: '#007bff',
    marginTop: 20,
    fontSize: 18,
  },
});

export default Login;
