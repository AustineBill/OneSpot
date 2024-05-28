import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Color} from "../GlobalStyles";

const VerificationPage = () => {
  const [verificationCode, setVerificationCode] = useState('');
  const navigation = useNavigation();

  const route = useRoute();
  const { name, address, selectedFloor, selectedBlock, selectedSlot, duration , totalPrice, time, selectedDate} = route.params || {};


  const handleConfirmPayment = () => {
    alert('Payment confirmed');
    navigation.navigate('ReceiptPage', {name, address, duration , totalPrice, selectedFloor, selectedBlock, selectedSlot, time, selectedDate});
  };

  useEffect(() => {
    console.log('slots params:', route.params);
  }, []);


  return (
    <View style={styles.container}>
      <Text style={styles.header}>Verification Code</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your code"
        value={verificationCode}
        onChangeText={setVerificationCode}
      />
      <TouchableOpacity style={styles.button} onPress={handleConfirmPayment}>
        <Text style={styles.buttonText}>Confirm Payment</Text>
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
    borderColor: 'gray',
    borderWidth: 2,
    borderColor: "black",
    padding: 10,
    marginVertical: 10,
    width: '100%',
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

export default VerificationPage;
