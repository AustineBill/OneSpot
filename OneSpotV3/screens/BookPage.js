import * as React from "react";
import { Text, StyleSheet, View, ImageBackground, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const BookPage = () => {
  const navigation = useNavigation(); 
  const route = useRoute();
  const { username, selectedImage, name, address, description, price, hour, rating, adds } = route.params || {};


  return (
    <View style={[styles.bookPage, styles.frameFlexBox1]}>
      <View style={styles.resortDetailRefreshpull}>
        <View style={[styles.overviewTitleContainer, styles.frameIconSpaceBlock]}>
          <Text style={[styles.overviewTitle, styles.priceLayout]}>Overview</Text>
        </View>

        <View style={[styles.frame, styles.frameFlexBox1]}>
          <View style={styles.frame1}>
            <Text style={[styles.country, styles.hoursClr]}>
              {address}
            </Text>

            <View style={[styles.tripCardContainer, styles.containerPosition]}>
              <View style={[styles.locationIcon, styles.iconLayout1]} />

              <ImageBackground
                style={[styles.frameIcon, styles.frameIconSpaceBlock]}
                resizeMode="cover"
                source={selectedImage}>
                <Text style={[styles.name, styles.nameTypo]}>{name}</Text>
              </ImageBackground>

              <Pressable
                style={styles.vector}
                onPress={() => navigation.navigate("BottomTabsRoot", { screen: "" })}
              >
                <Image
                  style={[styles.icon, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/vector.png")}
                />
              </Pressable>
            </View>
            <Image style={[styles.vectorIcon, styles.iconLayout]} contentFit="cover" source={require("../assets/vector1.png")} />
            <View style={[styles.starIcon, styles.iconLayout1]} />
          </View>
        </View>
        
        <View style={[styles.frame2, styles.frameFlexBox1]}>
          <View style={[styles.frame3, styles.frameFlexBox]}>
            <Image style={styles.vectorIcon1} contentFit="cover" source={require("../assets/vector2.png")} />
            <Text style={[styles.rating, styles.hoursClr]}>{rating}</Text>
          </View>
        </View>

        <View style={styles.frame4}>
          <View style={styles.overviewTextContainer}>
            <Text style={styles.overviewTextFlexo}>
              {description}
            </Text>
          </View>
          
          <Pressable style={styles.frameChild} onPress={() => navigation.navigate("ParkinginfoPage", { username, name, price, address, hour, adds})} >
            <Text style={[styles.bookNow, styles.priceTypo]}>BOOK NOW</Text>
          </Pressable>
          
          <View style = {styles.priceContainer}>
            <Text style={styles.hours}> Php {price} / {hour} hour{hour > 1 ? 's' : ''} </Text>
            <Text style={styles.adds}> + {adds} if exceeds </Text>
          </View>

          <View style={styles.imagesContainer}> 
            <Text style={[styles.images, styles.priceLayout]}>Images</Text>
            <View style={[styles.frame6, styles.frameFlexBox]}>
              <Image style={styles.imageIcon} contentFit="cover" source={require("../assets/image-23.png")} />
              <Image style={[styles.imageIconimage, styles.iconSpaceBlock]} contentFit="cover" source={require("../assets/image-24.png")} />
              <Image style={[styles.imageIconimage, styles.iconSpaceBlock]} contentFit="cover" source={require("../assets/image-25.png")} />
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
    textAlign: "center",
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
    top: 398,
    left: 21,
    width: 300,
    height: 16,
    
    lineHeight: 15,
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
    lineHeight: 15,
    color: "#9c9c9c",
    width: 342,
    height: 79,
    marginBottom: 5,
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
  },
  overviewTextContainer: {
      height: 83,
      justifyContent: "flex-end",
      alignItems: "center",
      width: 375,
      top: 0,
      left: 0,
      bottom: 80,
      position: "absolute",
      overflow: "hidden",
  },
  frameChild: {
    top: 230,
    left: 60,
    borderRadius: 24,
    backgroundColor: Color.colorLightsteelblue_200,
    width: 232,
    height: 47,  
  },
  bookNow: {
    top: 12,
    left: 0,
    fontSize: FontSize.size_3xl,
    lineHeight: 24,
    color: Color.colorBlack,
  },
  hours: {
    fontSize: FontSize.size_lg,
    height: 26,
    color: Color.colorWhite,
    fontSize: 17,
    lineHeight: 30,
    width: 150, 
    textAlign: "center",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
  },

  adds: {
    fontSize: FontSize.size_mid,
    top: 50,
    marginTop: 5,
    height: 20,
    color: Color.colorLightgray,
    fontSize: 15,
    lineHeight: 20,
  },
  priceContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 145,
    width: "100%",
    marginLeft: 110,
  },

  images: {
    fontSize: 17,
    lineHeight: 15,
    width: 60,
    top: 15,
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
  },
  imageIcon: {
    height: 74,
    width: 74,
  },
  imageIconimage: {
    height: 75,
  },


  frame6: {
    width: 245,
    marginTop: 9,
    height: 74,
    alignItems: "center",
  },
  imagesContainer: {
    top: 75,
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
    
    width: "100%",
    height: "100%",
    alignItems: "center",
    left: 15,
  },
  bookPage: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    height: "100%",
    overflow: "hidden",
    justifyContent: "center", 
    backgroundColor: Color.colorGray_200,
  

  },
});

export default BookPage;
