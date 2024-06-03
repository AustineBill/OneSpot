import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from "@react-navigation/native";
import { Color } from "../GlobalStyles";

const PaymentMethodPage = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { name, address, selectedFloor, selectedBlock, selectedSlot, duration, totalPrice, time, selectedDate } = route.params || {};

  const handlePaymentMethodSelect = (method) => {
    navigation.navigate('TransactionPage', { selectedPaymentMethod: method, name, address, duration, totalPrice, selectedFloor, selectedBlock, selectedSlot, time, selectedDate });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Payment Method</Text>
      <View>
        <Text style={styles.subHeader}>Debit Payment</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePaymentMethodSelect('BDO')}
        >
          <Text style={styles.buttonText}>BDO</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePaymentMethodSelect('BPI')}
        >
          <Text style={styles.buttonText}>BPI</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.subHeader}>Online Payment</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePaymentMethodSelect('GCASH')}
        >
          <Text style={styles.buttonText}>GCASH</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePaymentMethodSelect('MAYA')}
        >
          <Text style={styles.buttonText}>MAYA</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: Color.colorWhitesmoke,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 50,
    textAlign: 'center',
  },
  subHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'navy',
    padding: 15,
    marginVertical: 5,
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default PaymentMethodPage;
