import React, { useState } from 'react';
import { Text, StyleSheet, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";
import * as ImagePicker from 'expo-image-picker'; 
import { Picker } from '@react-native-picker/picker';

const SignIn = () => {
  const navigation = useNavigation();
  const [carModel, setCarModel] = useState("");
  const [plateNumber, setPlateNumber] = useState("");
  const [carImage, setCarImage] = useState(null);
  const [licenseImage, setLicenseImage] = useState(null);
  const [selectedVehicleType, setSelectedVehicleType] = useState('');
  const [selectedColor, setSelectedColor] = useState('');

  const requestPermission = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Sorry, we need camera roll permissions to make this work!');
    }
  };

  React.useEffect(() => {
    requestPermission();
  }, []);

  const handleCarImagePicker = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setCarImage(result.uri);
    }
  };

  const handleLicenseImagePicker = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setLicenseImage(result.uri);
    }
  };

  const handleNext = () => {
    navigation.navigate("TAA");
  };

  return (
    <View style={styles.SignIn}>
      <View style={styles.theFormInputs}>
        <View style={[styles.frame, styles.frameLayout]}>
          <View style={[styles.headerContainertopBarhide, styles.frameLayout]}>
            <Text style={styles.createYourAccount}>Create your Account</Text>
          </View>
        </View>

        <View style={styles.container}>
          <Button
            style={styles.containerChild}
            mode="contained"
            labelStyle={styles.frameButtonBtn}
            onPress={handleNext}
            contentStyle={styles.frameButtonBtn1}
          >
            Next
          </Button>

          <View style={[styles.inputNumber1, styles.firstNamePosition]}>
            <Picker
              selectedValue={selectedVehicleType}
              onValueChange={(itemValue) => setSelectedVehicleType(itemValue)}
              style={[styles.inputNumberChild, styles.firstNamePosition, styles.picker]}
              mode="dropdown"
              dropdownIconColor="rgba(168, 156, 255, 0.08)">
              <Picker.Item label="Select a vehicle type" value="" />
              <Picker.Item label="Car" value="car" />
              <Picker.Item label="Motor" value="motor" />
            </Picker>
            <Text style={[styles.firstName, styles.firstNamePosition]}>
              Vehicle Type
            </Text>

          <View style={[styles.inputNumber2, styles.firstNamePosition]}>
            <Picker
              selectedValue={selectedColor}
              onValueChange={(itemValue) => setSelectedColor(itemValue)}
              style={[styles.inputNumberChild, styles.firstNamePosition, styles.picker]}
              mode="dropdown"
              dropdownIconColor="rgba(168, 156, 255, 0.08)">
              <Picker.Item label="Select a color" value="" />
              <Picker.Item label="Red" value="red" />
              <Picker.Item label="Green" value="green" />
              <Picker.Item label="Blue" value="blue" />
              <Picker.Item label="Yellow" value="yellow" />
              <Picker.Item label="Black" value="black" />
              <Picker.Item label="Silver" value="silver" />
            </Picker>
            <Text style={[styles.firstName, styles.firstNamePosition]}>
              Color Options
            </Text>
          </View>

            <View style={[styles.inputNumber3, styles.firstNamePosition]}>
              <TextInput
                style={[styles.inputNumberChild, styles.firstNamePosition]}
                placeholder="Car Model"
                value={carModel}
                onChangeText={setCarModel}
                mode="contained"
                theme={{ colors: { background: "rgba(168, 156, 255, 0.08)" } }}
              />
              <Text style={[styles.firstName, styles.firstNamePosition]}>
                Car Model
              </Text>
            </View>

            <View style={[styles.inputNumber, styles.firstNamePosition]}>
              <TextInput
                style={[styles.inputNumberChild, styles.firstNamePosition]}
                placeholder="Plate Number"
                value={plateNumber}
                onChangeText={setPlateNumber}
                mode="contained"
                theme={{ colors: { background: "rgba(168, 156, 255, 0.08)" } }}
              />
              <Text style={[styles.firstName, styles.firstNamePosition]}>
                Plate Number
              </Text>
            </View>
            
          </View>

          <Text style={[styles.firstName, styles.AttachmentPosition1]}>
              Attach Car Image
            </Text>

          <View style={styles.buttonContainer}>
            <Button
              title="Attach Car Image"
              onPress={handleCarImagePicker}
              mode="contained"
              style={styles.button}
            />
            {carImage && (
              <Image source={{ uri: carImage }} style={styles.imagePreview} />
            )}

            
            <Text style={[styles.firstName, styles.AttachmentPosition2]}>
              Attach Driver's License
            </Text>

            <Button
              title="Attach Driver's License Image"
              onPress={handleLicenseImagePicker}
              mode="contained"
              style={styles.button}
            />
            {licenseImage && (
              <Image
                source={{ uri: licenseImage }} style={styles.imagePreview}/>
            )}
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameButtonBtn: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    fontFamily: "Poppins",
    
  },
  frameButtonBtn1: {
    borderRadius: 15,
    height: 51,
    width: 315,
  },
  frameLayout: {
    height: 79,
    overflow: "hidden",
  },
  firstNamePosition: {
    left: 3,
    width: 315,
    position: "absolute",
  },

  AttachmentPosition1: {
    left: 3,
    width: 315,
    top: 440,
  },

  AttachmentPosition2: {
    left: -20,
    width: 315,
    top: 5,
  },


  headerContainertopBarhide: {
    width: 336,
    justifyContent: "flex-end",
    paddingHorizontal: 11,
    paddingVertical: 0,
    opacity: 0.8,
    backgroundColor: Color.colorWhite,
  },
  frame: {
    width: 360,
    justifyContent: "center",
  },
  containerChild: {
    top: 600,
    left: 23,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
  inputNumberChild: {
    top: 29,
    left: 0,
    width: 315,
    position: "absolute",
  },
  firstName: {
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_base,
    top: 0,
  },
  inputNumber: {
    top: 300,
    height: 81,
    left: 30,
  },
  inputNumber1: {
    top: 38,
    width: 318,
    height: 81,
    left: 30,
  },
  inputNumber2: {
    top: 95,
    height: 81,
  },
  inputNumber3: {
    top: 200,
    left: 33,
    height: 81,
  },
  createYourAccount: {
    fontSize: FontSize.size_6xl,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.colorSlateblue,
    width: 292,
    height: 51,
    lineHeight: 50,
    textAlign: "center",
  },
  container: {
    height: 683,
    width: 360,
    overflow: "hidden",
  },
  theFormInputs: {
    height: 800,
    paddingTop: 38,
    width: 360,
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  SignIn: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  picker: {
    backgroundColor: "rgba(168, 156, 255, 0.08)",
  },
  buttonContainer: {
    marginTop: 0,
    alignItems: "center",
    top: 430,
  },
  button: {
    marginVertical: 10,
    width: 200,

  },
  imagePreview: {
    width: 200,
    height: 200,
    resizeMode: "cover",
    marginVertical: 10,
  },
  
});

export default SignIn;
