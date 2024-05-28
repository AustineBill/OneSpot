import React, { useState,useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Color } from "../GlobalStyles";

const TransactionPage = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [nameOnCard, setNameOnCard] = useState('');
  const [expiration, setExpiration] = useState('');
  const [cvv, setCvv] = useState('');
  const navigation = useNavigation();

  const route = useRoute();
  const { name, address, selectedFloor, selectedBlock, selectedSlot, duration , totalPrice, time, selectedDate} = route.params || {};


  const handleConfirm = () => {
    navigation.navigate('VerificationPage', { name, address, duration , totalPrice, selectedFloor, selectedBlock, selectedSlot, time, selectedDate });
  }; 

  useEffect(() => {
    console.log('slots params:', route.params);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Security Guaranteed</Text>
      <TextInput
        style={styles.input}
        placeholder="Card Number"
        keyboardType="numeric"
        value={cardNumber}
        onChangeText={setCardNumber}
      />
      <TextInput
        style={styles.input}
        placeholder="Name on Card"
        value={nameOnCard}
        onChangeText={setNameOnCard}
      />
      <View style={styles.row}>
        <TextInput
          style={[styles.halfInput]}
          placeholder="Expiration (MM/YY)"
          value={expiration}
          onChangeText={setExpiration}
        />
        <TextInput
          style={[styles.halfInput]}
          placeholder="CVV"
          keyboardType="numeric"
          value={cvv}
          onChangeText={setCvv}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleConfirm}>
        <Text style={styles.buttonText}>Confirm</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: Color.colorAliceblue_100,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 50,
    textAlign: 'center',
  },
  input: {
    borderColor: "black",
    borderWidth: 3,
    padding: 10,
    marginVertical: 10,
    width: '100%',
    borderRadius: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    
  },
  halfInput: {
    width: '48%',
    borderColor: "black",
    
    borderWidth: 3,
    padding: 10,
    marginVertical: 10,
    
    borderRadius: 5,

  },
  button: {
    backgroundColor: 'navy',
    padding: 15,
    marginTop: 20,
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default TransactionPage;