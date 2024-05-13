import * as React from "react";
import { Image, TextInput } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";


const ResetNumPage = () => {
  const navigation = useNavigation();
  const [fname, lastname, Age, setFirstName, setLastName,setAge ] = React.useState("");

  const handleNext = () => {
    navigation.navigate("Profile");
  };

  return (
    <View style={styles.resetnumPage}>
      <View style={styles.containerContaineraspectra}>
        <Image
          style={[styles.frameIcon, styles.framePosition]}
          contentFit="contained"
          onPress={handleNext}
          source={require("../assets/frame3.png")}
        />


        <View style={styles.frame}>
          <Text style={styles.EditProfile}>Edit Profile</Text>
        </View>

      <TextInput
          style={styles.textInput}
          placeholder="Enter New First Name"
          value={fname}
          onChangeText={setFirstName}
        />
        <Text style={[styles.firsttext, styles.textPosition]}>
          First Name
        </Text>

        
        <TextInput
          style={styles.textInput1}
          placeholder="Enter New Last Name"
          value={lastname}
          onChangeText={setLastName}
        />

        <Text style={[styles.secondtext, styles.textPosition]}>
          Last Name
        </Text>

        <TextInput
          style={styles.textInput2}
          placeholder="Enter New Age"
          value={Age}
          onChangeText={setAge}
        />

        <Text style={[styles.thirdtext, styles.textPosition]}>
          Age
        </Text>

          <Button
          style={[styles.frame1, styles.framePosition]}
          mode="contained"
          labelStyle={styles.frameBtn}
          onPress={handleNext}
          contentStyle={styles.frameBtn1}>
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

  textInput1: {
    height: 50,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 10,
    marginBottom: 10,
    top: 300,
  },
  textInput2: {
    height: 50,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 10,
    marginBottom: 10,
    top: 350,
  },
  frameIcon: {
    top: 60,
    left: 11,
    width: 315,
    height: 34,
  },
  EditProfile: {
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
 
  frame1: {
    top: 600,
    left: 23,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },

  thirdtext: {
    top: 430,
    left: 10,
  },
  secondtext: {
    top: 330,
    left: 10,
  },
  firsttext: {
    top: 220,
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
