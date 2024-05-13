import * as React from "react";
import { Image, TextInput } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";


const ResetNumPage = () => {
  const navigation = useNavigation();
  const [NewPass, ConfirmPass, setNewPassword, SetConfirmPass] = React.useState("");

  const handleNext = () => {
    navigation.navigate("Profile");
  };

  return (
    <View style={styles.resetnumPage}>
      <View style={styles.containerContaineraspectra}>
        <Image
          style={[styles.frameIcon, styles.framePosition]}
          contentFit="cover"
          source={require("../assets/frame3.png")}
        />
        <View style={styles.frame}>
          <Text style={styles.resetPhoneNumber}>Reset Password</Text>
        </View>

      <TextInput
          style={styles.textInput}
          placeholder="Enter Password"
          value={NewPass}
          onChangeText={setNewPassword}
        />
        <Text style={[styles.password, styles.textPosition]}>
          Enter New Password
        </Text>


        
        <TextInput
          style={styles.textCode}
          placeholder="Confirm Password"
          value={ConfirmPass}
          onChangeText={SetConfirmPass}
        />

        <Text style={[styles.newpass, styles.textPosition]}>
          Enter Confirm Password
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
