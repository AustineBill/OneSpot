import React, { useState } from 'react';
import { Image } from "expo-image";
import { View, StyleSheet, Pressable, Text } from 'react-native';
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import { Picker } from '@react-native-picker/picker';
import ParkingSlot from '../components/ParkingSlots';
import { useRoute } from "@react-navigation/native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const ParkingScreen = ({ navigation }) => {
  const route = useRoute();
  const { selectedModel, name, price, address } = route.params || {};
  const [error, setError] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  

  const [selectedFloor, setSelectedFloor] = useState('');
  const [selectedBlock, setSelectedBlock] = useState('');
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [parkingSlots, setParkingSlots] = useState([

    { id: 1, status: 'available', floor: '1st', block: 'A' },
    { id: 2, status: 'reserved', floor: '1st', block: 'A' },
    { id: 3, status: 'occupied', floor: '1st', block: 'A' },
    { id: 4, status: 'available', floor: '1st', block: 'A' },
    { id: 5, status: 'available', floor: '1st', block: 'B' },
    { id: 6, status: 'available', floor: '1st', block: 'B' },
    { id: 7, status: 'reserved', floor: '1st', block: 'B' },
    { id: 8, status: 'occupied', floor: '1st', block: 'B' },
    { id: 9, status: 'available', floor: '1st', block: 'C' },
    { id: 10, status: 'reserved', floor: '1st', block: 'C' },
    { id: 11, status: 'occupied', floor: '1st', block: 'C' },
    { id: 12, status: 'available', floor: '1st', block: 'C' },
    { id: 13, status: 'available', floor: '1st', block: 'D' },
    { id: 14, status: 'available', floor: '1st', block: 'D' },
    { id: 15, status: 'reserved', floor: '1st', block: 'D' },
    { id: 16, status: 'occupied', floor: '1st', block: 'D' },

    { id: 17, status: 'available', floor: '2nd', block: 'A' },
    { id: 18, status: 'available', floor: '2nd', block: 'A' },
    { id: 19, status: 'reserved', floor: '2nd', block: 'A' },
    { id: 20, status: 'occupied', floor: '2nd', block: 'A' },
    { id: 21, status: 'available', floor: '2nd', block: 'B' },
    { id: 22, status: 'available', floor: '2nd', block: 'B' },
    { id: 23, status: 'reserved', floor: '2nd', block: 'B' },
    { id: 24, status: 'occupied', floor: '2nd', block: 'B' },
    { id: 25, status: 'available', floor: '2nd', block: 'C' },
    { id: 26, status: 'available', floor: '2nd', block: 'C' },
    { id: 27, status: 'reserved', floor: '2nd', block: 'C' },
    { id: 28, status: 'occupied', floor: '2nd', block: 'C' },
    { id: 29, status: 'available', floor: '2nd', block: 'D' },
    { id: 30, status: 'available', floor: '2nd', block: 'D' },
    { id: 31, status: 'reserved', floor: '2nd', block: 'D' },
    { id: 32, status: 'occupied', floor: '2nd', block: 'D' },

    { id: 33, status: 'available', floor: '3rd', block: 'A' },
    { id: 34, status: 'available', floor: '3rd', block: 'A' },
    { id: 35, status: 'reserved', floor: '3rd', block: 'A' },
    { id: 36, status: 'occupied', floor: '3rd', block: 'A' },
    { id: 37, status: 'available', floor: '3rd', block: 'B' },
    { id: 38, status: 'available', floor: '3rd', block: 'B' },
    { id: 39, status: 'reserved', floor: '3rd', block: 'B' },
    { id: 40, status: 'occupied', floor: '3rd', block: 'B' },
    { id: 41, status: 'available', floor: '3rd', block: 'C' },
    { id: 42, status: 'available', floor: '3rd', block: 'C' },
    { id: 43, status: 'reserved', floor: '3rd', block: 'C' },
    { id: 44, status: 'occupied', floor: '3rd', block: 'C' },
    { id: 45, status: 'available', floor: '3rd', block: 'D' },
    { id: 46, status: 'available', floor: '3rd', block: 'D' },
    { id: 47, status: 'reserved', floor: '3rd', block: 'D' },
    { id: 48, status: 'occupied', floor: '3rd', block: 'D' },

    { id: 49, status: 'available', floor: '4th', block: 'A' },
    { id: 50, status: 'available', floor: '4th', block: 'A' },
    { id: 51, status: 'reserved', floor: '4th', block: 'A' },
    { id: 52, status: 'occupied', floor: '4th', block: 'A' },
    { id: 53, status: 'available', floor: '4th', block: 'B' },
    { id: 54, status: 'available', floor: '4th', block: 'B' },
    { id: 55, status: 'reserved', floor: '4th', block: 'B' },
    { id: 56, status: 'occupied', floor: '4th', block: 'B' },
    { id: 57, status: 'available', floor: '4th', block: 'C' },
    { id: 58, status: 'available', floor: '4th', block: 'C' },
    { id: 59, status: 'reserved', floor: '4th', block: 'C' },
    { id: 60, status: 'occupied', floor: '4th', block: 'C' },
    { id: 61, status: 'available', floor: '4th', block: 'D' },
    { id: 62, status: 'available', floor: '4th', block: 'D' },
    { id: 63, status: 'reserved', floor: '4th', block: 'D' },
    { id: 64, status: 'occupied', floor: '4th', block: 'D' }
  ]);

  const toggleStatus = (id) => {
    setParkingSlots((prevSlots) =>
      prevSlots.map((slot) =>
        slot.id === id && slot.status === 'available' 
          ? { ...slot, status: 'reserved' }
          : slot
      )
    );
    const selectedSlot = parkingSlots.find(slot => slot.id === id);
    setSelectedSlot(selectedSlot); 
  };

  const filteredSlots = parkingSlots.filter(
    (slot) =>
      slot.floor === selectedFloor &&
      (selectedBlock ? slot.block === selectedBlock : true)
  );

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { month: 'long', day: '2-digit', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  const handleBooking = () => {
    if (!selectedFloor || !selectedBlock || !selectedSlot) {
      setError('Please select a floor, block, and slot.');
      return;
    }
    setError('');
    navigation.navigate("ConfirmBooking", {
      selectedFloor,
      selectedBlock,
      selectedModel,
      name, price, address,
      selectedSlot,
      selectedDate: selectedDate ? formatDate(selectedDate) : 'N/A',
    });
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    const serializedDate = date.toISOString();
    setSelectedDate(serializedDate);
    hideDatePicker();
  };


  return (
    <View styles={styles.CarSlots}>
      <Image
        style={[styles.arrowBackIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/arrowback.png")}
      />

      <Text style={styles.ParkingCar}>Select Parking Slot</Text>



      <View style = {styles.Datebox}>
        <Pressable onPress={showDatePicker}>
          <Text style = {styles.Datetext}>Select Date: {selectedDate ? formatDate(selectedDate) : 'N/A'} </Text>
        </Pressable>

        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
      </View>

      <View>
        <Picker
          selectedValue={selectedFloor}
          onValueChange={(itemValue) => {
            setSelectedFloor(itemValue);
            setSelectedBlock(''); 
          }}
          style={styles.Floorpicker}
        >
          <Picker.Item label="Select a Floor" value="" />
          <Picker.Item label="1st" value="1st" />
          <Picker.Item label="2nd" value="2nd" />
          <Picker.Item label="3rd" value="3rd" />
          <Picker.Item label="4th" value="4th" />
        </Picker>
      </View>

      <View>
        <Picker
          selectedValue={selectedBlock}
          onValueChange={(itemValue) => setSelectedBlock(itemValue)}
          style={styles.Blockpicker}
        >
          <Picker.Item label="Select a Block" value="" />
          <Picker.Item label="Block A" value="A" />
          <Picker.Item label="Block B" value="B" />
          <Picker.Item label="Block C" value="C" />
          <Picker.Item label="Block D" value="D" />
        </Picker>
      </View>


      <View style={styles.container}>
        {filteredSlots.length > 0 ? (
          filteredSlots.map((slot) => (
            <ParkingSlot
              key={slot.id}
              status={slot.status}
              onPress={() => toggleStatus(slot.id)}
            />
          ))
        ) : (
          <Text style={styles.noSlotsText}>No slots available for the selected floor and block.</Text>
        )}

          <Pressable
            style={styles.frameChild}
            onPress={handleBooking}
          >
          <Text style={styles.Confirm}>BOOK NOW</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  CarSlots: {
    backgroundColor: Color.colorLightgray,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
  container: {
    top: 400,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    position: "absolute",
    marginLeft: 20,
  },
  ParkingCar: {
    fontSize: 32,
    fontWeight: "700",
    color: "black",
    textAlign: "center",
    marginTop: 70,
    position: "absolute",
    marginLeft: 30,
  },
  frameChild: {
   
    left: 60,
    top: 300,
    width: 232,
    height: 47,
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorMidnightblue,
    position: "absolute"
  },
  Floorpicker: {
    backgroundColor: "rgba(168, 156, 255, 0.08)",
    height: 50,
    borderWidth: 10,
    marginTop: 150,
    margin: 80,
  },
  Blockpicker: {
    backgroundColor: "rgba(168, 156, 255, 0.08)",
    height: 50,
    borderWidth: 10,
    marginTop: -60,
    marginLeft: 80,
    marginRight: 80,
  },
  Confirm: {
    top: 15,
    left: 0,
    fontSize: FontSize.size_3xl,
    lineHeight: 24,
    color: Color.colorWhite,
    textAlign: "center",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
  },
  Datebox: {
    top: 150,
    marginLeft: 70,
    height: 50,
   
  },
  Datetext: {
    fontSize: FontSize.size_lg,
  },
  noSlotsText: {
    fontSize: 16,
    color: "gray",
    textAlign: "center",
    marginTop: 20,
    marginLeft: 20,
  },
});

export default  ParkingScreen;