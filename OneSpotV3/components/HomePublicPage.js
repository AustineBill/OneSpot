import * as React from "react";
import {
  StyleProp,
  ViewStyle,
  Text,
  StyleSheet,
  View,
  Pressable,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const HomePublicPage = ({ style }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.homepublicPage, style]}
      onPress={() => navigation.navigate("BottomTabsRoot", { screen: "" })}
    >
      <View style={[styles.frame, styles.frameFlexBox1]}>
        <Pressable
          style={styles.frameInner}
          onPress={() => navigation.navigate("BottomTabsRoot", { screen: "" })}
        >
          <View style={styles.frameParent}>
            <View style={[styles.frame1, styles.frameFlexBox]}>
              <Text style={[styles.findYourSpot, styles.manilaFlexBox]}>
                Find your spot
              </Text>
            </View>
            <View style={[styles.frame2, styles.frameFlexBox]}>
              <View style={styles.frame3}>
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  source={require("../assets/rectangle-62.png")}
                />
                <Image
                  style={styles.frameItem}
                  contentFit="cover"
                  source={require("../assets/frame-51.png")}
                />
                <Text style={[styles.public, styles.publicTypo]}>PUBLIC</Text>
                <Text style={[styles.private, styles.publicTypo]}>PRIVATE</Text>
              </View>
            </View>
            <View style={[styles.frame4, styles.frameLayout6]}>
              <View style={[styles.frame5, styles.frame5Layout]}>
                <Image
                  style={[styles.searchBarIcon, styles.frame5Layout]}
                  contentFit="cover"
                  source={require("../assets/search-bar.png")}
                />
                <Text style={[styles.manila, styles.helloTypo]}>Manila</Text>
              </View>
            </View>
            <View style={styles.frame6}>
              <View style={[styles.frame7, styles.frameLayout5]}>
                <View style={[styles.frame8, styles.frameLayout5]}>
                  <View style={[styles.frame8, styles.frameLayout5]}>
                    <View
                      style={[styles.rectangleView, styles.containerPosition]}
                    />
                  </View>
                  <View style={[styles.frame10, styles.frameIconLayout]}>
                    <Image
                      style={[styles.image13Icon, styles.iconLayout]}
                      contentFit="cover"
                      source={require("../assets/image-13.png")}
                    />
                  </View>
                </View>
                <Pressable
                  style={[styles.frame11, styles.frameLayout6]}
                  onPress={() => navigation.navigate("BookPage")}
                >
                  <View style={[styles.frame12, styles.frame12Position]}>
                    <Image
                      style={[styles.image10Icon, styles.frame12Position]}
                      contentFit="cover"
                      source={require("../assets/image-10.png")}
                    />
                  </View>
                  <View style={styles.frame13}>
                    <Pressable
                      style={[
                        styles.defaultStatedefaultWrapper,
                        styles.frameFlexBox1,
                      ]}
                      onPress={() => navigation.navigate("MapPage")}
                    >
                      <View
                        style={[
                          styles.defaultStatedefault,
                          styles.containerFlexBox,
                        ]}
                      >
                        <Image
                          style={styles.mapComponentsvgIcon}
                          contentFit="cover"
                          source={require("../assets/map-componentsvg.png")}
                        />
                        <Text style={styles.reserve}>Map view</Text>
                      </View>
                    </Pressable>
                  </View>
                  <View style={[styles.frame14, styles.frameLayout1]}>
                    <View style={[styles.frame15, styles.frame15Layout]}>
                      <Text style={[styles.dajParking, styles.parkingTypo]}>
                        Daj Parking
                      </Text>
                    </View>
                    <View style={[styles.frame16, styles.frameLayout1]}>
                      <Text
                        style={[styles.madrigalParking, styles.parkingTypo]}
                      >
                        Madrigal Parking
                      </Text>
                    </View>
                  </View>
                  <View style={[styles.frame17, styles.frameLayout6]}>
                    <View style={[styles.frame18, styles.frameLayout3]}>
                      <View style={[styles.frame19, styles.frameLayout3]}>
                        <Image
                          style={[styles.image14Icon, styles.frameIconLayout]}
                          contentFit="cover"
                          source={require("../assets/image-14.png")}
                        />
                      </View>
                      <View style={[styles.frame20, styles.frameIconLayout]}>
                        <Image
                          style={styles.image8Icon}
                          contentFit="cover"
                          source={require("../assets/image-81.png")}
                        />
                      </View>
                    </View>
                    <View style={[styles.frame21, styles.frame21Layout]}>
                      <Text style={[styles.unSquare, styles.frame21Layout]}>
                        UN Square
                      </Text>
                      <Text
                        style={[styles.bocoboPayParking, styles.parkingTypo]}
                      >{`Bocobo Pay  
Parking`}</Text>
                    </View>
                  </View>
                  <View style={[styles.frame22, styles.frameLayout6]} />
                </Pressable>
              </View>
            </View>
            <View style={[styles.frame23, styles.frameLayout]}>
              <View style={[styles.frame24, styles.frameLayout]}>
                <View style={[styles.frame25, styles.frameLayout]} />
                <View style={[styles.frame26, styles.frameLayout]}>
                  <View style={[styles.frame27, styles.frame27Position]}>
                    <Image
                      style={[styles.profileImgIcon, styles.frame27Position]}
                      contentFit="cover"
                      source={require("../assets/profile-img.png")}
                    />
                  </View>
                  <View style={[styles.frame28, styles.frame28Layout]}>
                    <Text style={[styles.helloShanelle, styles.frame28Layout]}>
                      <Text style={styles.helloTypo}>{`Hello, 
`}</Text>
                      <Text style={styles.shanelle}>Shanelle</Text>
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View
              style={[styles.containerMenuContainer, styles.containerFlexBox]}
            >
              <Image
                style={styles.containerLayout}
                contentFit="cover"
                source={require("../assets/frame-381.png")}
              />
              <Image
                style={[
                  styles.containerMenuContainerItem,
                  styles.containerLayout,
                ]}
                contentFit="cover"
                source={require("../assets/frame-171.png")}
              />
            </View>
            <Image
              style={styles.unionIcon}
              contentFit="cover"
              source={require("../assets/union.png")}
            />
          </View>
        </Pressable>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  frameFlexBox1: {
    alignItems: "center",
    position: "absolute",
  },
  frameFlexBox: {
    alignItems: "flex-end",
    justifyContent: "center",
    left: 0,
  },
  manilaFlexBox: {
    display: "flex",
    textAlign: "left",
    color: Color.colorBlack,
    alignItems: "center",
  },
  publicTypo: {
    height: 27,
    color: Color.colorWhite,
    top: 9,
    fontSize: FontSize.size_xl,
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    alignItems: "center",
    position: "absolute",
  },
  frameLayout6: {
    width: 331,
    position: "absolute",
    overflow: "hidden",
  },
  frame5Layout: {
    height: 35,
    width: 305,
  },
  helloTypo: {
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_base,
  },
  frameLayout5: {
    width: 333,
    height: 400,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  containerPosition: {
    backgroundColor: Color.colorGray_200,
    left: 0,
    position: "absolute",
  },
  frameIconLayout: {
    height: 100,
    position: "absolute",
  },
  iconLayout: {
    width: 121,
    borderRadius: Border.br_3xs,
  },
  frame12Position: {
    height: 99,
    top: 0,
    position: "absolute",
  },
  containerFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  frameLayout1: {
    height: 25,
    position: "absolute",
  },
  frame15Layout: {
    height: 24,
    position: "absolute",
  },
  parkingTypo: {
    fontSize: FontSize.size_mini,
    color: Color.colorWhite,
    display: "flex",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    alignItems: "flex-end",
  },
  frameLayout3: {
    width: 291,
    overflow: "hidden",
  },
  frame21Layout: {
    height: 43,
    position: "absolute",
  },
  frameLayout: {
    height: 63,
    overflow: "hidden",
  },
  frame27Position: {
    width: 48,
    left: 0,
    position: "absolute",
  },
  frame28Layout: {
    width: 104,
    position: "absolute",
  },
  containerLayout: {
    height: 30,
    width: 30,
  },
  findYourSpot: {
    fontSize: FontSize.size_6xl,
    width: 240,
    height: 45,
    fontFamily: FontFamily.poppinsBold,
    display: "flex",
    fontWeight: "700",
  },
  frame1: {
    top: 113,
    width: 249,
    justifyContent: "center",
    position: "absolute",
    overflow: "hidden",
  },
  frameChild: {
    left: 49,
    borderRadius: Border.br_69xl_7,
    width: 274,
    top: 0,
    height: 46,
    position: "absolute",
  },
  frameItem: {
    width: 191,
    top: 0,
    height: 46,
    left: 0,
    position: "absolute",
  },
  public: {
    left: 52,
    width: 82,
  },
  private: {
    left: 203,
    width: 107,
  },
  frame3: {
    width: 323,
    height: 46,
    overflow: "hidden",
  },
  frame2: {
    top: 185,
    width: 339,
    justifyContent: "center",
    position: "absolute",
    overflow: "hidden",
  },
  searchBarIcon: {
    top: 0,
    left: 0,
    position: "absolute",
  },
  manila: {
    top: 5,
    left: 34,
    width: 113,
    height: 26,
    display: "flex",
    textAlign: "left",
    color: Color.colorBlack,
    alignItems: "center",
    position: "absolute",
  },
  frame5: {
    overflow: "hidden",
  },
  frame4: {
    top: 258,
    justifyContent: "center",
    alignItems: "flex-end",
    left: 0,
  },
  rectangleView: {
    width: 328,
    height: 400,
    top: 0,
  },
  frame8: {
    left: 0,
  },
  image13Icon: {
    left: 138,
    height: 100,
    position: "absolute",
    top: 0,
  },
  frame10: {
    left: 37,
    width: 259,
    overflow: "hidden",
    top: 17,
  },
  image10Icon: {
    width: 121,
    borderRadius: Border.br_3xs,
    left: 0,
  },
  frame12: {
    width: 291,
    overflow: "hidden",
    left: 20,
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
    marginLeft: 6,
    textAlign: "center",
    fontWeight: "700",
  },
  defaultStatedefault: {
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorWhitesmoke,
    paddingHorizontal: Padding.p_smi,
    paddingVertical: 0,
    width: 128,
    height: 42,
  },
  defaultStatedefaultWrapper: {
    left: 177,
    width: 128,
    top: 0,
    justifyContent: "center",
  },
  frame13: {
    top: 329,
    left: 13,
    height: 42,
    width: 305,
    position: "absolute",
    overflow: "hidden",
  },
  dajParking: {
    width: 108,
    bottom: 0,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    height: 24,
    position: "absolute",
    left: 0,
  },
  frame15: {
    left: 26,
    width: 259,
    overflow: "hidden",
    top: 0,
  },
  madrigalParking: {
    left: 160,
    width: 151,
    bottom: 0,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    height: 25,
    position: "absolute",
  },
  frame16: {
    width: 311,
    height: 25,
    overflow: "hidden",
    top: 0,
    left: 0,
  },
  frame14: {
    top: 103,
    left: 10,
    width: 311,
    height: 25,
    overflow: "hidden",
  },
  image14Icon: {
    borderRadius: 9,
    width: 124,
    top: 0,
    left: 0,
  },
  frame19: {
    height: 100,
    position: "absolute",
    top: 0,
    left: 0,
  },
  image8Icon: {
    left: 146,
    width: 129,
    borderRadius: Border.br_3xs,
    height: 100,
    top: 0,
    position: "absolute",
  },
  frame20: {
    left: 8,
    width: 275,
    top: 0,
    overflow: "hidden",
  },
  frame18: {
    left: 20,
    width: 291,
    height: 100,
    position: "absolute",
    top: 0,
  },
  unSquare: {
    left: 187,
    width: 130,
    fontSize: FontSize.size_mini,
    color: Color.colorWhite,
    display: "flex",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    alignItems: "flex-end",
    bottom: 0,
    textAlign: "left",
  },
  bocoboPayParking: {
    bottom: -4,
    left: -7,
    width: 165,
    textAlign: "center",
    height: 20,
    justifyContent: "center",
    position: "absolute",
  },
  frame21: {
    top: 100,
    left: 7,
    width: 317,
    overflow: "hidden",
  },
  frame17: {
    top: 164,
    height: 154,
    left: 0,
  },
  frame22: {
    top: 308,
    height: 20,
    left: 0,
  },
  frame11: {
    top: 18,
    left: 1,
    height: 371,
  },
  frame7: {
    left: 16,
  },
  frame6: {
    top: 312,
    width: 349,
    height: 400,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  frame25: {
    left: 301,
    width: 40,
    top: 0,
    position: "absolute",
  },
  profileImgIcon: {
    top: 15,
    height: 48,
  },
  frame27: {
    height: 63,
    overflow: "hidden",
    top: 0,
  },
  shanelle: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  helloShanelle: {
    top: 23,
    height: 40,
    textAlign: "left",
    color: Color.colorBlack,
    width: 104,
    left: 0,
  },
  frame28: {
    left: 59,
    height: 63,
    overflow: "hidden",
    top: 0,
  },
  frame26: {
    width: 163,
    top: 0,
    left: 0,
    position: "absolute",
  },
  frame24: {
    left: 9,
    width: 341,
    top: 0,
    position: "absolute",
  },
  frame23: {
    width: 350,
    top: 17,
    left: 0,
    position: "absolute",
  },
  containerMenuContainerItem: {
    marginLeft: 101,
  },
  containerMenuContainer: {
    right: 0,
    bottom: 8,
    shadowColor: "rgba(20, 20, 20, 0.02)",
    shadowOffset: {
      width: 0,
      height: -1,
    },
    shadowRadius: 1,
    elevation: 1,
    shadowOpacity: 1,
    height: 73,
    paddingLeft: Padding.p_23xl,
    paddingRight: Padding.p_6xl,
    backgroundColor: Color.colorGray_200,
    left: 0,
    position: "absolute",
  },
  unionIcon: {
    width: 0,
    height: 0,
  },
  frameParent: {
    top: 26,
    height: 809,
    left: 0,
    position: "absolute",
    width: 360,
  },
  frameInner: {
    height: 835,
    width: 360,
  },
  frame: {
    top: -9,
    height: 820,
    justifyContent: "flex-end",
    left: 0,
    overflow: "hidden",
    width: 360,
  },
  homepublicPage: {
    backgroundColor: Color.colorLightgray,
    height: 800,
    overflow: "hidden",
    width: 360,
  },
});

export default HomePublicPage;
