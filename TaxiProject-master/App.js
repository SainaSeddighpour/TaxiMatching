import React from 'react';
import { View, Text, StyleSheet, Animated, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './login';
import SignUp from './SignUp';
import Main from './Main';
import OfferRide from './ORS'; // import the OfferRide screen
import RequestRide from './RRS'; // import to RequestRide screen
import RequestResults from './RequestResults';
import WWP from './WWP'
import CoinMeasurement from './CoinMeasurement';
import AlertPage from './Alert'
import UserRating from './UserRating'
import QRCode from './QRCode';
import geoLocation from './geoLocation'
import settings from './settings'
import DeletionReasonPage from './DeletionReasonPage';
import EditPage from './EditAccountPage'


const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>

      <View style={styles.innerContainer}>
        <Image source={require('./assets/logo_taxi.png')} style={styles.logo} />
        <Text style={styles.title}>Welcome to RideLink!</Text>
        <TouchableOpacity
          style={[styles.button, { height: 40 }]}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { height: 40 }]}
          onPress={() => navigation.navigate('SignUp')}
        >
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>


      </View>

    </View>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="OfferRide" component={OfferRide} />
        <Stack.Screen name="RequestRide" component={RequestRide} />
        <Stack.Screen name="RequestResults" component={RequestResults} />
        <Stack.Screen name="WWP" component={WWP} />
        <Stack.Screen name="CoinMeasurement" component={CoinMeasurement} />
        <Stack.Screen name="AlertPage" component={AlertPage} />
        <Stack.Screen name="UserRating" component={UserRating} />
        <Stack.Screen name="geoLocation" component={geoLocation} />
        <Stack.Screen name="Settings" component={settings} />
        <Stack.Screen name="DeletionReasonPage" component={DeletionReasonPage} />
        <Stack.Screen name="EditPage" component={EditPage} />
        <Stack.Screen name="QRCode" component={QRCode} />





      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black', // change to dark background color
  },
  innerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
    borderRadius: 100
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff', // change to white text color
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    width: '30%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});


export default App;

