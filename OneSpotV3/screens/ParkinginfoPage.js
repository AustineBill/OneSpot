import React, { useState } from 'react';
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View, TextInput, ImageBackground, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";
import { Picker } from '@react-native-picker/picker';
import { useRoute } from "@react-navigation/native";

const ParkinginfoPage = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { username, name, price, address, hour, adds } = route.params || {};
  const [plateNumber, setPlateNumber] = useState("");
  const [selectedVehicleType, setSelectedVehicleType] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedBrand, setSelectedBrand] = useState("");

  const carBrands = [
    { label: "Toyota", value: "toyota" },
    { label: "Mitsubishi", value: "mitsubishi" },
    { label: "Honda", value: "honda" },
    { label: "Nissan", value: "nissan" },
    { label: "Suzuki", value: "suzuki" },
    { label: "Ford", value: "ford" },
    { label: "Hyundai", value: "hyundai" },
    { label: "Kia", value: "kia" },
    { label: "Mazda", value: "mazda" },
    { label: "Chevrolet", value: "chevrolet" },
    { label: "Isuzu", value: "isuzu" },
    { label: "Volkswagen", value: "volkswagen" },
    { label: "Subaru", value: "subaru" },
    { label: "MG", value: "mg" },
    { label: "Chery", value: "chery" }
  ];

  const motorBrands = [
    { label: "Honda", value: "honda" },
    { label: "Yamaha", value: "yamaha" },
    { label: "Suzuki", value: "suzuki" },
    { label: "Kawasaki", value: "kawasaki" },
    { label: "Rusi", value: "rusi" },
    { label: "KTM", value: "ktm" },
    { label: "Royal Enfield", value: "royal_enfield" },
    { label: "TVS", value: "tvs" },
    { label: "BMW", value: "bmw" },
    { label: "Aprilia", value: "aprilia" },
    { label: "Ducati", value: "ducati" },
    { label: "Harley-Davidson", value: "harley_davidson" },
    { label: "SYM", value: "sym" },
    { label: "Benelli", value: "benelli" },
    { label: "CFMoto", value: "cfmoto" }
  ];


  const handleConfirm = () => {
    if (!selectedVehicleType || !selectedColor || !selectedBrand || !plateNumber) {
      Alert.alert('Error', 'Please fill in all fields.');
    } else {
      navigation.navigate("CarBookSlot", { username, selectedBrand, name, price, address, hour, adds});
    }
  };

  return (
    <View style={styles.parkinginfoPage}>
      <Pressable
        style={styles.vector}
        onPress={() => navigation.navigate("BookPage")}>
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/vector3.png")}
        />
      </Pressable>

      <ImageBackground source={require("../assets/rectangle-61.png")} style={styles.Background}>
        <Text style={styles.Park}>Park Vehicle </Text>
      </ImageBackground>

      <View style={styles.vectorGroup}>
        <Image
          style={styles.frameItem}
          contentFit="cover"
          source={require("../assets/rectangle-63.png")}
        />
        <Text style={styles.ParkVehicle}>Vehicle Information</Text>
        
        <View style={styles.formContainer}>
          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Vehicle Type</Text>
            <Picker
              selectedValue={selectedVehicleType}
              onValueChange={(itemValue) => setSelectedVehicleType(itemValue)}
              style={styles.picker}
             >
              <Picker.Item label="Select a vehicle type" value="" />
              <Picker.Item label="Car" value="car" />
              <Picker.Item label="Motor" value="motor" />
            </Picker>
          </View>

          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Color</Text>
            <Picker
              selectedValue={selectedColor}
              onValueChange={(itemValue) => setSelectedColor(itemValue)}
              style={styles.picker}>
              <Picker.Item label="Select a color" value="" />
              <Picker.Item label="Red" value="red" />
              <Picker.Item label="Green" value="green" />
              <Picker.Item label="Blue" value="blue" />
              <Picker.Item label="Yellow" value="yellow" />
              <Picker.Item label="Black" value="black" />
              <Picker.Item label="Silver" value="silver" />
            </Picker>
          </View> 

          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Select Brand</Text>
            <Picker
              selectedValue={selectedBrand}
              onValueChange={(itemValue) => setSelectedBrand(itemValue)}
              style={styles.picker}>
              <Picker.Item label="Select a brand" value="" />
              {selectedVehicleType === 'car' ? (
                carBrands.map(brand => (
                  <Picker.Item key={brand.value} label={brand.label} value={brand.value} />
                ))
              ) : (
                motorBrands.map(brand => (
                  <Picker.Item key={brand.value} label={brand.label} value={brand.value} />
                ))
              )}
            </Picker>
          </View>


          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Plate Number</Text>
            <TextInput
              style={styles.textInput}
              value={plateNumber}
              onChangeText={setPlateNumber}
            />
          </View>
        </View>
      </View>

      <Pressable
        style={styles.submitButton} onPress={handleConfirm}>
        <Text style={styles.done}>Confirm</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  vector: {
    left: "5.28%",
    top: "4.25%",
    width: "6.5%",
    height: "2.25%",
    position: "absolute",
  },
  Background: {
    justifyContent: 'center',
    width: 180,
    height: 50,
    left: 90,
    top: 130,
  },
  Park: {
    color: "white",
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
    marginLeft: 10,
    
  },
  vectorGroup: {
    top: 0,
    position: "absolute",
    height: 800,
    width: '100%',
    paddingHorizontal: 20,
  },
  frameItem: {
    width: "100%",
    width: 400,
    height: 600,
    position: "absolute",
    top: 250,
    left: -5,
    borderRadius: Border.br_69xl_7,
 
  },
  
  formContainer: {
  
    marginTop: 280,
    marginLeft: 20,
  },
  ParkVehicle: {
    fontSize: 32,
    fontWeight: "700",
    color: "black",
    textAlign: "center",
    marginTop: 70,
    position: "absolute",
    marginLeft: 30,
    fontSize: 24,

  },

  fieldContainer: {
    marginBottom: 20,
    marginLeft: 30,
  },
  label: {
    fontSize: 18,
    color: "white",
    marginBottom: 10,
    textAlign: "center",
  },
  picker: {
    backgroundColor: "rgba(168, 156, 255, 0.08)",
    height: 50, 
    borderWidth: 5,
    color: Color.colorWhite,
  },
  textInput: {
    height: 50,
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 3,
    paddingHorizontal: 10,
    
  },
  submitButton: {
    marginTop: 640,
    backgroundColor: "lightsteelblue",
    borderRadius: 5,
    alignItems: "center",
    padding: 15,
  },
  done: {
    fontSize: 18,
    fontWeight: "600",
    fontSize: FontSize.size_3xl,
    lineHeight: 24,
    color: Color.colorBlack,
  },
  parkinginfoPage: {
    backgroundColor: "lightgray",
    flex: 1,
    padding: 20,
  },
});

export default ParkinginfoPage;
