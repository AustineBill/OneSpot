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
          <Text style={styles.welcomeTo}>Welcome to</Text>
          <Text style={styles.onespot}> OneSpot</Text>
      </Text>

      <Image
        style={styles.roxio1Icon}
        contentFit="cover"
        source={require("../assets/roxio-1.png")}
      />
      
      <View style={styles.rectangleParent}>
        <Button
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
        Login="Login"
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
    height: 55,
    width: 320,
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
 
  welcomeToOnespotContainer: {
    top: 479,
    left: 50,
    fontSize: 29,
    textAlign: "center",
    display: "flex",
    alignItems: "flex-end",
    color: Color.colorBlack,
    position: "absolute",
  },
  roxio1Icon: {
    width: 420,
    height: 450,
    position: "absolute",
    justifyContent: "center",
  },
 
  getStarted: {
    fontSize: FontSize.size_lg,
    color: Color.colorWhite,
    height: 31,
    textAlign: "center",
    width: 154,
  },
  rectangleParent: {
    top: 580,
    left: 25,
    width: 300,
    height: 58,
    marginLeft: 20,
    
    position: "absolute",
  },
  alreadyHaveAn: {
    fontFamily: FontFamily.poppinsRegular,
  },
  text: {
    fontSize: FontSize.size_base,
    width: 325,
    height: 37,
    marginBottom: 30,
    marginLeft: 20,
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
    height: "100%",
    overflow: "hidden",
    width: "100%",
    alignItems: "center",
  },
});

export default Startpage;
