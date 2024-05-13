import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const ReceiptPage = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.receiptPage, styles.pageBg]}
      onPress={() => navigation.navigate("HistoryPage")}
    >
      <View style={[styles.tabsPage, styles.pageBg]}>
        <View style={[styles.inputDate, styles.inputLayout]}>
          <Text style={[styles.accountName, styles.timeFlexBox]}>
            Account Name
          </Text>
        </View>
        <View style={[styles.inputDate1, styles.inputLayout]}>
          <Text style={[styles.accountName, styles.timeFlexBox]}>
            Total Cost
          </Text>
        </View>
        <View style={[styles.inputDate2, styles.inputDate2Position]}>
          <Text style={[styles.accountName, styles.timeFlexBox]}>
            Location:
          </Text>
          <Text style={[styles.date, styles.timeFlexBox]}>Date:</Text>
          <Text
            style={[styles.arrivalTime, styles.timeFlexBox]}
          >{`Arrival Time: `}</Text>
          <Text
            style={[styles.departurelTime, styles.timeFlexBox]}
          >{`Departurel Time: `}</Text>
        </View>
        <Text style={[styles.slotNumber, styles.inputDate2Position]}>
          Slot Number:
        </Text>
        <Text style={[styles.totalDuration, styles.inputDate2Position]}>
          Total Duration
        </Text>
        <Text style={[styles.invoice, styles.savedTypo]}>{`INVOICE `}</Text>
        <Image
          style={styles.tabsPageChild}
          contentFit="cover"
          source={require("../assets/rectangle-4.png")}
        />
        <Text style={[styles.saved, styles.savedTypo]}>{`SAVED  `}</Text>
        <Image
          style={[styles.tabsPageItem, styles.tabsLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-129.png")}
        />
        <Image
          style={[styles.tabsPageInner, styles.tabsLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-129.png")}
        />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pageBg: {
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  inputLayout: {
    height: 24,
    width: 315,
    left: 26,
    position: "absolute",
  },
  timeFlexBox: {
    textAlign: "left",
    color: Color.colorBlack,
  },
  inputDate2Position: {
    left: 21,
    width: 315,
    position: "absolute",
  },
  savedTypo: {
    fontWeight: "800",
    position: "absolute",
  },
  tabsLayout: {
    height: 48,
    width: 315,
    left: 26,
    position: "absolute",
  },
  accountName: {
    top: 0,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
    left: 0,
    width: 315,
    position: "absolute",
  },
  inputDate: {
    top: 523,
  },
  inputDate1: {
    top: 415,
  },
  date: {
    top: 42,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
    left: 0,
    width: 315,
    position: "absolute",
  },
  arrivalTime: {
    top: 81,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
    left: 0,
    width: 315,
    position: "absolute",
  },
  departurelTime: {
    top: 123,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
    left: 0,
    width: 315,
    position: "absolute",
  },
  inputDate2: {
    top: 136,
    height: 147,
  },
  slotNumber: {
    top: 341,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_base,
  },
  totalDuration: {
    top: 299,
    height: 42,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_base,
  },
  invoice: {
    top: 50,
    left: 130,
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.ralewayExtraBold,
    textAlign: "left",
    color: Color.colorBlack,
  },
  tabsPageChild: {
    top: 683,
    left: 39,
    borderRadius: Border.br_mini,
    width: 280,
    height: 56,
    position: "absolute",
  },
  saved: {
    top: 697,
    left: 74,
    fontSize: FontSize.size_base_1,
    fontFamily: FontFamily.poppinsExtraBold,
    color: Color.colorWhite,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 210,
    height: 27,
  },
  tabsPageItem: {
    top: 446,
  },
  tabsPageInner: {
    top: 552,
  },
  tabsPage: {
    width: 367,
    height: 804,
  },
  receiptPage: {
    flex: 1,
    width: "100%",
    height: 800,
    flexDirection: "row",
  },
});

export default ReceiptPage;
