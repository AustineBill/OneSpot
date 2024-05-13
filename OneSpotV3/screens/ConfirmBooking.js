import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const ConfirmBooking = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.confirmBooking}>
      <View style={styles.passwordReset}>
        <View style={styles.containerContaineraspectra}>
          <Pressable
            style={[styles.containerContaineraspectraInner, styles.logFlexBox]}
            onPress={() => navigation.navigate("PayMethodPage")}
          >
            <View style={styles.logFlexBox}>
              <View
                style={[styles.logInActionresetPassword, styles.logFlexBox]}
              >
                <Text style={styles.confirmBooking1}>Confirm Booking</Text>
              </View>
            </View>
          </Pressable>
          <Pressable
            style={styles.frame}
            onPress={() => navigation.navigate("CarBookSlot")}
          >
            <Text style={styles.bookingDetails}>Booking Details</Text>
            <Image
              style={styles.vectorIcon}
              contentFit="cover"
              source={require("../assets/vector.png")}
            />
          </Pressable>
          <View style={styles.frame1}>
            <Text style={styles.hondaCivic}>Honda Civic</Text>
          </View>
          <View style={[styles.frame2, styles.frame2Position]}>
            <View style={[styles.email, styles.emailPosition]}>
              <View style={[styles.emailChild, styles.emailLayout1]} />
              <Text style={styles.enterYourEmailContainer}>
                <Text style={styles.enterYourEmailContainer1}>
                  <Text style={styles.time}>Time</Text>
                  <Text style={styles.text}>{` `}</Text>
                </Text>
              </Text>
            </View>
            <View style={[styles.email1, styles.emailLayout]}>
              <View style={[styles.emailItem, styles.emailChildBg]} />
              <Text style={[styles.enterYourEmail, styles.enterTypo]}>
                Floor Location
              </Text>
            </View>
            <View style={[styles.email2, styles.emailLayout]}>
              <Image
                style={[styles.emailInner, styles.emailLayout1]}
                contentFit="cover"
                source={require("../assets/rectangle-72.png")}
              />
              <Text style={[styles.enterYourEmailContainer2, styles.enterTypo]}>
                <Text style={styles.enterYourEmailContainer1}>
                  <Text style={styles.time}>Total</Text>
                  <Text style={styles.text}>{` `}</Text>
                </Text>
              </Text>
            </View>
            <View style={[styles.email3, styles.frame2Position]}>
              <View style={[styles.rectangleView, styles.emailChildBg]} />
              <Text style={[styles.enterYourEmail1, styles.enterTypo1]}>
                How long do you stay?
              </Text>
            </View>
            <View style={[styles.email4, styles.emailPosition]}>
              <View style={[styles.emailChild1, styles.emailChildBg]} />
              <Text style={[styles.enterYourEmail, styles.enterTypo]}>
                Select Slot
              </Text>
            </View>
            <Text style={[styles.hours, styles.b3Typo]}>
              <Text style={styles.hours1}>3 hours</Text>
              <Text style={styles.text2}>{` `}</Text>
            </Text>
            <Text style={[styles.text3, styles.amTypo]}>40.00</Text>
            <Text style={styles.ndFloor}>2nd Floor</Text>
            <Text style={[styles.am, styles.amTypo]}>11:00 am</Text>
            <Text style={[styles.b3, styles.b3Typo]}>B-3</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  logFlexBox: {
    width: 309,
    justifyContent: "center",
    alignItems: "center",
  },
  frame2Position: {
    left: 39,
    position: "absolute",
  },
  emailPosition: {
    left: 40,
    width: 235,
  },
  emailLayout1: {
    width: 234,
    borderRadius: 6,
    position: "absolute",
  },
  emailLayout: {
    height: 83,
    position: "absolute",
  },
  emailChildBg: {
    backgroundColor: Color.colorGray_100,
    height: 44,
  },
  enterTypo: {
    height: 48,
    width: 192,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    left: 0,
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    top: 0,
    position: "absolute",
  },
  enterTypo1: {
    fontFamily: FontFamily.manropeMedium,
    color: Color.colorGray_300,
  },
  b3Typo: {
    color: Color.colorAliceblue_100,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    textAlign: "center",
    position: "absolute",
  },
  amTypo: {
    height: 46,
    left: 14,
    width: 292,
    fontSize: FontSize.size_lg,
    color: Color.colorAliceblue_100,
    fontFamily: FontFamily.manropeSemiBold,
    fontWeight: "600",
    textAlign: "center",
    position: "absolute",
  },
  confirmBooking1: {
    fontSize: FontSize.size_base_1,
    color: Color.colorBlack,
    width: 224,
    height: 45,
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
    justifyContent: "center",
    alignItems: "center",
  },
  logInActionresetPassword: {
    borderRadius: Border.br_69xl_7,
    backgroundColor: Color.colorLightsteelblue_200,
    height: 58,
  },
  containerContaineraspectraInner: {
    top: 704,
    left: 36,
    position: "absolute",
  },
  bookingDetails: {
    left: 180,
    alignItems: "flex-end",
    width: 206,
    height: 31,
    textAlign: "left",
    color: Color.colorWhite,
    fontSize: FontSize.size_xl,
    display: "flex",
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
    top: 0,
    position: "absolute",
  },
  vectorIcon: {
    height: "45.15%",
    width: "6.2%",
    top: "36.12%",
    right: "93.8%",
    bottom: "18.74%",
    left: "0%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  frame: {
    top: 14,
    left: 28,
    width: 371,
    height: 44,
    position: "absolute",
    overflow: "hidden",
  },
  hondaCivic: {
    top: 22,
    fontSize: FontSize.size_5xl,
    color: "#dae4ff",
    height: 36,
    width: 156,
    fontFamily: FontFamily.manropeSemiBold,
    fontWeight: "600",
    left: 0,
    textAlign: "center",
    position: "absolute",
  },
  frame1: {
    top: 61,
    left: 25,
    width: 170,
    height: 80,
    position: "absolute",
    overflow: "hidden",
  },
  emailChild: {
    top: 23,
    left: 1,
    backgroundColor: Color.colorGray_100,
    height: 44,
  },
  time: {
    color: Color.colorGray_300,
  },
  text: {
    color: Color.colorWhite,
  },
  enterYourEmailContainer1: {
    width: "100%",
  },
  enterYourEmailContainer: {
    width: 192,
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    left: 0,
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    top: 0,
    position: "absolute",
  },
  email: {
    top: 315,
    height: 67,
    width: 235,
    position: "absolute",
  },
  emailItem: {
    top: 39,
    borderRadius: 6,
    backgroundColor: Color.colorGray_100,
    width: 235,
    left: 0,
    position: "absolute",
  },
  enterYourEmail: {
    color: Color.colorGray_300,
    fontFamily: FontFamily.manropeMedium,
  },
  email1: {
    top: 209,
    width: 235,
    left: 40,
  },
  emailInner: {
    top: 40,
    left: 2,
    height: 43,
  },
  enterYourEmailContainer2: {
    fontFamily: FontFamily.poppinsMedium,
  },
  email2: {
    top: 388,
    left: 41,
    width: 236,
  },
  rectangleView: {
    top: 31,
    borderRadius: 6,
    backgroundColor: Color.colorGray_100,
    width: 235,
    left: 0,
    position: "absolute",
  },
  enterYourEmail1: {
    color: Color.colorGray_300,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.manropeMedium,
    width: 156,
    left: 0,
    height: 31,
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    top: 0,
    position: "absolute",
  },
  email3: {
    top: 32,
    height: 75,
    width: 235,
  },
  emailChild1: {
    top: 42,
    borderRadius: 6,
    backgroundColor: Color.colorGray_100,
    width: 235,
    left: 0,
    position: "absolute",
  },
  email4: {
    top: 115,
    height: 86,
    width: 235,
    position: "absolute",
  },
  hours1: {
    fontSize: FontSize.size_lg,
  },
  text2: {
    fontSize: FontSize.size_xl,
  },
  hours: {
    top: 68,
    left: 106,
    width: 96,
    height: 32,
  },
  text3: {
    top: 436,
  },
  ndFloor: {
    top: 257,
    left: 8,
    width: 292,
    fontSize: FontSize.size_lg,
    color: Color.colorAliceblue_100,
    fontFamily: FontFamily.manropeSemiBold,
    fontWeight: "600",
    textAlign: "center",
    position: "absolute",
  },
  am: {
    top: 346,
  },
  b3: {
    top: 166,
    left: 124,
    width: 61,
    fontSize: FontSize.size_lg,
    height: 31,
  },
  frame2: {
    top: 183,
    backgroundColor: Color.colorLightgray,
    width: 315,
    height: 492,
    overflow: "hidden",
  },
  containerContaineraspectra: {
    height: 812,
    width: 375,
    overflow: "hidden",
  },
  passwordReset: {
    left: -15,
    backgroundColor: Color.colorGray_200,
    justifyContent: "center",
    alignItems: "center",
    top: 0,
    width: 375,
    position: "absolute",
    overflow: "hidden",
  },
  confirmBooking: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default ConfirmBooking;
