  import * as React from "react";
  import { Text, StyleSheet, View } from "react-native";
  import { Button, TextInput } from "react-native-paper";
  import { useNavigation } from "@react-navigation/native";
  import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

  const SignIn = () => {
    const navigation = useNavigation();

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
              onPress={() => navigation.navigate("TAA")}
              contentStyle={styles.frameButtonBtn1}
            > Next
            </Button>
            <View style={[styles.inputNumber, styles.firstNamePosition]}>
              <TextInput
                style={[styles.inputNumberChild, styles.firstNamePosition]}
                placeholder="Enter Username"
                mode="contained"
                theme={{ colors: { background: "rgba(168, 156, 255, 0.08)" } }}
              />
              <Text style={[styles.firstName, styles.firstNamePosition]}>
                Username
              </Text>
            </View>

            <View style={[styles.inputNumber1, styles.firstNamePosition]}>
              <TextInput
                style={[styles.inputNumberChild, styles.firstNamePosition]}
                placeholder="Enter Password"
                mode="contained"
                secureTextEntry
                theme={{ colors: { background: "rgba(168, 156, 255, 0.08)" } }}
              />
              <Text style={[styles.firstName, styles.firstNamePosition]}>
                Password
              </Text>
              <View style={[styles.inputNumber2, styles.firstNamePosition]}>
                <TextInput
                  style={[styles.inputNumberChild, styles.firstNamePosition]}
                  placeholder="Confirm Password"
                  mode="contained"
                  secureTextEntry
                  theme={{ colors: { background: "rgba(168, 156, 255, 0.08)" } }}
                />
                <Text style={[styles.firstName, styles.firstNamePosition]}>
                  Confirm Password
                </Text>
              </View>
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
    firstNamePosition: {
      left: 3,
      width: 315,
      position: "absolute",
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
   
    inputNumber: {
      top: 341,
      height: 81,
      left: 30,
    },
   
    firstName: {
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
  });
  export default SignIn;
