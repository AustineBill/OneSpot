import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const TransactionPage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.transactionPage}>
      <View style={styles.framePosition3}>
        <View style={[styles.tabsPage, styles.framePosition3]}>
          <Pressable
            style={[styles.rectangleParent, styles.frameChildLayout]}
            onPress={() => navigation.navigate("VerificationPage")}
          >
            <View style={[styles.frameChild, styles.frameChildLayout]} />
            <Text style={styles.confirm}>
              <Text style={styles.confirm1}>CONFIRM</Text>
              <Text style={styles.text}>{` `}</Text>
            </Text>
          </Pressable>
          <Image
            style={[styles.iCvv1, styles.frameLayout]}
            contentFit="cover"
            source={require("../assets/i--cvv-1.png")}
          />
          <View style={[styles.frame1, styles.framePosition2]}>
            <Text style={styles.securityGuaranteed}>{`SECURITY 
GUARANTEED`}</Text>
            <View style={styles.secGua1} />
            <Pressable
              style={styles.backActiongoback}
              onPress={() => navigation.navigate("PayMethodPage")}
            >
              <Image
                style={styles.icon}
                contentFit="cover"
                source={require("../assets/back-actiongoback.png")}
              />
            </Pressable>
            <Image
              style={styles.image27Icon}
              contentFit="cover"
              source={require("../assets/image-27.png")}
            />
          </View>
          <View style={[styles.frame2, styles.frame2Layout]}>
            <View style={[styles.inputDate, styles.frame2Layout]}>
              <Image
                style={styles.inputDateChild}
                contentFit="cover"
                source={require("../assets/rectangle-84.png")}
              />
              <Text
                style={[styles.cardNumber, styles.cardTypo]}
              >{`Card Number `}</Text>
            </View>
            <Text style={[styles.nameOnCard, styles.cardTypo]}>
              Name on Card
            </Text>
            <Image
              style={[styles.frameItem, styles.framePosition1]}
              contentFit="cover"
              source={require("../assets/rectangle-127.png")}
            />
            <Image
              style={[styles.frameInner, styles.framePosition1]}
              contentFit="cover"
              source={require("../assets/rectangle-129.png")}
            />
          </View>
        </View>
        <View style={[styles.frame3, styles.frameLayout]}>
          <Text style={[styles.expirationMmyy, styles.cardTypo]}>
            Expiration (MM/YY)
          </Text>
        </View>
      </View>
      <View style={[styles.frame4, styles.framePosition]}>
        <View style={[styles.frame5, styles.frameLayout]}>
          <Text style={[styles.cvv, styles.cardTypo]}>CVV</Text>
        </View>
        <Image
          style={[styles.frameIcon, styles.frameIconPosition]}
          contentFit="cover"
          source={require("../assets/frame5.png")}
        />
        <Image
          style={[styles.frameIcon1, styles.frameIconPosition]}
          contentFit="cover"
          source={require("../assets/frame6.png")}
        />
        <Image
          style={[styles.frameIcon2, styles.framePosition]}
          contentFit="cover"
          source={require("../assets/frame7.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  framePosition3: {
    height: 812,
    width: 360,
    left: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  frameChildLayout: {
    height: 59,
    width: 328,
    position: "absolute",
  },
  frameLayout: {
    height: 19,
    position: "absolute",
  },
  framePosition2: {
    left: 18,
    overflow: "hidden",
  },
  frame2Layout: {
    width: 319,
    position: "absolute",
  },
  cardTypo: {
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    textAlign: "left",
    position: "absolute",
  },
  framePosition1: {
    left: 2,
    width: 315,
    position: "absolute",
  },
  framePosition: {
    width: 337,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  frameIconPosition: {
    height: 40,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  frameChild: {
    shadowColor: "rgba(96, 80, 179, 0.3)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 17.52,
    elevation: 17.52,
    shadowOpacity: 1,
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorMidnightblue,
    left: 0,
    top: 0,
  },
  confirm1: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  text: {
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
  },
  confirm: {
    top: "33.9%",
    left: "36.62%",
    color: Color.colorWhite,
    textAlign: "center",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  rectangleParent: {
    top: 692,
    left: 19,
  },
  iCvv1: {
    top: 342,
    left: 312,
    width: 21,
  },
  securityGuaranteed: {
    left: 234,
    fontFamily: FontFamily.ralewayBold,
    color: "#00c936",
    width: 96,
    height: 24,
    textAlign: "left",
    fontSize: FontSize.size_sm,
    fontWeight: "700",
    top: 0,
    position: "absolute",
  },
  secGua1: {
    top: 24,
    left: 162,
    width: 43,
    height: 45,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  backActiongoback: {
    top: 1,
    width: 34,
    height: 34,
    left: 0,
    position: "absolute",
  },
  image27Icon: {
    top: 3,
    left: 201,
    width: 33,
    height: 26,
    position: "absolute",
  },
  frame1: {
    top: 21,
    width: 330,
    height: 69,
    position: "absolute",
  },
  inputDateChild: {
    top: 120,
    left: 4,
    borderRadius: Border.br_3xs,
    height: 52,
    width: 315,
    position: "absolute",
  },
  cardNumber: {
    width: 315,
    fontSize: FontSize.size_base,
    left: 0,
    top: 0,
  },
  inputDate: {
    height: 172,
    left: 0,
    top: 0,
  },
  nameOnCard: {
    top: 108,
    width: 315,
    fontSize: FontSize.size_base,
    left: 0,
  },
  frameItem: {
    top: 34,
    height: 52,
  },
  frameInner: {
    top: 138,
    height: 48,
  },
  frame2: {
    top: 139,
    height: 186,
    left: 18,
    overflow: "hidden",
  },
  tabsPage: {
    backgroundColor: Color.colorWhite,
  },
  expirationMmyy: {
    left: 22,
    width: 143,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    height: 19,
    top: 0,
  },
  frame3: {
    width: 165,
    top: 343,
    left: 0,
    overflow: "hidden",
  },
  cvv: {
    left: 235,
    width: 41,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    height: 19,
    top: 0,
  },
  frame5: {
    width: 276,
    left: 0,
    top: 0,
    overflow: "hidden",
  },
  frameIcon: {
    top: 29,
    width: 165,
  },
  frameIcon1: {
    top: 127,
    width: 168,
  },
  frameIcon2: {
    top: 30,
    height: 39,
  },
  frame4: {
    height: 167,
    top: 343,
  },
  transactionPage: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default TransactionPage;
