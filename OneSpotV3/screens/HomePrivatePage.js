import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const HomePrivatePage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.homeprivatePage}>
      <View style={[styles.findYourSpotParent, styles.searchBarIconPosition]}>
        <Text style={[styles.findYourSpot, styles.manilaFlexBox]}>
          Find your spot
        </Text>
        <View style={styles.frame}>
          <Text style={[styles.helloShanelle, styles.smStMesaFlexBox]}>
            <Text style={styles.helloTypo}>{`Hello, 
`}</Text>
            <Text style={styles.shanelle}>Shanelle</Text>
          </Text>
          <Image
            style={styles.profileImgIcon}
            contentFit="cover"
            source={require("../assets/profile-img.png")}
          />
        </View>
        <View style={styles.frame1}>
          <Image
            style={[styles.frameChild, styles.frameLayout]}
            contentFit="cover"
            source={require("../assets/rectangle-7.png")}
          />
          <Image
            style={[styles.frameItem, styles.frameLayout]}
            contentFit="cover"
            source={require("../assets/rectangle-6.png")}
          />
          <Pressable
            style={[styles.public, styles.publicPosition]}
            onPress={() =>
              navigation.navigate("BottomTabsRoot", { screen: "" })
            }
          >
            <Text style={[styles.public1, styles.public1Typo]}>PUBLIC</Text>
          </Pressable>
          <Text style={[styles.private, styles.public1Typo]}>PRIVATE</Text>
        </View>
        <View style={[styles.frame2, styles.frame2Layout]}>
          <Image
            style={[styles.searchBarIcon, styles.frame2Layout]}
            contentFit="cover"
            source={require("../assets/search-bar.png")}
          />
          <Text style={[styles.manila, styles.helloTypo]}>Manila</Text>
        </View>
        <Pressable
          style={styles.frame3}
          onPress={() => navigation.navigate("BookPage")}
        >
          <Text
            style={[styles.smManila, styles.smManilaTypo]}
          >{`SM Manila `}</Text>
          <Text style={[styles.parkNRide, styles.smManilaTypo]}>
            Park N’ Ride
          </Text>
          <Text
            style={[styles.jlgParking, styles.jlgParkingFlexBox]}
          >{`JLG Parking `}</Text>
          <View style={[styles.image8, styles.image8Layout]} />
          <Text
            style={[styles.smStMesa, styles.smStMesaTypo]}
          >{`SM St. Mesa `}</Text>
          <Pressable
            style={[
              styles.defaultStatedefaultWrapper,
              styles.jlgParkingFlexBox,
            ]}
            onPress={() => navigation.navigate("MapPage")}
          >
            <View style={styles.defaultStatedefault}>
              <Text style={[styles.reserve, styles.reserveTypo]}>Map view</Text>
              <Image
                style={[styles.mapComponentsvgIcon, styles.iconPosition1]}
                contentFit="cover"
                source={require("../assets/map-componentsvg.png")}
              />
            </View>
          </Pressable>
          <Image
            style={[styles.image11Icon, styles.iconPosition1]}
            contentFit="cover"
            source={require("../assets/image-11.png")}
          />
          <Image
            style={[styles.image12Icon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/image-12.png")}
          />
          <Image
            style={[styles.image7Icon, styles.image8Layout]}
            contentFit="cover"
            source={require("../assets/image-7.png")}
          />
          <Image
            style={[styles.image8Icon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/image-8.png")}
          />
        </Pressable>
        <Image
          style={styles.unionIcon}
          contentFit="cover"
          source={require("../assets/union.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchBarIconPosition: {
    top: 0,
    left: 0,
  },
  manilaFlexBox: {
    display: "flex",
    alignItems: "center",
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  smStMesaFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  frameLayout: {
    borderRadius: Border.br_69xl_7,
    height: 46,
    top: 0,
    position: "absolute",
  },
  publicPosition: {
    top: 9,
    position: "absolute",
  },
  public1Typo: {
    height: 27,
    color: Color.colorWhite,
    fontSize: FontSize.size_xl,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  frame2Layout: {
    height: 35,
    width: 305,
    position: "absolute",
  },
  helloTypo: {
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_base,
  },
  smManilaTypo: {
    alignItems: "flex-end",
    fontSize: FontSize.size_mini,
    color: Color.colorWhite,
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    position: "absolute",
  },
  jlgParkingFlexBox: {
    justifyContent: "center",
    position: "absolute",
  },
  image8Layout: {
    borderRadius: Border.br_3xs,
    top: 182,
    height: 100,
    position: "absolute",
  },
  smStMesaTypo: {
    bottom: 84,
    height: 20,
    alignItems: "flex-end",
    fontSize: FontSize.size_mini,
    color: Color.colorWhite,
    display: "flex",
    fontFamily: FontFamily.poppinsBold,
  },
  reserveTypo: {
    textAlign: "center",
    fontWeight: "700",
  },
  iconPosition1: {
    left: "50%",
    position: "absolute",
  },
  iconPosition: {
    left: 180,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  wrapperSpaceBlock: {
    marginLeft: 101,
    width: 30,
  },
  findYourSpot: {
    top: 113,
    fontSize: FontSize.size_6xl,
    width: 240,
    height: 45,
    alignItems: "center",
    fontFamily: FontFamily.poppinsBold,
    display: "flex",
    fontWeight: "700",
    left: 9,
  },
  shanelle: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  helloShanelle: {
    top: 23,
    left: 59,
    width: 104,
    height: 40,
    color: Color.colorBlack,
    textAlign: "left",
  },
  profileImgIcon: {
    top: 15,
    width: 48,
    height: 48,
    left: 0,
    position: "absolute",
  },
  frame: {
    top: 17,
    width: 341,
    height: 63,
    left: 9,
    position: "absolute",
    overflow: "hidden",
  },
  frameChild: {
    width: 185,
    left: 0,
  },
  frameItem: {
    left: 134,
    width: 189,
  },
  public1: {
    width: 82,
  },
  public: {
    left: 52,
  },
  private: {
    left: 190,
    width: 107,
    top: 9,
    position: "absolute",
  },
  frame1: {
    top: 185,
    width: 323,
    height: 46,
    left: 16,
    position: "absolute",
    overflow: "hidden",
  },
  searchBarIcon: {
    left: 0,
    top: 0,
  },
  manila: {
    top: 5,
    left: 34,
    width: 113,
    height: 26,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  frame2: {
    top: 258,
    left: 26,
    overflow: "hidden",
  },
  smManila: {
    bottom: 255,
    left: 37,
    width: 108,
    height: 24,
  },
  parkNRide: {
    bottom: 254,
    left: 197,
    height: 25,
    width: 107,
  },
  jlgParking: {
    width: 165,
    height: 20,
    textAlign: "center",
    fontWeight: "700",
    bottom: 84,
    alignItems: "flex-end",
    fontSize: FontSize.size_mini,
    color: Color.colorWhite,
    display: "flex",
    fontFamily: FontFamily.poppinsBold,
    left: 0,
  },
  image8: {
    left: 175,
    width: 129,
    height: 100,
  },
  smStMesa: {
    left: 200,
    width: 109,
    height: 20,
    textAlign: "left",
    position: "absolute",
    fontWeight: "700",
    bottom: 84,
  },
  reserve: {
    top: "19.05%",
    left: "30.47%",
    fontSize: FontSize.size_mid,
    lineHeight: 26,
    fontFamily: FontFamily.nunitoSans12ptBold,
    color: Color.colorDarkslateblue,
    position: "absolute",
  },
  mapComponentsvgIcon: {
    marginTop: -10,
    marginLeft: -51,
    top: "50%",
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  defaultStatedefault: {
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorWhitesmoke,
    height: 42,
    width: 128,
  },
  defaultStatedefaultWrapper: {
    top: 347,
    left: 191,
    width: 128,
    alignItems: "center",
  },
  image11Icon: {
    marginLeft: -145,
    top: 18,
    borderRadius: 12,
    width: 126,
    height: 100,
  },
  image12Icon: {
    top: 22,
    width: 127,
    height: 99,
  },
  image7Icon: {
    left: 17,
    width: 125,
    height: 100,
  },
  image8Icon: {
    top: 184,
    width: 124,
    height: 100,
  },
  frame3: {
    top: 312,
    width: 328,
    height: 400,
    backgroundColor: Color.colorGray_200,
    left: 16,
    position: "absolute",
    overflow: "hidden",
  },
  unionIcon: {
    width: 0,
    height: 0,
  },
  findYourSpotParent: {
    width: 360,
    height: 821,
    left: 0,
    position: "absolute",
  },
  homeprivatePage: {
    backgroundColor: Color.colorLightgray,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default HomePrivatePage;
