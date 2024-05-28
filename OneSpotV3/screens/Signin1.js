
import React, { useState } from 'react';
import { Text, StyleSheet, View, Alert } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";


const Signin1 = () => {
  const navigation = useNavigation();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    phoneNumber: "",
  });

  const handleSubmit = () => {
    console.log("Form data being sent:", formData);
    fetch("http:/192.168.1.21/UserInfo.js", {  //http:/192.168.1.21/UserInfo.js
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      console.log("Server response:", data);

        if (data.status === "success") {
          Alert.alert("Success", data.message);
          navigation.navigate("SignIn2");
        } else {
          Alert.alert("Error", data.message);
        }
      })
      .catch((error) => {
        Alert.alert("Error", "Error saving form data");
        console.error("Error saving form data:", error.message);
      });
  };

  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <View style={styles.signin1}>
      <View style={styles.theFormInputs}>
        <Text style={styles.createYourAccount}>Create your Account</Text>
        <View style={styles.container}>

          <Button
            style={styles.containerChild}
            mode="contained"
            labelStyle={styles.frameButtonBtn}
            onPress={handleSubmit}
            contentStyle={styles.frameButtonBtn1}
          > Next
          </Button>
          
          <View style={[styles.inputNumber, styles.Position]}>
            <TextInput
              style={[styles.inputNumberChild, styles.Position]}
              placeholder="Enter Phone Number"
              mode="contained"
              onChangeText={(text) => handleChange("phoneNumber", text)}
              theme={{ colors: { background: "rgba(168, 156, 255, 0.08)" } }}
            />
            <Text style={[styles.phoneNumber, styles.Position]}>
              Phone Number
            </Text>
          </View>

          <View style={[styles.inputNumber1, styles.Position]}>
            <TextInput
              style={[styles.inputNumberChild, styles.Position]}
              placeholder="Enter First Name"
              mode="contained"
              value={formData.firstName}
              onChangeText={(text) => handleChange("firstName", text)}
              theme={{ colors: { background: "rgba(168, 156, 255, 0.08)" } }}
            />
            <Text style={[styles.infostyle, styles.Position]}>
              First Name
            </Text>
          </View>
            
            <View style={[styles.inputNumber2, styles.Position]}>
              <TextInput
                style={[styles.inputNumberChild, styles.Position]}
                placeholder="Enter Last Name"
                mode="contained"
                value={formData.lastName}
                onChangeText={(text) => handleChange("lastName", text)}
                theme={{ colors: { background: "rgba(168, 156, 255, 0.08)" } }}
              />
              <Text style={[styles.infostyle, styles.Position]}>
                Last Name
              </Text>
            </View>
          <View style={[styles.inputNumber3, styles.Position]}>
            <TextInput
              style={[styles.inputNumberChild, styles.Position]}
              placeholder="Enter Age"
              mode="contained"
              value={formData.age}
              onChangeText={(text) => handleChange("age", text)}
              theme={{ colors: { background: "rgba(168, 156, 255, 0.08)" } }}
              />
            <Text style={[styles.infostyle, styles.Position]}>Age</Text>
          </View>

          
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameButtonBtn: {
    fontSize: 18,
    fontWeight: "600",
    fontFamily: "Poppins-SemiBold",
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
  Position: {
    left: 10,
    width: 315,
    position: "absolute",
  },

  iconLayout: {
    width: 45,
    height: 45,
  },
  createYourAccount: {
    fontSize: FontSize.size_6xl,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.colorSlateblue,
    width: 292,
    height: 51,
    textAlign: "left",
    lineHeight: 50,
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
    top: 550,
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
  phoneNumber: {
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_base,
    top: 0,
    color: Color.colorBlack,
    left: 0,
    width: 315,
    position: "absolute",
  },
  inputNumber: {
    top: 341,
    height: 80,
  },
  infostyle: {
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_base,
    top: 0,
  },
  inputNumber2: {
    top: 135,
    height: 80,
  },
  inputNumber1: {
    top: 38,
    width: 318,
    height: 176,
    left: 30,
    position: "absolute",
  },
  inputNumber3: {
    top: 237,
    left: 33,
    height: 81,
  },
  phoneLoginIcon: {
    borderRadius: 6,
  },
  googleActionloginfirebaseIcon: {
    marginLeft: 22,
  },
  frame1: {
    top: 614,
    left: 88,
    width: 184,
    flexDirection: "row",
    height: 45,
    position: "absolute",
    alignItems: "center",
    overflow: "hidden",
  },
  frame2: {
    top: 584,
    left: 150,
    width: 82,
    height: 30,
    alignItems: "flex-end",
    position: "absolute",
    justifyContent: "center",
    overflow: "hidden",
  },
  orContinueWith: {
    top: 568,
    left: 125,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.poppinsRegular,
    width: 122,
    height: 32,
    position: "absolute",
    color: Color.colorBlack,
    lineHeight: 50,
  },
  container: {
    height: 683,
    width: 360,
    overflow: "hidden",
  },
  theFormInputs: {
    height: 800,
    paddingTop: 80,
    width: 360,
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  signin1: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default Signin1;