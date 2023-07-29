import React, { useState } from 'react';
import axios from 'axios';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import findOne from './findOne';
import insertOne from './insertOne';

const SignUp = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    // Perform sign up logic here

    collection = 'UserData'

    duplicates_filter = {
      "email": email
    }

    new_user = {
      "email": email,
      "name": name,
      "password": password,
      "rating": 5,
    }

    duplicates = findOne(collection, duplicates_filter)
    signup = insertOne(collection, new_user)

    axios(duplicates)
      .then(function (response) {
        if (response.data.document != null) {
          alert("account with that email already exists");
          return
        }
        axios(signup).then(function (response) {
          alert("Signup successful, proceed to login");
          navigation.navigate('Login')
        }
        ).catch(function (error) {
          console.log(error);
        });
      })
      .catch(function (error) {
        console.log(error);
      });


  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Sign Up</Text>

      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />

      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.secondaryButton}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.secondaryButtonText}>Already have an account? Log in</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 100,
    marginBottom: 50,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: 'blue',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  secondaryButton: {
    alignItems: 'center',
  },
  secondaryButtonText: {
    color: 'blue',
    fontSize: 16,
  },
});

export default SignUp;
