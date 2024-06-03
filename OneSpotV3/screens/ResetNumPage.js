import React, { useState, useEffect } from "react";
import { Image, TextInput, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const ResetNumPage = () => {
  const navigation = useNavigation();
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [confirmPhoneNumber, setConfirmPhoneNumber] = useState("");
 

  useEffect(() => {
    // Fetch the stored phone number from the backend
    fetchStoredPhoneNumber();
  }, []);

  const fetchStoredPhoneNumber = async () => {
    try {
      const response = await fetch('http://192.168.1.6/onespot_api/phonenumber.php');
      const data = await response.json();
      if (data.success) {
        setStoredPhoneNumber(data.phoneNumber);
      } else {
        Alert.alert("Error", "Failed to fetch stored phone number");
      }
    } catch (error) {
      console.error("Fetch error:", error);
      Alert.alert("Error", "Something went wrong. Please try again later.");
    }
  };

 
  const validatePhoneNumber = (phoneNumber) => {
    const regExp = /^09\d{9}$/; 
    return regExp.test(phoneNumber);
  };

  // Function to handle the next button press
  const handleNext = () => {
    if (!validatePhoneNumber(PhoneNumber)) {
      alert("Please enter a valid phone number starting with '09' and having a length of 11.");
      return;
    }
  };

  
  return (
    <View style={styles.resetnumPage}>
      <View style={styles.containerContaineraspectra}>
        <TouchableOpacity onPress={handleNext} style={styles.arrowContainer}>
          <Image
            style={[styles.frameIcon, styles.framePosition]}
            contentFit="cover"
            source={require("../assets/frame3.png")}
          />
        </TouchableOpacity>
        <View style={styles.frame}>
          <Text style={styles.resetPhoneNumber}>Reset Phone Number</Text>
        </View>

        <TextInput
          style={[styles.textInput, { borderColor: validatePhoneNumber(PhoneNumber) ? 'green' : 'red' }]}
          placeholder="Enter Phone Number"
          value={PhoneNumber}
          onChangeText={setPhoneNumber}
          maxLength={11}
          keyboardType="phone-pad"
        />
        <Text style={[styles.password, styles.textPosition]}>
          Enter Phone Number
        </Text>

        <TextInput
          style={[styles.textCode, { borderColor: confirmPhoneNumber === "" ? 'green' : 'red' }]}
          placeholder="New Phone Number"
          value={confirmPhoneNumber}
          onChangeText={setConfirmPhoneNumber}
          maxLength={11}
          keyboardType="phone-pad"
        />
        <Text style={[styles.newpass, styles.textPosition]}>
          Change Phone Number
        </Text>

        <Button
          style={[styles.frame1, styles.framePosition]}
          mode="contained"
          labelStyle={styles.frameBtn}
          onPress={handleNext}
          contentStyle={styles.frameBtn1}
        >
          CONFIRM
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameBtn: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    fontFamily: "Manrope-Bold",
  },
  frameBtn1: {
    borderRadius: 15,
    height: 51,
    width: 315,
  },
  framePosition: {
    position: "absolute",
    overflow: "hidden",
  },
  textPosition: {
    width: 315,
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "600",
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  textInput: {
    height: 50,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 10,
    marginBottom: 10,
    top: 250,
  },
  textCode: {
    height: 50,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 10,
    marginBottom: 10,
    top: 300,
  },
  frameIcon: {
    top: 60,
    left: 11,
    width: 315,
    height: 34,
  },
  resetPhoneNumber: {
    fontSize: FontSize.size_6xl,
    fontWeight: "700",
    fontFamily: FontFamily.manropeBold,
    display: "flex",
    alignItems: "flex-end",
    height: 33,
    textAlign: "left",
    color: Color.colorGray_200,
    width: 308,
  },
  frame: {
    top: 156,
    left: 18,
    width: 308,
    position: "absolute",
    justifyContent: "center",
    overflow: "hidden",
  },
  password: {
    top: 220,
    left: 10,
  },
  frame1: {
    top: 600,
    left: 23,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
  newpass: {
    top: 330,
    left: 10,
  },
  frame2: {
    top: 305,
    left: 28,
    width: 318,
    overflow: "hidden",
  },
  containerContaineraspectra: {
    width: 360,
    height: 800,
    overflow: "hidden",
  },
  resetnumPage: {
    backgroundColor: Color.colorLightgray,
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
});

export default ResetNumPage;
