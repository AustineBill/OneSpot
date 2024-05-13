import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, Padding, FontSize, FontFamily } from "../GlobalStyles";

const MapPage = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.mapPage}
      onPress={() => navigation.navigate("BottomTabsRoot", { screen: "" })}
    >
      <View style={[styles.vectorParent, styles.containerPosition]}>
        <Image
          style={[styles.frameChild, styles.frameLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-65.png")}
        />
        <View style={[styles.containerMenuContainer, styles.containerPosition]}>
          <Image
            style={styles.containerLayout}
            contentFit="cover"
            source={require("../assets/frame-382.png")}
          />
          <Image
            style={[styles.containerMenuContainerItem, styles.containerLayout]}
            contentFit="cover"
            source={require("../assets/frame-173.png")}
          />
          <Image
            style={[styles.containerMenuContainerItem, styles.containerLayout]}
            contentFit="cover"
            source={require("../assets/frame-39.png")}
          />
        </View>
        <Image
          style={styles.unionIcon}
          contentFit="cover"
          source={require("../assets/union.png")}
        />
        <Image
          style={[styles.frameItem, styles.frameLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-74.png")}
        />
        <Text style={[styles.bgc, styles.bgcFlexBox]}>BGC</Text>
        <View style={styles.image8} />
        <View style={[styles.image5, styles.imageLayout]} />
        <View style={[styles.image7, styles.image7Layout]} />
        <View style={styles.frameInner} />
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/icon.png")}
        />
        <Image
          style={[styles.rectangleIcon, styles.image7Layout]}
          contentFit="cover"
          source={require("../assets/rectangle-139.png")}
        />
        <Text style={[styles.resultsWFifthContainer, styles.bgcFlexBox]}>
          <Text style={styles.resultsWFifthContainer1}>
            <Text style={styles.results}>{`Results
`}</Text>
            <Text
              style={styles.wFifthBonifacio}
            >{`W Fifth Bonifacio Global City Parking 
`}</Text>
            <Text style={styles.results}>{`Parking Lot  . H23 + GG9 , Lane A

`}</Text>
            <Text style={styles.wFifthBonifacio}>{`One Parkade
`}</Text>
            <Text style={styles.results}>Parking Lot . H22X + 4WC</Text>
          </Text>
        </Text>
        <Pressable
          style={styles.vector}
          onPress={() => navigation.navigate("BottomTabsRoot", { screen: "" })}
        >
          <Image
            style={styles.icon1}
            contentFit="cover"
            source={require("../assets/vector4.png")}
          />
        </Pressable>
      </View>
      <Image
        style={styles.image20Icon}
        contentFit="cover"
        source={require("../assets/image-20.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  containerPosition: {
    left: 0,
    position: "absolute",
  },
  frameLayout: {
    borderRadius: Border.br_69xl_7,
    position: "absolute",
  },
  containerLayout: {
    height: 30,
    width: 30,
  },
  bgcFlexBox: {
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    position: "absolute",
  },
  imageLayout: {
    width: 147,
    left: 25,
    borderRadius: Border.br_3xs,
  },
  image7Layout: {
    height: 116,
    position: "absolute",
  },
  frameChild: {
    top: -46,
    left: -40,
    width: 559,
    height: 789,
  },
  containerMenuContainerItem: {
    marginLeft: 101,
  },
  containerMenuContainer: {
    right: 18,
    bottom: 11,
    shadowColor: "rgba(20, 20, 20, 0.02)",
    shadowOffset: {
      width: 0,
      height: -1,
    },
    shadowRadius: 1,
    elevation: 1,
    shadowOpacity: 1,
    backgroundColor: Color.colorGray_200,
    height: 79,
    flexDirection: "row",
    paddingLeft: Padding.p_23xl,
    paddingTop: Padding.p_7xl,
    paddingRight: 41,
    paddingBottom: Padding.p_7xl,
  },
  unionIcon: {
    width: 0,
    height: 0,
  },
  frameItem: {
    top: 19,
    left: 140,
    width: 211,
    height: 43,
  },
  bgc: {
    top: 27,
    left: 180,
    fontSize: FontSize.size_lg,
    color: "#080808",
    width: 107,
    height: 27,
    fontFamily: FontFamily.poppinsRegular,
  },
  image8: {
    top: 494,
    left: 191,
    width: 129,
    height: 100,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  image5: {
    top: 228,
    height: 111,
    position: "absolute",
  },
  image7: {
    top: 405,
    width: 147,
    left: 25,
    borderRadius: Border.br_3xs,
  },
  frameInner: {
    top: 659,
    left: 228,
    width: 128,
    height: 42,
    position: "absolute",
  },
  icon: {
    top: 30,
    left: 151,
    width: 21,
    height: 21,
    position: "absolute",
    overflow: "hidden",
  },
  rectangleIcon: {
    top: 90,
    left: 81,
    width: 277,
  },
  results: {
    fontFamily: FontFamily.poppinsRegular,
  },
  wFifthBonifacio: {
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
  },
  resultsWFifthContainer1: {
    width: "100%",
  },
  resultsWFifthContainer: {
    top: 93,
    left: 87,
    fontSize: FontSize.size_xs,
    color: Color.colorBlack,
    width: 275,
    height: 110,
  },
  icon1: {
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    width: "100%",
  },
  vector: {
    left: "4.62%",
    top: "3.16%",
    right: "89.16%",
    bottom: "94.65%",
    width: "6.22%",
    height: "2.19%",
    position: "absolute",
  },
  vectorParent: {
    top: -9,
    width: 381,
    height: 822,
  },
  image20Icon: {
    top: 209,
    left: -60,
    width: 487,
    height: 591,
    position: "absolute",
  },
  mapPage: {
    backgroundColor: Color.colorLightgray,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default MapPage;
