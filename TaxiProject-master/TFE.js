import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { Picker } from '@react-native-picker/picker';

const TFE = () => {
  const [fromAddress, setFromAddress] = useState('');
  const [toAddress, setToAddress] = useState('');
  const [distance, setDistance] = useState(0);
  const [cost, setCost] = useState(0);

  const calculateDistance = async () => {
    try {
      const response1 = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${fromAddress}&key=AIzaSyDh_1eEIhijEjqSPkGMRAuvP7Tylj9ztQM`);
      const data1 = await response1.json();
      const fromLatLng = data1.results[0]?.geometry?.location;

      const response2 = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${toAddress}&key=AIzaSyDh_1eEIhijEjqSPkGMRAuvP7Tylj9ztQM`);
      const data2 = await response2.json();
      const toLatLng = data2.results[0]?.geometry?.location;

      if (!fromLatLng || !toLatLng) {
        throw new Error('Invalid address');
      }

      const response3 = await fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=${fromLatLng.lat},${fromLatLng.lng}&destination=${toLatLng.lat},${toLatLng.lng}&key=AIzaSyDh_1eEIhijEjqSPkGMRAuvP7Tylj9ztQM`);
      const data3 = await response3.json();

      const distanceInMeters = data3.routes[0].legs[0].distance.value;
      const distanceInMiles = distanceInMeters / 1609.34;
      setDistance(distanceInMiles.toFixed(2));

      const tripCost = distanceInMiles * 1.5; // assuming $1.50 per mile
      setCost(tripCost.toFixed(2));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      <Picker
        style={styles.picker}
        selectedValue={fromAddress}
        onValueChange={(value) => setFromAddress(value)}
      >
        <Picker.Item label="New York" value="New York, NY" />
        <Picker.Item label="San Francisco" value="San Francisco, CA" />
        <Picker.Item label="Los Angeles" value="Los Angeles, CA" />
      </Picker>
      <Picker
        style={styles.picker}
        selectedValue={toAddress}
        onValueChange={(value) => setToAddress(value)}
      >
        <Picker.Item label="New York" value="New York, NY" />
        <Picker.Item label="San Francisco" value="San Francisco, CA" />
        <Picker.Item label="Los Angeles" value="Los Angeles, CA" />
      </Picker>
      <TouchableOpacity style={styles.button} onPress={calculateDistance}>
        <Text style={styles.buttonText}>Calculate</Text>
      </TouchableOpacity>
      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>Distance: {distance} miles</Text>
        <Text style={styles.resultText}>Cost: ${cost}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    map: {
      width: '100%',
      height: '50%',
    },
    input: {
      width: '80%',
      height: 40,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
      marginTop: -10,
    },
    button: {
      width: '40%',
      backgroundColor: '#007bff',
      padding: 10,
      borderRadius: 5,
      marginTop: 50,
    },
    buttonText: {
      color: '#fff',
      textAlign: 'center',
    },
    resultContainer: {
      marginTop: 100,
      padding: 20,
      backgroundColor: '#fff',
      borderRadius: 10,
      elevation: 10,
      width: '90%',
      alignItems: 'center',
    },
    resultText: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    fromPicker: {
      width: '80%',
      height: 40,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
      marginTop: 20,
      marginBottom: 20,
    },
    toPicker: {
      width: '80%',
      height: 40,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
      marginTop: 20,
      marginBottom: 20,
    },
  });
  

  export default TFE;
  