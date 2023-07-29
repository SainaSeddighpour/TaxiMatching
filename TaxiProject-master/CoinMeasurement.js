import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function CoinMeasurement(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>
        If you win World Wednesday, your points will get accumulated here automatically.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginHorizontal: 20,
  },
});

export default CoinMeasurement;
