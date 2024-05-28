import React, { useState } from 'react';
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View, TextInput, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";
import { Picker } from '@react-native-picker/picker';
import { useRoute } from "@react-navigation/native";

const ParkinginfoPage = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { name, price, address } = route.params || {};
  

  const [carModel, setCarModel] = useState("");
  const [plateNumber, setPlateNumber] = useState("");
  const [selectedVehicleType, setSelectedVehicleType] = useState('');
  const [selectedColor, setSelectedColor] = useState('');

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
        <Text style={styles.ParkVehicle}>Park your Vehicle</Text>
        <Text style={styles.vehicleTypo}>Vehicle Information</Text>

        <View style={styles.formContainer}>
          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Vehicle Type</Text>
            <Picker
              selectedValue={selectedVehicleType}
              onValueChange={(itemValue) => setSelectedVehicleType(itemValue)}
              style={styles.picker}
              mode="dropdown">
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
            <Text style={styles.label}>Model Name</Text>
            <TextInput
              style={styles.textInput}
              value={carModel}
              onChangeText={setCarModel}
            />
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
        style={styles.submitButton}
        onPress={() => navigation.navigate("CarBookSlot", {selectedModel: carModel, name, price , address})}>
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
  vehicleTypo: {
    fontSize: 24,
    fontWeight: "700",
    color: "white",
    textAlign: "center",
    marginTop: 260,
    marginLeft: 30,
  },
  ParkVehicle: {
    fontSize: 32,
    fontWeight: "700",
    color: "black",
    textAlign: "center",
    marginTop: 70,
    position: "absolute",
    marginLeft: 30,
  },

  fieldContainer: {
    marginBottom: 20,
    marginLeft: 35,
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
