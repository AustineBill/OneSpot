import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Color } from "../GlobalStyles";

const TransactionPage = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [nameOnCard, setNameOnCard] = useState('');
  const [expiration, setExpiration] = useState('');
  const [cvv, setCvv] = useState('');
  const [email, setEmail] = useState('');
  const navigation = useNavigation();

  const route = useRoute();
  const { name, address, selectedFloor, selectedBlock, selectedSlot, duration , totalPrice, time, selectedDate, selectedPaymentMethod } = route.params || {};

  const handleConfirm = async () => { 
    if (!cardNumber || !nameOnCard || !expiration || !cvv || !email) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }
    
    try {
      const response = await fetch('http://192.168.1.6/onespot_api/transaction.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          cardNumber,
          nameOnCard,
          expiration,
          cvv,
          email, // Include the email in the request body
        }),
      });
  
      const text = await response.text(); 
      console.log('Response text:', text);
  
      const data = JSON.parse(text); 
  
      if (data.success) {
        navigation.navigate('VerificationPage', { name, address, duration , totalPrice, selectedFloor, selectedBlock, selectedSlot, time, selectedDate });
      } else {
        Alert.alert('Error', data.message);
      }
    } catch (error) {
      console.error('Error:', error);
      Alert.alert('Error', 'An error occurred. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.Title}>{selectedPaymentMethod}</Text>
      <Text style={styles.header}>Security Guaranteed</Text>
      <TextInput
        style={styles.input}
        placeholder="Card Number"
        keyboardType="numeric"
        maxLength={12}
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
          keyboardType="numeric"
          value={expiration}
          maxLength={4}
          onChangeText={setExpiration}
        />
        <TextInput
          style={[styles.halfInput]}
          placeholder="CVV"
          keyboardType="numeric"
          value={cvv}
          onChangeText={setCvv}
          maxLength={3}
          secureTextEntry
        />
      </View>
       
      <TextInput
          style={styles.email}
          placeholder="email@gmail.com"
          value={email}
          onChangeText={setEmail}
        />
      <Text style={styles.emailText}>Required to Provide Email Account* </Text>
         
      <TouchableOpacity style={styles.button} onPress={handleConfirm}>
        <Text style={styles.buttonText}>Confirm</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Color.colorAliceblue_100,
  },
  Title: {
    fontSize: 60,
    fontWeight: 'bold',
    marginTop: 100,
    marginBottom: 30,
    textAlign: 'center',
    color: "blue",
  },
  header: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 30,
    bottom: 170,
    textAlign: 'right',
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

  emailText: {
    color: Color.colorLightgray,
    fontSize: 15,
  },
  email: {
    borderColor: "black",
    borderWidth: 3,
    padding: 10,
    marginTop: 50,
    width: '100%',
    borderRadius: 5,
  },
  button: {
    backgroundColor: 'navy',
    padding: 15,
    marginTop: 80,
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
});

export default TransactionPage;
