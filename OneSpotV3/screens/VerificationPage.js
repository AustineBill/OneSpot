import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const VerificationPage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.verificationPage}>
      <View style={styles.loginCodePageloginverify}>
        <View style={[styles.frame, styles.frameLayout]}>
          <View style={[styles.container, styles.containerPosition]}>
            <Text style={styles.verificationCode}>{`Verification
Code`}</Text>
            <View style={styles.frame1}>
              <Text style={[styles.enterYourCode, styles.enterYourCodeFlexBox]}>
                Enter your code
              </Text>
            </View>
            <View style={styles.frame2} />
            <View style={styles.containerChildLayout} />
            <Pressable
              style={[
                styles.logInActionverifyPhonefi,
                styles.containerChildLayout,
              ]}
              onPress={() => navigation.navigate("ReceiptPage")}
            >
              <Text
                style={[styles.confirmPayment, styles.enterYourCodeFlexBox]}
              >{`CONFIRM PAYMENT `}</Text>
            </Pressable>
          </View>
          <Image
            style={[styles.frameIcon, styles.containerPosition]}
            contentFit="cover"
            source={require("../assets/frame4.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameLayout: {
    height: 798,
    width: 357,
  },
  containerPosition: {
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  enterYourCodeFlexBox: {
    alignItems: "center",
    display: "flex",
    color: Color.colorWhite,
    fontSize: FontSize.size_base_1,
  },
  containerChildLayout: {
    height: 58,
    marginTop: 31,
    width: 323,
  },
  verificationCode: {
    fontSize: FontSize.size_16xl_5,
    fontWeight: "700",
    fontFamily: FontFamily.manropeBold,
    color: Color.colorMidnightblue,
    width: 308,
    height: 89,
    textAlign: "left",
  },
  enterYourCode: {
    left: 31,
    fontFamily: FontFamily.manropeRegular,
    width: 292,
    height: 53,
    textAlign: "left",
    top: 0,
    position: "absolute",
    alignItems: "center",
    display: "flex",
    color: Color.colorWhite,
    fontSize: FontSize.size_base_1,
  },
  frame1: {
    borderRadius: 9,
    backgroundColor: Color.colorGray_100,
    marginTop: 31,
    height: 53,
    width: 323,
    overflow: "hidden",
  },
  frame2: {
    width: 263,
    height: 112,
    marginTop: 31,
  },
  confirmPayment: {
    fontWeight: "800",
    fontFamily: FontFamily.poppinsExtraBold,
    textAlign: "center",
    width: 250,
    height: 40,
    justifyContent: "center",
  },
  logInActionverifyPhonefi: {
    borderRadius: Border.br_69xl_7,
    backgroundColor: Color.colorMidnightblue,
    alignItems: "flex-end",
    paddingHorizontal: 24,
    paddingVertical: 0,
    justifyContent: "center",
  },
  container: {
    justifyContent: "flex-end",
    paddingLeft: Padding.p_smi,
    paddingTop: 104,
    paddingRight: 21,
    paddingBottom: 69,
    top: 0,
    height: 798,
    width: 357,
  },
  frameIcon: {
    top: 27,
    width: 47,
    height: 34,
  },
  frame: {
    overflow: "hidden",
  },
  loginCodePageloginverify: {
    backgroundColor: Color.colorLightsteelblue_100,
    width: 360,
    height: 800,
    overflow: "hidden",
  },
  verificationPage: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    overflow: "hidden",
  },
});

export default VerificationPage;
