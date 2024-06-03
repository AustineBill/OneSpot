
import { Text, StyleSheet, View} from "react-native";
import { Button } from "react-native-paper";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";
import { TextInput } from "react-native";
import React, { useState } from 'react';

import axios from 'axios';
import { TouchableOpacity } from "react-native-gesture-handler";

const LoginPage = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [password, setPass] = useState("");

  const handleSignUp = () => {
    navigation.navigate("Signin1");
  };

  const handlePass = () => {
    navigation.navigate("ForgotPassPage");
  };

  const handleNext = async () => {
    if (username !== "" && password !== "") {
      try {
        const response = await axios.post('http://192.168.1.6/onespot_api/login.php', {
          username,
          password: password
        });

        if (response.data.success) {
          navigation.navigate("BottomTabsRoot", { username }); 
        } else {
          alert(response.data.message);
        }
        
      } catch (error) {
        console.error(error);
        alert("An error occurred. Please try again.");
      }
    } else {
      alert("Both username and password are required.");
    }
  };


  return (
    <View style={styles.loginPage}>
      <View style={styles.loginPageloginWrapper}> 
        <TextInput
          style={styles.textInput}
          placeholder="Enter Username"
          value={username}
          onChangeText={setUsername}
          theme={{ colors: { background: "rgba(168, 156, 255, 0.08)" } }}
        />
        <Text style={[styles.userfield, styles.textPosition]}>
          Username
        </Text>
        <TextInput
          style={styles.textCode}
          placeholder="Enter Password"
          value={password}
          onChangeText={setPass}
          secureTextEntry
          theme={{ colors: { background: "rgba(168, 156, 255, 0.08)" } }}
        />
        <Text style={[styles.passfield, styles.textPosition]}>
          Password
        </Text>
          
       
        <Text style={styles.forgotPassword} onPress={handlePass} >Forgot password?</Text>
        
        <Text style={styles.dontHaveAnContainer}> Don't have an account?
          <Text style={styles.signUp} onPress={handleSignUp} > Sign Up </Text>
        </Text>

          <Button
          style={styles.doneWrapper}
          mode="contained"
          labelStyle={styles.frameBtn}
          onPress={handleNext}
          contentStyle={styles.frameBtn1}>
          Log in
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
  userfield: {
    top: 220,
    left: 10,
  },
  passfield: {
    top: 330,
    left: 10,
  },
  textPosition: {
    width: 315,
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "600",
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  textInput: {
    height: 50,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 6,
    paddingHorizontal: 10,
    marginBottom: 10,
    top: 250,
  },

  textCode: {
    height: 50,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 6,
    paddingHorizontal: 10,
    marginBottom: 10,
    top: 300,
  },
  forgotPassword: {
    top: 430,
    left: 30,
    fontSize: FontSize.size_mid,
    color: Color.colorMidnightblue,
    height: 46,
    width: 292,
    textAlign: "center",
    fontFamily: FontFamily.manropeSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  frameIcon: {
    bottom: 30,
    left: 10,
    height: 40,
    width: 40,
  },
  signUp: {
    fontFamily: FontFamily.manropeSemiBold,
    fontWeight: "600",
  },
  dontHaveAnContainer: {
    top: 600,
    left: 50,
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
    width: 300,
    height: 23,
    fontFamily: FontFamily.manropeRegular,
  },
  done: {
    top: 10,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.colorWhite,
    width: 315,
    textAlign: "center",
    fontWeight: "600",
  },
  doneWrapper: {
    top: 450,
    left: 20,
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorMidnightblue,
    height: 51,
    width: 315,
  },
  loginPageloginWrapper: {
    width: 360,
    height: 800,
  },
  loginPage: {
    backgroundColor: Color.colorLightsteelblue_100,
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    
  },
});

export default LoginPage;


