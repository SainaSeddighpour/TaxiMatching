import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { userName, userID } from './login';
import { setRequests, setStatus, mode } from './Alert';
import axios from 'axios';
import findMany from './findMany';



const Main = ({ navigation }) => {
  const prepareOffererAlert = () => {
    collection = 'Requests'

    filter = {
      "offererID": userID
    }

    query = findMany(collection, filter)

    axios(query).then(function (response) {
      console.log(response.data)
      setRequests(response.data.documents)
      navigation.navigate('AlertPage')
    }
    ).catch(function (error) {
      console.log(error)
    })
  }

  const prepareRequesterAlert = () => {
    collection = 'Requests'

    filter = {
      "requesterID": userID
    }

    query = findOne(collection, filter)

    axios(query).then(function (response) {
      console.log(response.data)
      if (response.data.documents != null) {
        setStatus(true)
      }
      navigation.navigate('AlertPage')
    }
    ).catch(function (error) {
      console.log(error)
    })
  }

  const handleAlertNav = () => {
    if (mode == "offer") {
      prepareOffererAlert()
    } else if (mode == "request") {
      prepareRequesterAlert()
    } else {
      navigation.navigate('AlertPage')
    }
  }

  return (




    <View style={styles.container}>
      <TouchableOpacity // DELETE ACCOUNT BUTTON
        style={[styles.button]}
        onPress={() => navigation.navigate('Settings')}
      >
        <Text style={styles.linkText}>Settings</Text>
      </TouchableOpacity>
      <Text style={styles.welcomeMessage}>Welcome {userName}</Text>
      <Text style={styles.title}>Main Screen</Text>
      <Text>This is the main screen of the app.</Text>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#007bff' }]}
        onPress={() => navigation.navigate('OfferRide')}
      >
        <Text style={styles.buttonText}>Offer a Ride</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#007bff' }]}
        onPress={() => navigation.navigate('RequestRide')}
      >
        <Text style={styles.buttonText}>Request a Ride</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#007bff' }]}
        onPress={() => navigation.navigate('WWP')}
      >
        <Text style={styles.buttonText}>Wordle Wednesday</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#007bff' }]}
        onPress={handleAlertNav}

      >
        <Text style={styles.buttonText}>AlertPage</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity
        style={[styles.button, { backgroundColor: '#007bff' }]}
        onPress={() => navigation.navigate('UserRating')}

      >
        <Text style={styles.buttonText}>User_Rating</Text>
      </TouchableOpacity> */}

      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#007bff' }]}
        onPress={() => navigation.navigate('geoLocation')}
      >
        <Text style={styles.buttonText}>Track your trip!</Text>
      </TouchableOpacity>






      <TouchableOpacity onPress={() => navigation.navigate('CoinMeasurement')}>
        <View style={styles.coinContainer}>
          <Image
            source={require('./assets/coin.png')}
            style={styles.coinButton}
            onPress={() => navigation.navigate('CoinMeasurement')}
          />
          <Text style={styles.coinText}>0 coins</Text>



        </View>
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
  coinContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: -480,
    right: -180,
  },
  coinButton: {
    width: 40,
    height: 40,
  },
  linkText: {
    color: '#007bff',
    marginTop: 20,
    fontSize: 18,
    position: 'absolute',
    top: -220,
    right: -65,
  },
  coinText: {
    marginLeft: 0,
    fontSize: 16,
    fontWeight: 'bold',
  },

  welcomeMessage: {
    position: 'absolute',
    left: 20,
    top: 40,
    fontSize: 18
  }

});

export default Main;
