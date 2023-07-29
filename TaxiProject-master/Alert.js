import React from 'react';
import { View, Text, Button, FlatList, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import updateOne from './updateOne';
import axios from 'axios';

export var mode = ''
export const setMode = (m) => { mode = m }
export var requests = null;
export const setRequests = (req) => { requests = req }
export var requestStatus = false;
export const setStatus = (status) => { requestStatus = status }

const AlertPage = ({ navigation }) => {

  const handleRequestAcceptance = (item) => {
    collection = 'Requests'

    filter = {
      "requesterID": item.requesterID
    }

    update = {
      "$set": {
        "status": true
      }
    }

    accept = updateOne(collection, filter, update)

    axios(accept).then(function (response) {
      console.log(response.data)
      Alert.alert("Request Accepted")
      navigation.navigate('Main')
    }
    ).catch(function (error) {
      console.log(error)
    })
  }

  if (mode == "request") {

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text> Request Status: {"Accepted"} </Text>
      </View>
    );

  } else if (mode == "offer") {

    return (
      <FlatList
        data={requests}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleRequestAcceptance(item)} style={styles.card}>
            <Text style={styles.title}>{item.requesterName}</Text>
            <View style={styles.details}>
              <View style={styles.detail}>
                <Text style={styles.label}>Source:</Text>
                <Text style={styles.value}>{item.requesterSource}</Text>
              </View>
              <View style={styles.detail}>
                <Text style={styles.label}>Optimality:</Text>
                <Text style={styles.value}>{"7 / 10"}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.requesterID}
      />
    );

  } else {

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text> Check in after requesting or offering a ride </Text>
      </View>
    );

  }

};


const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 5,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textTransform: 'uppercase',
    marginBottom: 10,
  },
  details: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  detail: {
    width: '48%',
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
  },
  value: {
    fontSize: 16,
    color: '#333',
  },
});

export default AlertPage;
