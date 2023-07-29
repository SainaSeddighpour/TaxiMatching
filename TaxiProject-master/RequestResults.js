import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList } from 'react-native';
import findMany from './findMany';
import axios from 'axios'
import { userID, userName } from './login'



export var offers = null;
export const setOffers = (o) => { offers = o }
export var source = '';
export const setSource = (s) => { source = s }



const RequestResults = ({ navigation }) => {



    const handleRequest = (item) => {
        collection = 'Requests'



        data = {
            "offererID": item.offerer,
            "requesterName": userName,
            "requesterID": userID,
            "requesterSource": source,
            "status": false
        }



        request = insertOne(collection, data)



        axios(request).then(function (response) {
            alert("request has been made, check alert page for status")
            navigation.navigate('Main')
        }
        ).catch(function (error) {
            console.log(error)
        })
    }



    console.log(offers)



    return (
        <FlatList
            data={offers}
            renderItem={({ item }) => (
                <TouchableOpacity onPress={() => handleRequest(item)} style={styles.card}>
                    <Text style={styles.title}>{item.offererName}</Text>
                    <View style={styles.details}>
                        <View style={styles.detail}>
                            <Text style={styles.label}>Source:</Text>
                            <Text style={styles.value}>{item.source}</Text>
                        </View>
                        <View style={styles.detail}>
                            <Text style={styles.label}>Capacity:</Text>
                            <Text style={styles.value}>{item.capacity}</Text>
                        </View>
                        <View style={styles.detail}>
                            <Text style={styles.label}>Gender Preference:</Text>
                            <Text style={styles.value}>{item.genderPreference}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id}
        />
    );
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



export default RequestResults;
