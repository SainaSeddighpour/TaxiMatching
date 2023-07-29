import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { userID, userName } from './login';
import { setMode } from './Alert'
import insertOne from './insertOne';
import axios from 'axios'
import QRCode from './QRCode'
import { useRoute } from '@react-navigation/native';


const OfferRide = ({ navigation }) => {
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [taxiID, settaxiID] = useState('');
  const [numPeople, setNumPeople] = useState(1);
  const [gender, setGender] = useState('');
  const [qrCodeData, setQrCodeData] = useState(null);
  const route = useRoute();


  useEffect(() => {
    if (route.params && route.params.qrCodeData) {
      setQrCodeData(route.params.qrCodeData);
    }
  }, [route.params]);




  const handleOfferRide = () => {
    collection = 'Offers'

    data = {
      "offerer": userID,
      "offererName": userName,
      "source": source,
      "destination": destination,
      "taxiID": taxiID || qrCodeData,
      "capacity": numPeople,
      "genderPreference": gender
    }

    offer = insertOne(collection, data)
    console.log(data)

    axios(offer).then(function (response) {
      alert("offer has been made, check alert page for requests")
      setMode("offer")
      navigation.navigate('Main')
    }
    ).catch(function (error) {
      console.log(error)
    })

  }

  const handleNumPeopleChange = (value) => {
    setNumPeople(value);
  };


  const handleGenderSelection = (value) => {
    setGender(value);
  };


  <script async
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDh_1eEIhijEjqSPkGMRAuvP7Tylj9ztQM&libraries=places&callback=initMap">
  </script>
  return (

    <View style={styles.container}>
      <Text style={styles.title}>Offer a Ride</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Source Location:</Text>
        <TextInput
          style={styles.input}
          value={source}
          onChangeText={setSource}
          placeholder="Enter source location"
        />
      </View>


      <View style={styles.inputContainer}>
        <Text style={styles.label}>Destination Location:</Text>
        <TextInput
          style={styles.input}
          value={destination}
          onChangeText={setDestination}
          placeholder="Enter your desired destination"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Taxi ID:</Text>
        <TextInput
          style={styles.input}
          value={taxiID}
          onChangeText={settaxiID}
          placeholder="Enter taxID, or scan QR-code"
        />
      </View>
      <Text style={styles.linkText}>your scanned taxiID: {qrCodeData} </Text>
      <View>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Number of people:</Text>
        <View style={styles.radioContainer}>
          {[1, 2, 3, 4, 5].map((num) => (
            <TouchableOpacity
              key={num}
              onPress={() => handleNumPeopleChange(num)}
              style={[
                styles.radioButton,
                num === numPeople ? styles.radioButtonSelected : null,
              ]}
            >
              <Text
                style={[
                  styles.radioButtonText,
                  num === numPeople ? styles.radioButtonTextSelected : null,
                ]}
              >
                {num}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Preferred Gender For Travel:</Text>
        <View style={styles.genderContainer}>
          <TouchableOpacity
            style={[styles.genderButton, gender === 'male' && styles.selectedGenderButton]}
            onPress={() => handleGenderSelection('male')}
          >
            <Text style={[styles.genderButtonText, gender === 'male' && styles.selectedGenderButtonText]}>Male</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.genderButton, gender === 'female' && styles.selectedGenderButton]}
            onPress={() => handleGenderSelection('female')}
          >
            <Text style={[styles.genderButtonText, gender === 'female' && styles.selectedGenderButtonText]}>Female</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.genderButton, gender === 'any' && styles.selectedGenderButton]}
            onPress={() => handleGenderSelection('any')}
          >
            <Text style={[styles.genderButtonText, gender === 'any' && styles.selectedGenderButtonText]}>Any</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('QRCode')}>
        <Text style={styles.linkText}>Scan taxi QR!</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#007bff' }]}
        onPress={handleOfferRide}
      >
        <Text style={styles.buttonText}>Offer</Text>
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
  radioContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  radioButton: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioButtonSelected: {
    backgroundColor: '#333',
    borderColor: '#333',
  },
  radioButtonText: {
    fontSize: 16,
    color: '#333',
  },
  radioButtonTextSelected: {
    color: '#fff',
  },
  genderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  genderButton: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    width: '30%',
    alignItems: 'center',
  },
  genderButtonText: {
    color: '#333',
    fontWeight: 'bold',
    fontSize: 16,
  },
  selectedGenderButton: {
    backgroundColor: '#333',
    borderColor: '#333',
  },
  selectedGenderButtonText: {
    color: '#fff',
  },
  button: {
    padding: 10,
    borderRadius: 5,
    marginTop: 30,
    width: '60%', // add this style
    alignItems: 'center', // add this style to center the text horizontally
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default OfferRide;