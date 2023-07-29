import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { userID, userName } from './login';
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
            "taxiID": qrCodeData || taxiID,
            "capacity": numPeople,
            "genderPreference": gender
        }

        offer = insertOne(collection, data)
        console.log(data)

        axios(offer).then(function (response) {
            alert("offer has been made, check alert page for requests")
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



-------------------------------

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
                <TouchableOpacity
                    style={[styles.button, { height: 40 }]}
                    onPress={() => navigation.navigate('Main')}
                >
                    <Text style={styles.buttonText}>Skip to Main Screen</Text>
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

