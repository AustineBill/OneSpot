import React, { useState } from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity, Platform } from "react-native";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from 'expo-image-picker';
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const ChangeProfile = () => {
  const navigation = useNavigation();
  const [profileImage, setProfileImage] = useState(require("../assets/profile-img1.png"));

  const handleBack = () => {
    navigation.navigate("Profile");
  };

  const handleAttach = async () => {
    if (Platform.OS !== 'web') {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
        return;
      }
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setProfileImage({ uri: result.assets[0].uri });
    }
  };

  return (
    <View style={styles.resetnumPage}>
      <View style={styles.containerContaineraspectra}>
        <TouchableOpacity onPress={handleBack} style={styles.arrowContainer}>
          <Image
            style={[styles.frameIcon, styles.framePosition]}
            contentFit="cover"
            source={require("../assets/frame3.png")}
          />
        </TouchableOpacity>
        <View style={styles.frame}>
          <Text style={styles.resetPhoneNumber}>Change Profile</Text>
        </View>

        <View>
          <Image
            style={styles.profileImgIcon}
            contentFit="cover"
            source={profileImage}
          />
        </View>

        <Button
          style={styles.frame2}
          mode="contained"
          onPress={handleAttach}
          contentStyle={styles.frameBtn2}>
          ATTACH
        </Button>

        <Button
          style={styles.frame1}
          mode="contained"
          labelStyle={styles.frameBtn}
          onPress={handleBack}
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
  frameBtn2: {
    borderRadius: 15,
    height: 40,
    width: 200,
  },
  frameIcon: {
    top: 60,
    left: 11,
    width: 315,
    height: 34,
  },
  profileImgIcon: {
    width: 200,
    height: 200,
    borderRadius: 100, // To make it a circle
    alignItems: "center",
    position: "absolute",
    top: 250,
    marginLeft: 80,
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
  frame1: {
    top: 700,
    left: 23,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
  frame2: {
    top: 500,
    marginTop: 20,
    marginLeft: 80,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
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

export default ChangeProfile;
