import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const LoginPage = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.loginPage}
      onPress={() => navigation.navigate("BottomTabsRoot", { screen: "" })}
    >
      <View style={styles.loginPageloginWrapper}>
        <View style={[styles.loginPagelogin, styles.frameIconPosition]}>
          <View
            style={[
              styles.containerContaineraspectra,
              styles.frameIconPosition,
            ]}
          >
            <Text style={styles.forgotPassword}>Forgot password?</Text>
            <Image
              style={[styles.frameIcon, styles.frameIconPosition]}
              contentFit="cover"
              source={require("../assets/frame.png")}
            />
            <Text style={styles.login}>Login</Text>
            <View style={styles.frame} />
            <View style={styles.frame1} />
            <View style={[styles.frame2, styles.frameFlexBox]}>
              <Text
                style={[styles.emailInputComponentinputE, styles.inputFlexBox]}
              >
                Email Account
              </Text>
            </View>
            <View style={[styles.frame3, styles.frameFlexBox]}>
              <Text
                style={[styles.passwordInputComponentinpu, styles.inputFlexBox]}
              >
                Password
              </Text>
            </View>
            <Text
              style={[styles.orLoginWith, styles.orLoginWithClr]}
            >{`or login with `}</Text>
            <View style={styles.frame4}>
              <Image
                style={[styles.phoneLoginIcon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/phone-login.png")}
              />
              <Image
                style={[
                  styles.googleActionloginfirebaseIcon,
                  styles.iconLayout,
                ]}
                contentFit="cover"
                source={require("../assets/google-actionloginfirebasegoogle.png")}
              />
              <Image
                style={[
                  styles.googleActionloginfirebaseIcon,
                  styles.iconLayout,
                ]}
                contentFit="cover"
                source={require("../assets/apple-actionloginfirebaseappleignoreandroid.png")}
              />
            </View>
            <Text style={[styles.dontHaveAnContainer, styles.orLoginWithClr]}>
              <Text style={styles.dontHaveAn}>Don’t have an account?</Text>
              <Text style={styles.signUp}>{` Sign up `}</Text>
            </Text>
            <View style={[styles.doneWrapper, styles.frameFlexBox]}>
              <Text style={styles.done}>{`Sign in `}</Text>
            </View>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  frameIconPosition: {
    position: "absolute",
    overflow: "hidden",
  },
  frameFlexBox: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
  inputFlexBox: {
    display: "flex",
    alignItems: "center",
  },
  orLoginWithClr: {
    color: Color.colorBlack,
    textAlign: "center",
    position: "absolute",
  },
  iconLayout: {
    width: 45,
    height: 45,
  },
  forgotPassword: {
    top: 406,
    left: 49,
    fontSize: FontSize.size_xs,
    color: Color.colorMidnightblue,
    height: 46,
    width: 292,
    textAlign: "center",
    fontFamily: FontFamily.manropeSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  frameIcon: {
    top: 29,
    left: 30,
    height: 34,
    width: 315,
  },
  login: {
    top: 203,
    fontSize: FontSize.size_16xl_5,
    fontWeight: "700",
    fontFamily: FontFamily.manropeBold,
    color: "#001927",
    textAlign: "left",
    left: 29,
    position: "absolute",
  },
  frame: {
    top: 259,
    width: 317,
    height: 22,
    justifyContent: "center",
    left: 29,
    position: "absolute",
    overflow: "hidden",
  },
  frame1: {
    top: 281,
    left: 27,
    width: 329,
    alignItems: "flex-end",
    height: 53,
    justifyContent: "center",
    position: "absolute",
    overflow: "hidden",
  },
  emailInputComponentinputE: {
    color: "rgba(50, 45, 45, 0.37)",
    fontFamily: FontFamily.manropeRegular,
    fontSize: FontSize.size_base_1,
    display: "flex",
    height: 53,
    textAlign: "left",
    width: 292,
  },
  frame2: {
    top: 270,
    backgroundColor: "#f3f6fb",
    width: 323,
    borderRadius: 9,
    left: 35,
    alignItems: "center",
    overflow: "hidden",
  },
  passwordInputComponentinpu: {
    color: "rgba(51, 49, 49, 0.33)",
    fontFamily: FontFamily.manropeRegular,
    fontSize: FontSize.size_base_1,
    display: "flex",
    height: 53,
    textAlign: "left",
    width: 292,
  },
  frame3: {
    top: 342,
    backgroundColor: "#f2f6fb",
    width: 323,
    borderRadius: 9,
    left: 35,
    alignItems: "center",
    overflow: "hidden",
  },
  orLoginWith: {
    top: 551,
    left: 143,
    fontSize: FontSize.size_smi,
    fontWeight: "800",
    fontFamily: FontFamily.manropeExtraBold,
    width: 106,
    height: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  phoneLoginIcon: {
    borderRadius: 6,
  },
  googleActionloginfirebaseIcon: {
    marginLeft: 22,
  },
  frame4: {
    top: 591,
    left: 104,
    width: 184,
    height: 45,
    alignItems: "center",
    position: "absolute",
    flexDirection: "row",
    overflow: "hidden",
  },
  dontHaveAn: {
    fontFamily: FontFamily.manropeRegular,
  },
  signUp: {
    fontFamily: FontFamily.manropeSemiBold,
    fontWeight: "600",
  },
  dontHaveAnContainer: {
    top: 776,
    left: 83,
    fontSize: FontSize.size_sm,
    width: 222,
    height: 23,
  },
  done: {
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.colorWhite,
    width: 315,
    textAlign: "center",
    fontWeight: "600",
  },
  doneWrapper: {
    top: 447,
    left: 40,
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorMidnightblue,
    height: 51,
    width: 315,
  },
  containerContaineraspectra: {
    top: -12,
    left: -18,
    width: 375,
    height: 812,
  },
  loginPagelogin: {
    top: 0,
    left: 0,
    backgroundColor: Color.colorLightsteelblue_100,
    width: 357,
    height: 800,
  },
  loginPageloginWrapper: {
    width: 360,
    height: 800,
  },
  loginPage: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    flexDirection: "row",
    overflow: "hidden",
    height: 800,
  },
});

export default LoginPage;
