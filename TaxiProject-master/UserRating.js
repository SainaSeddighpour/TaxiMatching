import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const RatingPage = ({ onFinish, navigation }) => {
  const [rating, setRating] = useState(0);



  const handleRating = (value) => {
    setRating(value);
  };

  const handleFinish = () => {
    onFinish(rating);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.fare}>Your Fare is: $12.38</Text>
      <Text style={styles.title}>Rate Your Ride</Text>
      <View style={styles.ratingContainer}>
        <TouchableOpacity onPress={() => handleRating(1)}>
          <Icon name={rating >= 1 ? 'star' : 'star-outline'} size={40} color="#FFC107" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleRating(2)}>
          <Icon name={rating >= 2 ? 'star' : 'star-outline'} size={40} color="#FFC107" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleRating(3)}>
          <Icon name={rating >= 3 ? 'star' : 'star-outline'} size={40} color="#FFC107" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleRating(4)}>
          <Icon name={rating >= 4 ? 'star' : 'star-outline'} size={40} color="#FFC107" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleRating(5)}>
          <Icon name={rating >= 5 ? 'star' : 'star-outline'} size={40} color="#FFC107" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#007bff' }]}
        onPress={() => navigation.navigate('Main')}
      >
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
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#FFC107',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  fare: {
    fontSize: 40,
    fontWeight: 'bold',
    position: 'absolute',
    top: 100,
  },
});

export default RatingPage;
