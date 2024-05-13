import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const CarBookSlot = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.carBookSlot}>
      <View style={[styles.passwordReset, styles.passwordResetLayout]}>
        <View
          style={[
            styles.containerContaineraspectra,
            styles.passwordResetLayout,
          ]}
        >
          <View style={[styles.lineParent, styles.lineParentPosition]}>
            <View style={[styles.frameChild, styles.frameChildLayout]} />
            <View style={[styles.frameChild, styles.frameChildLayout]} />
            <View style={[styles.frameChild, styles.frameChildLayout]} />
            <View style={styles.lineView} />
            <View style={[styles.frameChild1, styles.frameChildLayout]} />
            <View style={[styles.frameChild2, styles.frameChildLayout]} />
            <Image
              style={[styles.image3Icon, styles.image3IconLayout]}
              contentFit="cover"
              source={require("../assets/image-3.png")}
            />
            <Image
              style={[styles.image4Icon, styles.image4IconPosition]}
              contentFit="cover"
              source={require("../assets/image-4.png")}
            />
            <Image
              style={[styles.image4Icon1, styles.image4IconPosition]}
              contentFit="cover"
              source={require("../assets/image-4.png")}
            />
            <Text style={styles.b9}>B-9</Text>
            <Text style={[styles.b10, styles.b10Typo]}>B-10</Text>
            <Text style={[styles.b11, styles.b10Typo]}>B-11</Text>
            <Text style={[styles.b2, styles.b2Typo]}>B-2</Text>
            <Text style={[styles.b21, styles.b2Typo]}>B-2</Text>
          </View>
          <Pressable
            style={styles.logInActionresetPasswordWrapper}
            onPress={() => navigation.navigate("ConfirmBooking")}
          >
            <View style={styles.logInActionresetPassword}>
              <Text style={styles.bookSlot}>Book Slot</Text>
            </View>
          </Pressable>
          <Image
            style={[styles.arrowBackIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/arrowback.png")}
          />
          <Text style={styles.selectParkingSlot}>Select Parking Slot</Text>
          <View
            style={[
              styles.containerContaineraspectraInner,
              styles.lineParentPosition,
            ]}
          >
            <View style={styles.lineGroup}>
              <View style={[styles.frameChild, styles.frameChildLayout]} />
              <View style={[styles.frameChild, styles.frameChildLayout]} />
              <View style={[styles.frameChild, styles.frameChildLayout]} />
              <View style={styles.lineView} />
              <Text style={[styles.b22, styles.b3Typo]}>B-2</Text>
              <Text style={[styles.b5, styles.b5Typo]}>B-5</Text>
              <Text style={[styles.b6, styles.b5Typo]}>B-6</Text>
              <Text style={[styles.b8, styles.b5Typo]}>B-8</Text>
              <Text style={[styles.b3, styles.b3Typo]}>B-3</Text>
            </View>
          </View>
          <Image
            style={[styles.vectorIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/vector.png")}
          />
        </View>
        <Image
          style={[styles.image1Icon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/image-3.png")}
        />
        <Image
          style={[styles.image2Icon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/image-3.png")}
        />
        <View style={[styles.passwordResetChild, styles.frameChildLayout]} />
        <Image
          style={[styles.image3Icon1, styles.image3IconLayout]}
          contentFit="cover"
          source={require("../assets/image-31.png")}
        />
      </View>
      <View style={[styles.carBookSlotChild, styles.carLayout]} />
      <Text style={[styles.enterFloor, styles.enterTypo]}>2nd Floor</Text>
      <View style={[styles.carBookSlotItem, styles.carLayout]} />
      <Text style={[styles.enterBlock, styles.enterTypo]}>Block B</Text>
      <View style={[styles.carBookSlotInner, styles.carPosition]} />
      <View style={[styles.carBookSlotChild1, styles.carPosition]} />
    </View>
  );
};

const styles = StyleSheet.create({
  passwordResetLayout: {
    height: 812,
    width: 375,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  lineParentPosition: {
    width: 326,
    left: 33,
    position: "absolute",
    overflow: "hidden",
  },
  frameChildLayout: {
    height: 242,
    width: 1,
    borderRightWidth: 1,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
    position: "absolute",
  },
  image3IconLayout: {
    height: 95,
    width: 47,
    position: "absolute",
  },
  image4IconPosition: {
    top: 158,
    height: 95,
    width: 47,
    position: "absolute",
  },
  b10Typo: {
    fontSize: FontSize.size_13xl,
    top: 66,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
    position: "absolute",
  },
  b2Typo: {
    top: 182,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
    fontSize: FontSize.size_16xl_5,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  b3Typo: {
    top: 58,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
    fontSize: FontSize.size_16xl_5,
    position: "absolute",
  },
  b5Typo: {
    top: 180,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
    fontSize: FontSize.size_16xl_5,
    position: "absolute",
  },
  iconPosition: {
    top: 211,
    height: 95,
    width: 47,
    position: "absolute",
  },
  carLayout: {
    height: 37,
    width: 113,
    backgroundColor: Color.colorLightsteelblue_100,
    borderRadius: 6,
    top: 85,
    position: "absolute",
  },
  enterTypo: {
    height: 53,
    width: 236,
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
    top: 77,
    alignItems: "center",
    display: "flex",
    fontSize: FontSize.size_base_1,
    textAlign: "left",
    position: "absolute",
  },
  carPosition: {
    top: 183,
    height: 242,
    width: 1,
    borderRightWidth: 1,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
    position: "absolute",
  },
  frameChild: {
    left: 87,
    top: 19,
    height: 242,
    width: 1,
    borderRightWidth: 1,
  },
  lineView: {
    top: 149,
    borderTopWidth: 1,
    width: 288,
    height: 1,
    left: 19,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
    position: "absolute",
  },
  frameChild1: {
    left: 163,
    top: 19,
    height: 242,
    width: 1,
    borderRightWidth: 1,
  },
  frameChild2: {
    left: 240,
    top: 19,
    height: 242,
    width: 1,
    borderRightWidth: 1,
  },
  image3Icon: {
    top: 38,
    left: 102,
  },
  image4Icon: {
    left: 102,
  },
  image4Icon1: {
    left: 259,
  },
  b9: {
    top: 62,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
    fontSize: FontSize.size_16xl_5,
    left: 19,
    position: "absolute",
  },
  b10: {
    left: 167,
  },
  b11: {
    left: 249,
  },
  b2: {
    left: 19,
  },
  b21: {
    left: 181,
  },
  lineParent: {
    top: 436,
    height: 260,
  },
  bookSlot: {
    top: 6,
    left: 39,
    fontFamily: FontFamily.poppinsBold,
    color: "#0c0b0b",
    textAlign: "center",
    justifyContent: "center",
    width: 224,
    height: 45,
    alignItems: "center",
    fontSize: FontSize.size_base_1,
    display: "flex",
    fontWeight: "700",
    position: "absolute",
  },
  logInActionresetPassword: {
    top: 21,
    left: -10,
    borderRadius: Border.br_69xl_7,
    backgroundColor: Color.colorLightsteelblue_200,
    width: 309,
    height: 58,
    position: "absolute",
  },
  logInActionresetPasswordWrapper: {
    top: 680,
    left: 53,
    width: 289,
    height: 81,
    position: "absolute",
  },
  arrowBackIcon: {
    height: "2.62%",
    width: "5.68%",
    top: "0.99%",
    right: "69.79%",
    bottom: "96.39%",
    left: "24.53%",
  },
  selectParkingSlot: {
    top: 25,
    left: 90,
    fontSize: FontSize.size_3xl,
    alignItems: "flex-end",
    width: 216,
    height: 36,
    display: "flex",
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
    position: "absolute",
  },
  b22: {
    left: 95,
  },
  b5: {
    left: 19,
  },
  b6: {
    left: 95,
  },
  b8: {
    left: 248,
  },
  b3: {
    left: 174,
  },
  lineGroup: {
    top: 9,
    left: 1,
    width: 317,
    height: 271,
    position: "absolute",
    overflow: "hidden",
  },
  containerContaineraspectraInner: {
    top: 167,
    height: 269,
  },
  vectorIcon: {
    height: "2.46%",
    width: "6.13%",
    top: "3.57%",
    right: "85.07%",
    bottom: "93.97%",
    left: "8.8%",
  },
  containerContaineraspectra: {
    left: 0,
  },
  image1Icon: {
    left: 67,
  },
  image2Icon: {
    left: 291,
  },
  passwordResetChild: {
    top: 195,
    left: 121,
  },
  image3Icon1: {
    top: 332,
    left: 211,
  },
  passwordReset: {
    left: -15,
    backgroundColor: Color.colorGray_200,
  },
  carBookSlotChild: {
    left: 28,
  },
  enterFloor: {
    left: 52,
    color: Color.colorBlack,
  },
  carBookSlotItem: {
    left: 212,
  },
  enterBlock: {
    left: 243,
    color: "#020202",
  },
  carBookSlotInner: {
    left: 181,
  },
  carBookSlotChild1: {
    left: 257,
  },
  carBookSlot: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default CarBookSlot;
