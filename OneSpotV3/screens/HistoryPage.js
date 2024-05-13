import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, Border, FontFamily } from "../GlobalStyles";

const HistoryPage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.historyPage}>
      <Image
        style={styles.historyPageChild}
        contentFit="cover"
        source={require("../assets/rectangle-1351.png")}
      />
      <Image
        style={[styles.historyPageItem, styles.historyPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-137.png")}
      />
      <Text style={[styles.bookingHistory, styles.confirmFlexBox]}>
        Booking History
      </Text>
      <Image
        style={styles.backActiongobackIcon}
        contentFit="cover"
        source={require("../assets/back-actiongoback.png")}
      />
      <Image
        style={[styles.historyPageInner, styles.historyPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-136.png")}
      />
      <Text style={[styles.july182023Container, styles.containerLayout]}>
        <Text style={styles.july182023Container1}>
          <Text style={styles.july182023}>{`July 18, 2023
`}</Text>
          <Text style={styles.paseoCenterParking}>{`Paseo Center Parking 
Valero St., Corner, Salcedo Village, Makati City`}</Text>
        </Text>
      </Text>
      <Text style={[styles.november252023Container, styles.containerLayout]}>
        <Text style={styles.july182023Container1}>
          <Text style={styles.july182023}>{`November 25, 2023
`}</Text>
          <Text style={styles.paseoCenterParking}>{`OZ Car Park
Amorsolo St., Manila City `}</Text>
        </Text>
      </Text>
      <Text style={[styles.january022024Container, styles.containerLayout]}>
        <Text style={styles.july182023Container1}>
          <Text style={styles.july182023}>{`January 02, 2024
`}</Text>
          <Text style={styles.paseoCenterParking}>{`One Parkade
Bonifacio High Street, Taguig City  `}</Text>
        </Text>
      </Text>
      <Image
        style={[styles.timee4Icon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/timee-2.png")}
      />
      <Image
        style={[styles.timee7Icon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/timee-2.png")}
      />
      <Image
        style={[styles.timee8Icon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/timee-2.png")}
      />
      <Image
        style={[styles.image17Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/image-15.png")}
      />
      <Image
        style={[styles.image19Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/image-15.png")}
      />
      <Image
        style={[styles.image18Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/image-15.png")}
      />
      <Image
        style={styles.timee6Icon}
        contentFit="cover"
        source={require("../assets/timee-3.png")}
      />
      <Image
        style={[styles.timee9Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/timee-3.png")}
      />
      <Image
        style={[styles.timee10Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/timee-3.png")}
      />
      <View
        style={[styles.logInActionresetPassword, styles.rectangleIconLayout]}
      >
        <Text style={[styles.confirm, styles.confirmFlexBox]}>CONFIRM</Text>
      </View>
      <Image
        style={[styles.rectangleIcon, styles.rectangleIconLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-61.png")}
      />
      <Pressable
        style={styles.bookToday}
        onPress={() => navigation.navigate("BottomTabsRoot", { screen: "" })}
      >
        <Text style={[styles.bookToday1, styles.confirmFlexBox]}>
          BOOK TODAY
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  historyPosition: {
    width: 300,
    left: 30,
    position: "absolute",
  },
  confirmFlexBox: {
    alignItems: "center",
    display: "flex",
    color: Color.colorWhite,
    fontWeight: "700",
  },
  containerLayout: {
    height: 46,
    width: 281,
    color: Color.colorBlack,
    fontSize: FontSize.size_xs,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    position: "absolute",
  },
  iconLayout1: {
    height: 13,
    width: 14,
    position: "absolute",
  },
  iconLayout: {
    height: 12,
    width: 14,
    position: "absolute",
  },
  iconPosition: {
    left: 40,
    height: 11,
    width: 12,
    position: "absolute",
  },
  rectangleIconLayout: {
    borderRadius: Border.br_69xl_7,
    position: "absolute",
  },
  historyPageChild: {
    top: 95,
    left: 19,
    width: 321,
    height: 608,
    position: "absolute",
  },
  historyPageItem: {
    top: 161,
    height: 53,
  },
  bookingHistory: {
    top: 107,
    fontSize: FontSize.size_xl,
    width: 231,
    height: 30,
    textAlign: "left",
    display: "flex",
    color: Color.colorWhite,
    fontFamily: FontFamily.nunitoSans12ptBold,
    left: 30,
    position: "absolute",
  },
  backActiongobackIcon: {
    top: 19,
    left: 11,
    width: 34,
    height: 34,
    position: "absolute",
  },
  historyPageInner: {
    top: 241,
    height: 135,
  },
  july182023: {
    fontFamily: FontFamily.nunitoSans12ptBold,
    fontWeight: "700",
  },
  paseoCenterParking: {
    fontFamily: FontFamily.nunitoSans12ptRegular,
  },
  july182023Container1: {
    width: "100%",
  },
  july182023Container: {
    left: 62,
    width: 281,
    color: Color.colorBlack,
    fontSize: FontSize.size_xs,
    top: 164,
  },
  november252023Container: {
    top: 245,
    left: 62,
    width: 281,
    color: Color.colorBlack,
    fontSize: FontSize.size_xs,
  },
  january022024Container: {
    left: 59,
    top: 326,
  },
  timee4Icon: {
    left: 38,
    top: 164,
  },
  timee7Icon: {
    left: 39,
    top: 245,
  },
  timee8Icon: {
    left: 39,
    top: 326,
  },
  image17Icon: {
    top: 181,
    left: 38,
  },
  image19Icon: {
    top: 343,
    left: 39,
  },
  image18Icon: {
    top: 262,
    left: 39,
  },
  timee6Icon: {
    top: 199,
    height: 11,
    width: 12,
    left: 39,
    position: "absolute",
  },
  timee9Icon: {
    top: 277,
  },
  timee10Icon: {
    top: 359,
  },
  confirm: {
    fontSize: FontSize.size_base_1,
    fontFamily: FontFamily.manropeBold,
    textAlign: "center",
    justifyContent: "center",
    width: 191,
    height: 38,
    display: "flex",
    color: Color.colorWhite,
  },
  logInActionresetPassword: {
    top: 700,
    left: -506,
    backgroundColor: Color.colorGray_200,
    width: 309,
    height: 58,
    justifyContent: "flex-end",
    paddingHorizontal: 58,
    paddingVertical: 10,
  },
  rectangleIcon: {
    top: 729,
    left: 216,
    width: 124,
    height: 53,
  },
  bookToday1: {
    fontSize: FontSize.size_mini,
    textDecoration: "underline",
    fontFamily: FontFamily.poppinsBold,
    width: 105,
    height: 26,
    textAlign: "left",
    display: "flex",
    color: Color.colorWhite,
  },
  bookToday: {
    left: 229,
    top: 742,
    position: "absolute",
  },
  historyPage: {
    backgroundColor: Color.colorLightgray,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default HistoryPage;
