import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize } from "../GlobalStyles";

const Startpage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.startpage}>
      <Text style={styles.welcomeToOnespotContainer}>
        <Text style={styles.welcomeToOnespotContainer1}>
          <Text style={styles.welcomeTo}>Welcome to</Text>
          <Text style={styles.onespot}> OneSpot</Text>
        </Text>
      </Text>
      <Image
        style={styles.roxio1Icon}
        contentFit="cover"
        source={require("../assets/roxio-1.png")}
      />
      <View style={styles.rectangleParent}>
        <Button
          style={[styles.frameChild, styles.framePosition]}
          uppercase={true}
          mode="contained"
          contentStyle={styles.rectangleButtonBtn}
          onPress={() => navigation.navigate("Signin1")}
        >
          <Text style={[styles.getStarted, styles.loginTypo]}>Get Started</Text>
        </Button>
        
      </View>
      <Pressable
        style={styles.alreadyHaveAnContainer}
        Logn="Login"
        onPress={() => navigation.navigate("LoginPage")}
      >
        <Text style={styles.text}>
          <Text style={styles.alreadyHaveAn}>Already have an Account?</Text>
          <Text style={styles.loginTypo}> Login</Text>
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleButtonBtn: {
    borderRadius: 15,
    height: 51,
    width: 315,
  },
  framePosition: {
    top: 20,
    position: "absolute",
  },
  loginTypo: {
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  welcomeTo: {
    fontFamily: FontFamily.manropeRegular,
  },
  onespot: {
    fontWeight: "700",
    fontFamily: FontFamily.manropeBold,
  },
  welcomeToOnespotContainer1: {
    width: "100%",
  },
  welcomeToOnespotContainer: {
    top: 479,
    left: 32,
    fontSize: 29,
    textAlign: "left",
    display: "flex",
    alignItems: "flex-end",
    width: 328,
    height: 41,
    color: Color.colorBlack,
    position: "absolute",
  },
  roxio1Icon: {
    top: -7,
    left: -18,
    width: 401,
    height: 459,
    position: "absolute",
  },
  frameChild: {
    left: 0,
  },
  getStarted: {
    fontSize: FontSize.size_lg,
    color: Color.colorWhite,
    height: 31,
    textAlign: "center",
    width: 154,
  },
  frame: {
    left: 80,
    height: 40,
    alignItems: "center",
    justifyContent: "flex-end",
    width: 154,
    overflow: "hidden",
  },
  rectangleParent: {
    top: 580,
    left: 25,
    width: 234,
    height: 58,
    position: "absolute",
  },
  alreadyHaveAn: {
    fontFamily: FontFamily.poppinsRegular,
  },
  text: {
    fontSize: FontSize.size_base,
    width: 325,
    height: 37,
    textAlign: "center",
    color: Color.colorBlack,
  },
  alreadyHaveAnContainer: {
    left: 18,
    top: 744,
    position: "absolute",
  },
  startpage: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default Startpage;
