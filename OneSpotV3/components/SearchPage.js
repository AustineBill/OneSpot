import * as React from "react";
import {
  StyleProp,
  ViewStyle,
  StyleSheet,
  Pressable,
  View,
  Text,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, FontSize, Color, FontFamily, Padding } from "../GlobalStyles";

const SearchPage = ({ style }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.searchPage, style]}
      onPress={() => navigation.navigate("BottomTabsRoot", { screen: "" })}
    >
      <View style={[styles.vectorParent, styles.containerPosition]}>
        <Pressable
          style={styles.wrapper}
          onPress={() => navigation.navigate("BookPage")}
        >
          <Image
            style={[styles.icon, styles.iconLayout2]}
            contentFit="cover"
            source={require("../assets/rectangle-64.png")}
          />
        </Pressable>
        <View style={[styles.containerMenuContainer, styles.containerPosition]}>
          <Pressable
            style={styles.containerLayout}
            onPress={() =>
              navigation.navigate("BottomTabsRoot", { screen: "" })
            }
          >
            <Image
              style={styles.iconLayout2}
              contentFit="cover"
              source={require("../assets/frame-382.png")}
            />
          </Pressable>
          <Image
            style={[styles.containerMenuContainerChild, styles.containerLayout]}
            contentFit="cover"
            source={require("../assets/frame-172.png")}
          />
          <Pressable
            style={[styles.containerMenuContainerChild, styles.containerLayout]}
            onPress={() =>
              navigation.navigate("BottomTabsRoot", { screen: "" })
            }
          >
            <Image
              style={styles.iconLayout2}
              contentFit="cover"
              source={require("../assets/frame-39.png")}
            />
          </Pressable>
        </View>
        <Image
          style={styles.unionIcon}
          contentFit="cover"
          source={require("../assets/union.png")}
        />
        <View style={styles.profileImg} />
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require("../assets/rectangle-73.png")}
        />
        <Text style={[styles.findYourSpot, styles.findYourSpotFlexBox]}>
          Find your spot
        </Text>
        <Text style={styles.bgc}>BGC</Text>
        <View style={[styles.image8, styles.iconLayout1]} />
        <Image
          style={[styles.image5Icon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/image-5.png")}
        />
        <Text style={styles.fortVictoria}>Fort Victoria</Text>
        <Image
          style={[styles.frameItem, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/frame-23.png")}
        />
        <Text style={[styles.oneParkade, styles.b3ParkingTypo]}>
          One Parkade
        </Text>
        <Image
          style={[styles.image7Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/image-71.png")}
        />
        <Text style={[styles.rdAveParking, styles.rdAveParkingTypo]}>
          3rd Ave Parking
        </Text>
        <Image
          style={[styles.image8Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/image-82.png")}
        />
        <Text style={[styles.uptownParade, styles.rdAveParkingTypo]}>
          Uptown Parade
        </Text>
        <Image
          style={[styles.image9Icon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/image-9.png")}
        />
        <Text style={[styles.b3Parking, styles.b3ParkingTypo]}>B3 Parking</Text>
        <View style={styles.frameInner} />
        <Pressable
          style={[styles.defaultStatedefault, styles.findYourSpotFlexBox]}
          onPress={() => navigation.navigate("MapPage")}
        >
          <Image
            style={styles.mapComponentsvgIcon}
            contentFit="cover"
            source={require("../assets/map-componentsvg.png")}
          />
          <Text style={styles.reserve}>Map view</Text>
        </Pressable>
        <Pressable
          style={styles.vector}
          onPress={() => navigation.navigate("BottomTabsRoot", { screen: "" })}
        >
          <Image
            style={[styles.icon3, styles.iconLayout2]}
            contentFit="cover"
            source={require("../assets/vector3.png")}
          />
        </Pressable>
      </View>
      <Image
        style={styles.frameIcon}
        contentFit="cover"
        source={require("../assets/frame8.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  containerPosition: {
    left: 0,
    position: "absolute",
  },
  iconLayout2: {
    height: "100%",
    width: "100%",
  },
  containerLayout: {
    height: 30,
    width: 30,
  },
  findYourSpotFlexBox: {
    alignItems: "center",
    position: "absolute",
  },
  iconLayout1: {
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  iconPosition: {
    left: 21,
    width: 147,
  },
  b3ParkingTypo: {
    height: 43,
    width: 130,
    alignItems: "flex-end",
    fontSize: FontSize.size_mini,
    color: Color.colorWhite,
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    position: "absolute",
  },
  iconLayout: {
    height: 116,
    top: 397,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  rdAveParkingTypo: {
    bottom: 265,
    height: 43,
    width: 130,
    alignItems: "flex-end",
    fontSize: FontSize.size_mini,
    color: Color.colorWhite,
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    position: "absolute",
  },
  icon: {
    borderRadius: Border.br_69xl_7,
  },
  wrapper: {
    left: -20,
    top: 183,
    width: 401,
    height: 598,
    position: "absolute",
  },
  containerMenuContainerChild: {
    marginLeft: 101,
  },
  containerMenuContainer: {
    right: 0,
    bottom: 0,
    shadowColor: "rgba(20, 20, 20, 0.02)",
    shadowOffset: {
      width: 0,
      height: -1,
    },
    shadowRadius: 1,
    elevation: 1,
    shadowOpacity: 1,
    backgroundColor: Color.colorGray_200,
    height: 90,
    paddingLeft: Padding.p_23xl,
    paddingTop: Padding.p_7xl,
    paddingRight: 34,
    paddingBottom: Padding.p_7xl,
    flexDirection: "row",
  },
  unionIcon: {
    width: 0,
    height: 0,
  },
  profileImg: {
    top: 32,
    width: 48,
    height: 48,
    left: 9,
    position: "absolute",
  },
  frameChild: {
    top: 19,
    left: 189,
    width: 167,
    height: 41,
    borderRadius: Border.br_69xl_7,
    position: "absolute",
  },
  findYourSpot: {
    top: 113,
    fontSize: FontSize.size_6xl,
    color: Color.colorBlack,
    width: 240,
    height: 45,
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    alignItems: "center",
    fontWeight: "700",
    left: 9,
  },
  bgc: {
    top: 26,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.poppinsRegular,
    width: 107,
    height: 27,
    color: Color.colorWhite,
    left: 228,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    position: "absolute",
  },
  image8: {
    top: 494,
    left: 191,
    width: 129,
    height: 100,
  },
  image5Icon: {
    top: 228,
    height: 111,
    width: 147,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  fortVictoria: {
    left: 45,
    width: 115,
    height: 24,
    alignItems: "flex-end",
    fontSize: FontSize.size_mini,
    bottom: 443,
    color: Color.colorWhite,
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    position: "absolute",
  },
  frameItem: {
    top: 231,
    left: 177,
    width: 160,
    height: 105,
  },
  oneParkade: {
    left: 205,
    bottom: 443,
    width: 130,
  },
  image7Icon: {
    width: 147,
    left: 21,
  },
  rdAveParking: {
    left: 38,
  },
  image8Icon: {
    left: 178,
    width: 159,
  },
  uptownParade: {
    left: 197,
  },
  image9Icon: {
    top: 581,
    left: 26,
    height: 112,
    width: 147,
  },
  b3Parking: {
    bottom: 99,
    left: 54,
  },
  frameInner: {
    top: 659,
    width: 128,
    height: 42,
    left: 228,
    position: "absolute",
  },
  mapComponentsvgIcon: {
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  reserve: {
    fontSize: FontSize.size_mid,
    lineHeight: 26,
    fontFamily: FontFamily.nunitoSans12ptBold,
    color: Color.colorDarkslateblue,
    textAlign: "center",
    marginLeft: 6,
    fontWeight: "700",
  },
  defaultStatedefault: {
    height: "5.12%",
    width: "34.69%",
    top: "75.88%",
    right: "11.38%",
    bottom: "19%",
    left: "53.93%",
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorWhitesmoke,
    paddingHorizontal: Padding.p_smi,
    paddingVertical: 0,
    flexDirection: "row",
  },
  icon3: {
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  vector: {
    left: "4.07%",
    top: "3.78%",
    right: "89.59%",
    bottom: "94.03%",
    width: "6.34%",
    height: "2.19%",
    position: "absolute",
  },
  vectorParent: {
    width: 369,
    height: 821,
    top: -8,
  },
  frameIcon: {
    left: 199,
    width: 21,
    height: 50,
    top: -8,
    position: "absolute",
    overflow: "hidden",
  },
  searchPage: {
    backgroundColor: Color.colorLightgray,
    width: 360,
    height: 800,
    overflow: "hidden",
  },
});

export default SearchPage;
