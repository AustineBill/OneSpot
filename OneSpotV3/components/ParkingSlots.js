import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ParkingSlot = ({ status, onPress }) => {
  const getColor = (status) => {
    switch (status) {
      case 'available':
        return 'green';
      case 'reserved':
        return 'yellow';
      case 'occupied':
        return 'red';
      default:
        return 'gray';
    }
  };

  return (
    <TouchableOpacity
      onPress={status === 'available' ? onPress : null} 
      style={[styles.slot, { backgroundColor: getColor(status) }]}
    >
      <Text style={styles.text}>{status.toUpperCase()}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  slot: {
    width: 80, // Smaller width
    height: 50, // Smaller height
    margin: 5, // Adjust margin for better spacing
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 10, // Adjust text size for smaller boxes
  },
});

export default ParkingSlot;