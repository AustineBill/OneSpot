import React, { useState } from 'react';
import { Text, StyleSheet, View, Alert } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const SignIn = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { firstName, lastName, age, phoneNumber } = route.params;
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async () => {
    const { username, password, confirmPassword } = formData;

    if (!username || !password || !confirmPassword) {
      Alert.alert("All fields are required");
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Password and Confirm Password do not match");
      return;
    }

    navigation.navigate('TAA', { firstName, lastName, age, phoneNumber, username, password });
  };

  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <View style={styles.signIn}>
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
              placeholder="Enter Username"
              mode="contained"
              onChangeText={(text) => handleChange("username", text)}
              theme={{ colors: { background: "rgba(168, 156, 255, 0.08)" } }}
            />
            <Text style={[styles.phoneNumber, styles.Position]}>
              Username
            </Text>
          </View>

          <View style={[styles.inputNumber1, styles.Position]}>
            <TextInput
              style={[styles.inputNumberChild, styles.Position]}
              placeholder="Enter Password"
              mode="contained"
              secureTextEntry
              onChangeText={(text) => handleChange("password", text)}
              theme={{ colors: { background: "rgba(168, 156, 255, 0.08)" } }}
            />
            <Text style={[styles.infostyle, styles.Position]}>
              Password
            </Text>
          </View>

          <View style={[styles.inputNumber2, styles.Position]}>
            <TextInput
              style={[styles.inputNumberChild, styles.Position]}
              placeholder="Confirm Password"
              mode="contained"
              secureTextEntry
              onChangeText={(text) => handleChange("confirmPassword", text)}
              theme={{ colors: { background: "rgba(168, 156, 255, 0.08)" } }}
            />
            <Text style={[styles.infostyle, styles.Position]}>
              Confirm Password
            </Text>
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
  Position: {
    left: 10,
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
  infostyle: {
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_base,
    top: 0,
  },
  signIn: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  theFormInputs: {
    height: 800,
    paddingTop: 80,
    width: 360,
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
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
  container: {
    height: 683,
    width: 360,
    overflow: "hidden",
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
  inputNumber: {
    top: 341,
    height: 80,
  },
  inputNumber1: {
    top: 38,
    width: 318,
    height: 176,
    left: 30,
    position: "absolute",
  },
  inputNumber2: {
    top: 135,
    height: 80,
  },
});

export default SignIn;
