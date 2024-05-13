import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const ParkinginfoPage = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.parkinginfoPage, styles.iconLayout]}>
      <Image
        style={[styles.parkinginfoPageChild, styles.frameChildLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-8.png")}
      />
      <Pressable
        style={styles.vector}
        onPress={() => navigation.navigate("BookPage")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector3.png")}
        />
      </Pressable>
      <View style={[styles.unionParent, styles.parentPosition]}>
        <Image
          style={styles.unionIcon}
          contentFit="cover"
          source={require("../assets/union.png")}
        />
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require("../assets/rectangle-62.png")}
        />
        <Pressable
          style={styles.addVehicle}
          onPress={() => navigation.navigate("AddVehiclePage")}
        >
          <Text style={[styles.addVehicle1, styles.vehicleTypo1]}>
            Add vehicle
          </Text>
        </Pressable>
      </View>
      <View style={[styles.vectorParent, styles.parentPosition]}>
        <Image
          style={[styles.frameItem, styles.frameChildLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-63.png")}
        />
        <Image
          style={styles.unionIcon}
          contentFit="cover"
          source={require("../assets/union.png")}
        />
        <View style={styles.image8} />
        <View style={[styles.image5, styles.imageLayout]} />
        <Text style={[styles.vehicleInformation, styles.vehicleTypo]}>
          Vehicle Information
        </Text>
        <View style={styles.frameInner} />
        <View style={[styles.image7, styles.imageLayout]} />
        <View style={styles.frameView} />
        <Image
          style={[styles.rectangleIcon, styles.frameChild3Layout]}
          contentFit="cover"
          source={require("../assets/rectangle-81.png")}
        />
        <Text
          style={[styles.modelName, styles.colorTypo]}
        >{`Model Name `}</Text>
        <Text
          style={[
            styles.vehicleTypeCompactContainer,
            styles.vehicleContainerLayout,
          ]}
        >
          <Text
            style={[styles.vehicleType, styles.doneTypo]}
          >{`Vehicle Type: `}</Text>
          <Text style={[styles.compactCar, styles.compactCarTypo]}>
            Compact Car
          </Text>
        </Text>
        <Text style={[styles.color, styles.colorTypo]}>Color</Text>
        <Text
          style={[styles.plateNumber, styles.plateTypo]}
        >{`Plate number `}</Text>
      </View>
      <View style={[styles.vectorGroup, styles.unionParentLayout]}>
        <Image
          style={[styles.frameItem, styles.frameChildLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-63.png")}
        />
        <Image
          style={styles.unionIcon}
          contentFit="cover"
          source={require("../assets/union.png")}
        />
        <View style={styles.image8} />
        <View style={[styles.image5, styles.imageLayout]} />
        <Text style={[styles.vehicleInformation1, styles.vehicleTypo]}>
          Vehicle Information
        </Text>
        <View style={[styles.image7, styles.imageLayout]} />
        <View style={styles.frameView} />
        <Image
          style={[styles.frameChild3, styles.frameChild3Layout]}
          contentFit="cover"
          source={require("../assets/rectangle-82.png")}
        />
        <Text
          style={[styles.modelName1, styles.colorTypo]}
        >{`Model Name `}</Text>
        <Text
          style={[
            styles.vehicleTypeCompactContainer1,
            styles.vehicleContainerLayout,
          ]}
        >
          <Text
            style={[styles.vehicleType, styles.doneTypo]}
          >{`Vehicle Type: `}</Text>
          <Text style={[styles.compactCar, styles.compactCarTypo]}>
            Compact Car
          </Text>
        </Text>
        <Text style={[styles.color1, styles.colorTypo]}>Color</Text>
        <Text
          style={[styles.plateNumber1, styles.plateTypo]}
        >{`Plate number `}</Text>
        <Text
          style={[styles.selectYourVehicle, styles.doneClr]}
        >{`Select your vehicle `}</Text>
      </View>
      <Pressable
        style={styles.submitButtonActionsubmit}
        onPress={() => navigation.navigate("CarBookSlot")}
      >
        <Text style={[styles.done, styles.doneClr]}>{`Confirm `}</Text>
      </Pressable>
      <View style={[styles.parkinginfoPageInner, styles.frameLayout]}>
        <View style={[styles.frameWrapper, styles.frameLayout]}>
          <View style={[styles.frameContainer, styles.frameLayout]}>
            <View style={[styles.frameWrapper, styles.frameLayout]}>
              <Image
                style={[styles.frameChild4, styles.framePosition]}
                contentFit="cover"
                source={require("../assets/rectangle-71.png")}
              />
              <Text style={[styles.parkMyVehicle, styles.vehicleTypo1]}>
                Park my vehicle
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  frameChildLayout: {
    borderRadius: Border.br_69xl_7,
    position: "absolute",
  },
  parentPosition: {
    height: 821,
    top: -11,
    position: "absolute",
  },
  vehicleTypo1: {
    height: 27,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.colorWhite,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  imageLayout: {
    width: 147,
    left: 25,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  vehicleTypo: {
    height: 21,
    width: 209,
    alignItems: "flex-end",
    fontSize: FontSize.size_xl,
    display: "flex",
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    position: "absolute",
  },
  frameChild3Layout: {
    borderRadius: 6,
    position: "absolute",
  },
  colorTypo: {
    height: 32,
    width: 134,
    textAlign: "center",
    color: Color.colorAliceblue_100,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  vehicleContainerLayout: {
    height: 52,
    width: 146,
    textAlign: "center",
    color: Color.colorAliceblue_100,
    position: "absolute",
  },
  doneTypo: {
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  compactCarTypo: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  plateTypo: {
    width: 292,
    fontFamily: FontFamily.manropeSemiBold,
    textAlign: "center",
    color: Color.colorAliceblue_100,
    fontWeight: "600",
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  unionParentLayout: {
    width: 360,
    left: 0,
  },
  doneClr: {
    color: Color.colorBlack,
    textAlign: "center",
  },
  frameLayout: {
    width: 191,
    height: 46,
    position: "absolute",
  },
  framePosition: {
    left: 0,
    top: 0,
  },
  parkinginfoPageChild: {
    top: 172,
    width: 138,
    height: 47,
    left: 191,
  },
  icon: {
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  vector: {
    left: "5.28%",
    top: "4.25%",
    right: "88.22%",
    bottom: "93.5%",
    width: "6.5%",
    height: "2.25%",
    position: "absolute",
  },
  unionIcon: {
    width: 0,
    height: 0,
  },
  frameChild: {
    top: 185,
    left: 65,
    width: 274,
    height: 46,
    borderRadius: Border.br_69xl_7,
    position: "absolute",
  },
  addVehicle1: {
    width: 107,
  },
  addVehicle: {
    left: 219,
    top: 194,
    position: "absolute",
  },
  unionParent: {
    width: 360,
    left: 0,
  },
  frameItem: {
    top: 284,
    left: -16,
    width: 414,
    height: 590,
  },
  image8: {
    top: 494,
    width: 129,
    height: 100,
    borderRadius: Border.br_3xs,
    left: 191,
    position: "absolute",
  },
  image5: {
    top: 228,
    height: 111,
  },
  vehicleInformation: {
    bottom: 500,
    left: 88,
  },
  frameInner: {
    top: 231,
    width: 160,
    height: 105,
    left: 191,
    position: "absolute",
  },
  image7: {
    top: 405,
    height: 116,
  },
  frameView: {
    top: 659,
    left: 228,
    width: 128,
    height: 42,
    position: "absolute",
  },
  rectangleIcon: {
    top: 412,
    left: 74,
    width: 235,
    height: 219,
  },
  modelName: {
    top: 421,
    left: 124,
    width: 134,
    textAlign: "center",
    color: Color.colorAliceblue_100,
  },
  vehicleType: {
    fontSize: FontSize.size_xs,
  },
  compactCar: {
    fontSize: FontSize.size_lg,
  },
  vehicleTypeCompactContainer: {
    top: 327,
    left: 109,
  },
  color: {
    top: 512,
    left: 124,
    width: 134,
    textAlign: "center",
    color: Color.colorAliceblue_100,
  },
  plateNumber: {
    top: 600,
    left: 46,
  },
  vectorParent: {
    left: -13,
    width: 369,
  },
  vehicleInformation1: {
    bottom: 478,
    left: 68,
  },
  frameChild3: {
    top: 425,
    left: 58,
    width: 239,
    height: 223,
  },
  modelName1: {
    top: 434,
    left: 105,
  },
  vehicleTypeCompactContainer1: {
    top: 336,
    left: 98,
  },
  color1: {
    top: 527,
    left: 112,
  },
  plateNumber1: {
    top: 617,
    left: 36,
  },
  selectYourVehicle: {
    top: 69,
    left: -7,
    fontSize: FontSize.size_6xl,
    width: 272,
    height: 38,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    position: "absolute",
  },
  vectorGroup: {
    top: 0,
    position: "absolute",
    height: 800,
  },
  done: {
    width: 313,
    height: 36,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  submitButtonActionsubmit: {
    top: 713,
    left: 16,
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorLightsteelblue_200,
    width: 332,
    height: 51,
    justifyContent: "flex-end",
    paddingHorizontal: 10,
    paddingVertical: 0,
    position: "absolute",
  },
  frameChild4: {
    width: 260,
    height: 904,
    top: 0,
    borderRadius: Border.br_69xl_7,
    position: "absolute",
  },
  parkMyVehicle: {
    top: 9,
    left: 28,
    width: 151,
    position: "absolute",
  },
  frameWrapper: {
    top: 0,
    left: 0,
  },
  frameContainer: {
    left: 4,
    top: 0,
  },
  parkinginfoPageInner: {
    top: 174,
    left: 19,
  },
  parkinginfoPage: {
    backgroundColor: Color.colorLightgray,
    flex: 1,
    height: 800,
  },
});

export default ParkinginfoPage;
