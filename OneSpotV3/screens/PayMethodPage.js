import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const PayMethodPage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.paymethodPage}>
      <View style={styles.tabsPage}>
        <View style={[styles.upperContainer, styles.upperContainerPosition]}>
          <View style={styles.bankLogoComponentsvg}>
            <Text style={[styles.paymentMethod, styles.paymentTypo]}>
              Payment Method
            </Text>
            <Image
              style={styles.frameIcon}
              contentFit="cover"
              source={require("../assets/frame2.png")}
            />
          </View>
        </View>
        <View
          style={[styles.containerTabsContainertabs, styles.containerLayout]}
        >
          <View
            style={[
              styles.tabsContentContainertabsC,
              styles.upperContainerPosition,
            ]}
          >
            <Pressable
              style={[styles.activeStateactiveWrapper, styles.activeFlexBox]}
              onPress={() => navigation.navigate("TransactionPage")}
            >
              <View style={styles.activeStateactive}>
                <View style={styles.selectedBg} />
                <Text style={[styles.expenses, styles.expensesTypo]}>
                  GCASH
                </Text>
              </View>
            </Pressable>
            <Pressable
              style={[styles.activeStateactive1, styles.activeSpaceBlock]}
              onPress={() => navigation.navigate("TransactionPage")}
            >
              <View style={styles.selectedBg} />
              <Text style={[styles.expenses1, styles.expensesTypo]}>MAYA</Text>
            </Pressable>
          </View>
          <View style={[styles.frame, styles.framePosition]}>
            <Text style={[styles.onlinePayment, styles.paymentTypo]}>
              Online Payment
            </Text>
          </View>
        </View>
        <View
          style={[styles.containerTabsContainertabs1, styles.containerLayout]}
        >
          <View
            style={[
              styles.tabsContentContainertabsC,
              styles.upperContainerPosition,
            ]}
          >
            <Pressable
              style={[styles.activeStateactiveWrapper, styles.activeFlexBox]}
              onPress={() => navigation.navigate("TransactionPage")}
            >
              <View style={styles.activeStateactive}>
                <View style={styles.selectedBg} />
                <Text style={[styles.expenses2, styles.expensesTypo]}>BDO</Text>
              </View>
            </Pressable>
            <Pressable
              style={[styles.activeStateactiveFrame, styles.activeSpaceBlock]}
              onPress={() => navigation.navigate("TransactionPage")}
            >
              <View style={styles.activeStateactive}>
                <View style={styles.selectedBg} />
                <Text style={[styles.expenses3, styles.expensesTypo]}>BPI</Text>
              </View>
            </Pressable>
          </View>
          <View style={[styles.frame1, styles.framePosition]}>
            <Text style={[styles.onlinePayment, styles.paymentTypo]}>
              Debit Payment
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  upperContainerPosition: {
    width: 375,
    left: 0,
    position: "absolute",
    justifyContent: "flex-end",
    overflow: "hidden",
  },
  paymentTypo: {
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.ralewayExtraBold,
    fontWeight: "800",
  },
  containerLayout: {
    height: 273,
    width: 375,
    position: "absolute",
    overflow: "hidden",
  },
  activeFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  expensesTypo: {
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    top: "30.77%",
    position: "absolute",
  },
  activeSpaceBlock: {
    marginTop: 14,
    width: 172,
  },
  framePosition: {
    alignItems: "flex-end",
    top: 14,
    justifyContent: "center",
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  paymentMethod: {
    left: 28,
    fontSize: FontSize.size_3xl,
    top: 0,
    position: "absolute",
  },
  frameIcon: {
    width: 20,
    height: 22,
    left: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  bankLogoComponentsvg: {
    width: 134,
    height: 28,
  },
  upperContainer: {
    height: 147,
    paddingHorizontal: 15,
    paddingVertical: 55,
    top: 0,
    backgroundColor: Color.colorWhite,
    width: 375,
  },
  selectedBg: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorMidnightblue,
    position: "absolute",
    width: "100%",
  },
  expenses: {
    left: "32.56%",
  },
  activeStateactive: {
    height: 52,
    width: 172,
  },
  activeStateactiveWrapper: {
    width: 172,
  },
  expenses1: {
    left: "35.47%",
  },
  activeStateactive1: {
    height: 52,
  },
  tabsContentContainertabsC: {
    top: 86,
    height: 514,
    paddingLeft: Padding.p_83xl,
    paddingTop: Padding.p_smi,
    paddingRight: Padding.p_82xl,
    paddingBottom: Padding.p_364xl,
  },
  onlinePayment: {
    fontSize: FontSize.size_5xl,
  },
  frame: {
    width: 201,
  },
  containerTabsContainertabs: {
    top: 448,
    left: -6,
  },
  expenses2: {
    left: "38.95%",
  },
  expenses3: {
    left: "41.28%",
  },
  activeStateactiveFrame: {
    justifyContent: "center",
    alignItems: "center",
  },
  frame1: {
    width: 188,
  },
  containerTabsContainertabs1: {
    top: 161,
    left: -7,
  },
  tabsPage: {
    width: 360,
    height: 804,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  paymethodPage: {
    flex: 1,
    height: 800,
    justifyContent: "flex-end",
    alignItems: "center",
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default PayMethodPage;
