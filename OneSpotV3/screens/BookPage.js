import * as React from "react";
import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  Pressable,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const BookPage = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.bookPage, styles.frameFlexBox1]}>
      <View style={styles.resortDetailRefreshpull}>
        <View
          style={[styles.overviewTitleContainer, styles.frameIconSpaceBlock]}
        >
          <Text style={[styles.overviewTitle, styles.priceLayout]}>
            Overview
          </Text>
        </View>
        <View style={[styles.frame, styles.frameFlexBox1]}>
          <View style={styles.frame1}>
            <Text style={[styles.country, styles.hoursClr]}>
               7th Ave. corner 28th St. Bonifacio Global City
            </Text>
            <View style={[styles.tripCardContainer, styles.containerPosition]}>
              <View style={[styles.locationIcon, styles.iconLayout1]} />
              <ImageBackground
                style={[styles.frameIcon, styles.frameIconSpaceBlock]}
                resizeMode="cover"
                source={require("../assets/frame1.png")}
              >
                <Text style={[styles.name, styles.nameTypo]}>{`Uptown Parade 
Parking`}</Text>
              </ImageBackground>
              <Pressable
                style={styles.vector}
                onPress={() =>
                  navigation.navigate("BottomTabsRoot", { screen: "" })
                }
              >
                <Image
                  style={[styles.icon, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/vector.png")}
                />
              </Pressable>
            </View>
            <Image
              style={[styles.vectorIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/vector1.png")}
            />
            <View style={[styles.starIcon, styles.iconLayout1]} />
          </View>
        </View>
        <View style={[styles.frame2, styles.frameFlexBox1]}>
          <View style={[styles.frame3, styles.frameFlexBox]}>
            <Image
              style={styles.vectorIcon1}
              contentFit="cover"
              source={require("../assets/vector2.png")}
            />
            <Text style={[styles.rating, styles.hoursClr]}>4.7</Text>
          </View>
        </View>
        <View style={styles.frame4}>
          <View
            style={[styles.overviewTextContainer, styles.containerPosition]}
          >
            <Text style={[styles.overviewTextFlexo, styles.nameTypo]}>
              One Parkade offers 406 secure parking slots with 24/7 access,
              conveniently located just a short distance from Uptown Parade in
              Bonifacio Global City.
            </Text>
          </View>
          <Pressable
            style={styles.frameChild}
            onPress={() => navigation.navigate("ParkinginfoPage")}
          />
          <Text style={[styles.bookNow, styles.priceTypo]}>BOOK NOW</Text>
          <Image
            style={styles.image26Icon}
            contentFit="cover"
            source={require("../assets/image-26.png")}
          />
          <View style={styles.priceContainer}>
            <View style={[styles.frame5, styles.pricePosition]}>
              <Text style={[styles.hours, styles.hoursClr]}>/ 3 hours</Text>
            </View>
            <Text style={[styles.price, styles.pricePosition]}>Php 40.00</Text>
          </View>
          <View style={styles.imagesContainer}>
            <Text style={[styles.images, styles.priceLayout]}>Images</Text>
            <View style={[styles.frame6, styles.frameFlexBox]}>
              <Image
                style={styles.image23Icon}
                contentFit="cover"
                source={require("../assets/image-23.png")}
              />
              <Image
                style={[styles.image24Icon, styles.iconSpaceBlock]}
                contentFit="cover"
                source={require("../assets/image-24.png")}
              />
              <Image
                style={[styles.image25Icon, styles.iconSpaceBlock]}
                contentFit="cover"
                source={require("../assets/image-25.png")}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameFlexBox1: {
    justifyContent: "center",
    overflow: "hidden",
  },
  frameIconSpaceBlock: {
    paddingVertical: 0,
    justifyContent: "flex-end",
    position: "absolute",
    overflow: "hidden",
  },
  priceLayout: {
    height: 26,
    color: Color.colorWhite,
  },
  hoursClr: {
    color: Color.colorSilver,
    textAlign: "left",
  },
  containerPosition: {
    top: 0,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  iconLayout1: {
    height: 13,
    position: "absolute",
  },
  nameTypo: {
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  frameFlexBox: {
    flexDirection: "row",
    overflow: "hidden",
  },
  priceTypo: {
    textAlign: "right",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
  },
  pricePosition: {
    top: 18,
    position: "absolute",
  },
  iconSpaceBlock: {
    marginLeft: 11,
    width: 74,
  },
  overviewTitle: {
    fontSize: 20,
    lineHeight: 21,
    width: 121,
    height: 26,
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
  },
  overviewTitleContainer: {
    top: 457,
    height: 27,
    paddingHorizontal: 16,
    width: 375,
    left: 0,
  },
  country: {
    top: 399,
    left: 21,
    width: 300,
    height: 16,
    lineHeight: 14,
    fontSize: FontSize.size_sm_5,
    color: Color.colorSilver,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    position: "absolute",
  },
  locationIcon: {
    top: 478,
    left: 36,
    width: 10,
  },
  name: {
    fontSize: 27,
    lineHeight: 28,
    display: "flex",
    width: 282,
    height: 83,
    alignItems: "flex-end",
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
  },
  frameIcon: {
    top: 67,
    left: 6,
    width: 331,
    height: 319,
    paddingHorizontal: 6,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  vector: {
    left: "1.75%",
    top: "3.89%",
    right: "91.55%",
    bottom: "91.24%",
    width: "6.71%",
    height: "4.87%",
    position: "absolute",
  },
  tripCardContainer: {
    height: 411,
    width: 343,
  },
  vectorIcon: {
    height: "3.01%",
    width: "2.83%",
    top: "96.27%",
    right: "96.3%",
    bottom: "0.72%",
    left: "0.87%",
    position: "absolute",
  },
  starIcon: {
    top: 403,
    left: 291,
    width: 13,
    overflow: "hidden",
  },
  frame1: {
    height: 416,
    width: 343,
    overflow: "hidden",
  },
  frame: {
    top: 13,
    width: 354,
    alignItems: "flex-end",
    left: 0,
    position: "absolute",
  },
  vectorIcon1: {
    height: 12,
    width: 13,
  },
  rating: {
    width: 38,
    marginLeft: 6,
    height: 16,
    lineHeight: 14,
    fontSize: FontSize.size_sm_5,
    color: Color.colorSilver,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
  },
  frame3: {
    width: 57,
    height: 16,
  },
  frame2: {
    top: 432,
    width: 70,
    alignItems: "flex-end",
    left: 0,
    position: "absolute",
  },
  overviewTextFlexo: {
    fontSize: 13,
    lineHeight: 22,
    color: "#9c9c9c",
    width: 342,
    height: 79,
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
  },
  overviewTextContainer: {
    height: 83,
    justifyContent: "flex-end",
    alignItems: "center",
    width: 375,
  },
  frameChild: {
    top: 244,
    left: 68,
    borderRadius: 24,
    backgroundColor: Color.colorLightsteelblue_200,
    width: 232,
    height: 47,
    position: "absolute",
  },
  bookNow: {
    top: 256,
    left: 122,
    fontSize: FontSize.size_3xl,
    lineHeight: 24,
    color: Color.colorBlack,
    position: "absolute",
  },
  image26Icon: {
    top: 119,
    left: 271,
    height: 76,
    width: 74,
    position: "absolute",
  },
  hours: {
    fontSize: 11,
    lineHeight: 11,
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
    height: 20,
    width: 46,
  },
  frame5: {
    left: 76,
    height: 24,
    width: 46,
    justifyContent: "flex-end",
    alignItems: "center",
    overflow: "hidden",
  },
  price: {
    left: -49,
    fontSize: FontSize.size_base,
    lineHeight: 17,
    width: 123,
    textAlign: "right",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    height: 26,
    color: Color.colorWhite,
  },
  priceContainer: {
    top: 193,
    left: 115,
    width: 122,
    height: 51,
    position: "absolute",
    overflow: "hidden",
  },
  images: {
    fontSize: 17,
    lineHeight: 18,
    width: 121,
    height: 26,
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
  },
  image23Icon: {
    height: 74,
    width: 74,
  },
  image24Icon: {
    height: 73,
  },
  image25Icon: {
    height: 74,
  },
  frame6: {
    width: 245,
    marginTop: 9,
    height: 74,
    alignItems: "center",
  },
  imagesContainer: {
    top: 83,
    width: 359,
    height: 122,
    paddingLeft: 16,
    paddingTop: 2,
    paddingRight: 16,
    paddingBottom: 2,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  frame4: {
    top: 491,
    height: 291,
    width: 375,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  resortDetailRefreshpull: {
    backgroundColor: Color.colorGray_200,
    width: 360,
    height: 800,
    overflow: "hidden",
  },
  bookPage: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    alignItems: "center",
    width: "100%",
  },
});

export default BookPage;
