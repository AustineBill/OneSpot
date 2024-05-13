import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";
import * as Font from 'expo-font';


const Signin1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.signin1}>
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
            onPress={() => navigation.navigate("SignIn2")}
            contentStyle={styles.frameButtonBtn1}
          >
            Next
          </Button>
          
          <View style={[styles.inputNumber, styles.Position]}>
            <TextInput
              style={[styles.inputNumberChild, styles.Position]}
              placeholder="Enter Phone Number"
              mode="contained"
              theme={{ colors: { background: "rgba(168, 156, 255, 0.08)" } }}
            />
            <Text style={[styles.phoneNumber, styles.Position]}>
              Phone Number
            </Text>
          </View>
          <View style={[styles.inputNumber1, styles.Position]}>
            <TextInput
              style={[styles.inputNumberChild, styles.Position]}
              placeholder="First Name"
              mode="contained"
              theme={{ colors: { background: "rgba(168, 156, 255, 0.08)" } }}
            />
            <Text style={[styles.infostyle, styles.Position]}>
              First Name
            </Text>
            
            <View style={[styles.inputNumber2, styles.Position]}>
              <TextInput
                style={[styles.inputNumberChild, styles.Position]}
                placeholder="Last Name"
                mode="contained"
                secureTextEntry
                theme={{ colors: { background: "rgba(168, 156, 255, 0.08)" } }}
              />
              <Text style={[styles.infostyle, styles.Position]}>
                Last Name
              </Text>
            </View>
          </View>
          <View style={[styles.inputNumber3, styles.Position]}>
            <TextInput
              style={[styles.inputNumberChild, styles.Position]}
              placeholder="Confirm Password"
              mode="contained"
              secureTextEntry
              theme={{ colors: { background: "rgba(168, 156, 255, 0.08)" } }}
              />
            <Text style={[styles.infostyle, styles.Position]}>Age</Text>
          </View>
          <View style={styles.frame1}>
            <Image
              style={[styles.phoneLoginIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/phone-login1.png")}
            />
            <Image
              style={[styles.googleActionloginfirebaseIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/google-actionloginfirebasegoogle1.png")}
            />
            <Image
              style={[styles.googleActionloginfirebaseIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/apple-actionloginfirebaseappleignoreandroid1.png")}
            />
          </View>
          <View style={styles.frame2} />
          <Text
            style={[styles.orContinueWith, styles.Position]}
          >{`or continue with `}</Text>
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
    left: 3,
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
    top: 478,
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
    height: 81,
    left: 30,
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
    top: 95,
    height: 81,
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
    paddingTop: 38,
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