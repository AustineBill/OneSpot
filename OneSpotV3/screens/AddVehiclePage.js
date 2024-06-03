import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const AddVehiclePage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.addVehiclePage}>
      <View style={styles.addVehiclePageChild} />
      <View style={styles.vectorParent}>
        <Image
          style={[styles.frameChild, styles.frameLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-62.png")}
        />
        <Image
          style={styles.frameItem}
          contentFit="cover"
          source={require("../assets/rectangle-63.png")}
        />
        <Image
          style={styles.unionIcon}
          contentFit="cover"
          source={require("../assets/union.png")}
        />
        <Text
          style={[styles.vehicleInformation, styles.vehicleInformationFlexBox]}
        >
          Vehicle Information
        </Text>
        <Image
          style={styles.frameInner}
          contentFit="cover"
          source={require("../assets/rectangle-83.png")}
        />
        <Text style={[styles.enterVehicleType, styles.modelTypo]}>
          Enter Vehicle Type
        </Text>
        <Text style={[styles.model, styles.modelTypo]}>Model</Text>

        <Text style={[styles.plateNumber, styles.colorTypo]}>Plate Number</Text>
        
        <Text style={[styles.color, styles.colorTypo]}>Color</Text>
        <Pressable
          style={[
            styles.submitButtonActionsubmit,
            styles.vehicleInformationFlexBox,
          ]}
          onPress={() => navigation.navigate("CarBookSlot")}
        >
          <Text style={[styles.done, styles.doneLayout]}>Save</Text>
        </Pressable>
        <Text
          style={[styles.selectYourVehicle, styles.doneLayout]}
        > Select Your Vehicle</Text>
        <Pressable
          style={styles.arrowBack}
          onPress={() => navigation.navigate("BookPage")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/arrowback4.png")}
          />
        </Pressable>
        <Image
          style={[styles.vectorIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
        <Image
          style={[styles.frameIcon, styles.frameLayout]}
          contentFit="cover"
          source={require("../assets/frame-51.png")}
        />
      </View>
      <Text style={[styles.addVehicle, styles.vehicleTypo]}>Add vehicle</Text>
      <Pressable
        style={styles.parkMyVehicleContainer}
        onPress={() => navigation.navigate("ParkinginfoPage")}
      >
        <Text style={styles.vehicleTypo}>Park my vehicle</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  frameLayout: {
    height: 46,
    position: "absolute",
  },
  vehicleInformationFlexBox: {
    alignItems: "flex-end",
    position: "absolute",
  },
  modelTypo: {
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  colorTypo: {
    width: 292,
    fontFamily: FontFamily.manropeSemiBold,
    textAlign: "center",
    backgroundColor: Color.colorWhite,
    color: Color.colorWhite,
    fontWeight: "600",
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  doneLayout: {
    height: 38,
    color: Color.colorBlack,
    textAlign: "center",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  vehicleTypo: {
    fontSize: FontSize.size_mini,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  addVehiclePageChild: {
    top: 33,
    width: 100,
    height: 100,
    left: 29,
    position: "absolute",
    overflow: "hidden",
  },
  frameChild: {
    left: 27,
    width: 274,
    borderRadius: Border.br_69xl_7,
    top: 190,
  },
  frameItem: {
    top: 284,
    left: -16,
    width: 414,
    height: 590,
    borderRadius: Border.br_69xl_7,
    position: "absolute",
  },
  unionIcon: {
    width: 0,
    height: 0,
  },
  vehicleInformation: {
    bottom: 500,
    left: 88,
    fontSize: FontSize.size_xl,
    display: "flex",
    width: 209,
    height: 21,
    textAlign: "left",
    color: Color.colorWhite,
    alignItems: "flex-end",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  frameInner: {
    top: 391,
    left: 45,
    borderRadius: 6,
    width: 293,
    height: 308,
    position: "absolute",
  },
  enterVehicleType: {
    top: 357,
    width: 171,
    height: 28,
    left: 29,
  },
  model: {
    top: 446,
    left: -5,
    width: 134,
    height: 32,
  },
  plateNumber: {
    top: 538,
    left: -58,
  },
  color: {
    top: 626,
    left: -78,
  },
  done: {
    fontSize: FontSize.size_lg,
    width: 288,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    height: 38,
    color: Color.colorBlack,
  },
  submitButtonActionsubmit: {
    top: 733,
    left: 24,
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorLightsteelblue_200,
    width: 332,
    height: 51,
    justifyContent: "flex-end",
    paddingHorizontal: 22,
    paddingVertical: 0,
  },
  selectYourVehicle: {
    top: 85,
    left: 11,
    fontSize: FontSize.size_6xl,
    width: 272,
    height: 38,
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  arrowBack: {
    left: "7.05%",
    top: "3.41%",
    right: "82.66%",
    bottom: "93.39%",
    width: "10.3%",
    height: "3.2%",
    position: "absolute",
  },
  vectorIcon: {
    height: "2.44%",
    width: "6.23%",
    top: "5.85%",
    right: "85.91%",
    bottom: "91.72%",
    left: "7.86%",
    position: "absolute",
  },
  frameIcon: {
    top: 195,
    left: 168,
    width: 191,
  },
  vectorParent: {
    top: -11,
    left: -9,
    width: 369,
    height: 821,
    position: "absolute",
  },
  addVehicle: {
    left: 209,
    top: 190,
    position: "absolute",
  },
  parkMyVehicleContainer: {
    left: 32,
    top: 190,
    position: "absolute",
  },
  addVehiclePage: {
    backgroundColor: Color.colorLightgray,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default AddVehiclePage;
