  import * as React from "react";
  import {StyleSheet, Text, Pressable, View,} from "react-native";
  import { Image } from "expo-image";
  import { useState } from 'react';
  import { useNavigation } from "@react-navigation/native";
  import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

  const Profile = ({ style, Username}) => {

    const [showForm, setShowForm] = useState(false);
    const navigation = useNavigation();


    const handleBack = () => {
      navigation.navigate("Profile");
    };

    const toggleForm = () => {
      setShowForm(!showForm);
    };

    const handleAttachPhoto = (photo) => {
      setPhotos([...photos, photo]);
    };
  
    // Handler to remove attached photo from the photos state
    const handleRemovePhoto = (index) => {
      const updatedPhotos = photos.filter((_, i) => i !== index);
      setPhotos(updatedPhotos);
    };  

    return (
      <View style={[styles.profile, style, styles.containerLayout1]}>
        <View style={[styles.containerContainer, styles.containerLayout1]}>
          <View style={[styles.frame, styles.frameLayout2]}>
            <Image
              style={[styles.frameChild, styles.frameLayout2]}
              contentFit="cover"
              source={require("../assets/rectangle-132.png")}
            />
            <View style={[styles.frame1, styles.frameFlexBox]}>
              <Pressable onPress={() => navigation.navigate("HistoryPage")}>
                <Text style={[styles.viewAll1, styles.nameFlexBox]}>
                  View all
                </Text>
              </Pressable>
            </View>
          </View>

          <Image
            style={styles.lineStrokeIcon}
            contentFit="cover"
            source={require("../assets/line-stroke.png")}
          />
          <View style={[styles.frame2, styles.frameContainerFlexBox]}>
            <Text style={styles.profile1}>Profile</Text>
            <Image
              style={styles.pfpSettings1}
              contentFit="cover"
              source={require("../assets/pfp--settings-1.png")}
            />
          </View>

          <Pressable>
          <View style={[styles.frame3, styles.frameContainerFlexBox]}>
            <Image
              style={styles.profileImgIcon}
              contentFit="cover"
              onPress={toggleForm}
              source={require("../assets/profile-img1.png")}

              />
              <Text style={[styles.name, styles.nameFlexBox]}>{`${Username}`}</Text>
            </View>
          </Pressable>

          {showForm && (
          <View style={styles.formContainer}>
            {/* Form fields for attaching photos */}
            <TextInput
              style={styles.input}
              placeholder="Attach photo"
              onChangeText={handleAttachPhoto}
            />
            {photos.map((photo, index) => (
              <View key={index} style={styles.attachedPhoto}>
                <Image
                  source={{ uri: photo }}
                  style={styles.attachedPhotoImage}
                  contentFit="cover"
                />
                <Pressable onPress={() => handleRemovePhoto(index)}>
                  <Text style={styles.removePhotoButton}>Remove</Text>
                </Pressable>
              </View>
            ))}
            {/* Add more input fields or components for attaching photos */}
          </View>
        )}

          <View style={[styles.frame4, styles.frameLayout1]}>
            <Pressable
              style={styles.editProfile}
              onPress={() => navigation.navigate("EditProfPage")}
            >
              <Text
                style={[styles.editProfile1, styles.nameFlexBox]}
              >{`Edit profile `}</Text>
            </Pressable>

            <Image
              style={styles.arrowBackIcon}
              contentFit="cover"
              onPress={handleBack}
              source={require("../assets/arrowback1.png")}
            />
            <Pressable
              style={styles.changePnumber}
              onPress={() => navigation.navigate("ResetNumPage")}
            >
              <Text style={[styles.editProfile1, styles.nameFlexBox]}>
                Change phone number
              </Text>
            </Pressable>

            <Pressable
              style={styles.changePassword}
              onPress={() => navigation.navigate("ResetPassPage")}
            >
              <Text style={[styles.editProfile1, styles.nameFlexBox]}>
                Change password
              </Text>
            </Pressable>
            <Image
              style={[styles.arrowBackIcon1, styles.arrowIconLayout]}
              contentFit="cover"
              onPress={handleBack}
              source={require("../assets/arrowback2.png")}
            />
            <Image
              style={[styles.arrowBackIcon2, styles.arrowIconLayout]}
              contentFit="cover"
              onPress={handleBack}
              source={require("../assets/arrowback3.png")}
            />
          </View>

          <Pressable
            style={styles.default}
            onPress={() => navigation.navigate("LoginPage")}
          >
            <Text style={[styles.logout, styles.logoutTypo]}>Logout</Text>
          </Pressable>

          <View style={[styles.frame5, styles.frameLayout1]}>
            <Text style={[styles.bookingHistory, styles.logoutTypo]}>
              Booking History
            </Text>
            <Text style={[styles.july182023Container, styles.containerLayout]}>
              <Text style={styles.july182023Container1}>
                <Text style={styles.viewAll1Typo}>{`July 18, 2023
  `}</Text>
                <Text style={styles.paseoCenterParking}>{`Paseo Center Parking 
  Valero St., Corner, Salcedo Village, Makati City`}</Text>
              </Text>
            </Text>
            <Image
              style={[styles.timee2Icon, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/timee-2.png")}
            />
            <Image
              style={[styles.timee3Icon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/timee-3.png")}
            />
            <Image
              style={[styles.image15Icon, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/image-15.png")}
            />
          </View>
          <View style={[styles.frame6, styles.frameLayout]}>
            <Image
              style={[styles.frameItem, styles.frameLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-135.png")}
            />
            <Text
              style={[styles.november252023Container, styles.containerLayout]}
            >
              <Text style={styles.july182023Container1}>
                <Text style={styles.viewAll1Typo}>{`November 25, 2023
  `}</Text>
                <Text style={styles.paseoCenterParking}>{`OZ Cark Park
  Amorsolo St., Manila City `}</Text>
              </Text>
            </Text>
            <Image
              style={[styles.timee4Icon, styles.iconPosition]}
              contentFit="cover"
              source={require("../assets/timee-2.png")}
            />
            <Image
              style={[styles.timee5Icon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/timee-3.png")}
            />
            <Image
              style={[styles.image16Icon, styles.iconPosition]}
              contentFit="cover"
              source={require("../assets/image-15.png")}
            />
          </View>
          <View
            style={[styles.containerContainerChild, styles.containerChildLayout]}
          />
        </View>
        <View
          style={[styles.containerMenuContainer, styles.frameContainerFlexBox]}
        >
          <Image
            style={styles.containerChildLayout}
            contentFit="cover"
            source={require("../assets/frame-47.png")}
          />
          <Image
            style={[styles.searchStateSetsearchIcon, styles.containerChildLayout]}
            contentFit="cover"
            source={require("../assets/search-statesetsearch.png")}
          />
          <Image
            style={[styles.searchStateSetsearchIcon, styles.containerChildLayout]}
            contentFit="cover"
            source={require("../assets/frame-54.png")}
          />
        </View>
      </View>
    );
  };



const styles = StyleSheet.create({
  containerLayout1: {
    height: 800,
    width: 360,
  },
  frameLayout2: {
    height: 209,
    position: "absolute",
  },
  frameFlexBox: {
    alignItems: "flex-end",
    overflow: "hidden",
  },
  nameFlexBox: {
    alignItems: "center",
    display: "flex",
    textAlign: "left",
  },
  logoutTypo: {
    fontSize: FontSize.size_mini,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.nunitoSans12ptBold,
    fontWeight: "700",
    position: "absolute",
  },
  frameContainerFlexBox: {
    flexDirection: "row",
    position: "absolute",
  },
  frameLayout1: {
    width: 317,
    overflow: "hidden",
    position: "absolute",
  },
  arrowIconLayout: {
    height: "19.82%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  containerLayout: {
    height: 46,
    width: 281,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  iconLayout1: {
    width: 14,
    position: "absolute",
  },
  iconLayout: {
    height: 11,
    width: 12,
    position: "absolute",
  },
  frameLayout: {
    height: 54,
    width: 295,
    position: "absolute",
  },
  iconPosition: {
    left: 8,
    width: 14,
    position: "absolute",
  },
  containerChildLayout: {
    height: 30,
    width: 30,
  },
  frameChild: {
    left: 12,
    width: 335,
    top: 0,
    height: 200
  },
  viewAll1: {
    textDecorationLine: "underline", // Update this line
    width: 59,
    height: 19,
    color: Color.colorWhite,
    fontFamily: FontFamily.nunitoSans12ptBold,
    fontWeight: "700",
    fontSize: FontSize.size_xs,
    alignItems: "center",
  },
  frame1: {
    top: 180,
    left: 278,
    width: 69,
    height: 29,
    justifyContent: "center",
    position: "absolute",
  },
  frame: {
    top: 448,
    left: 1,
    width: 347,
    overflow: "hidden",
  },
  logout: {
    height: "100%",
    top: "0%",
    left: "0%",
    color: Color.colorGray_200,
    width: "100%",
  },
  default: {
    top: 385,
    width: 68,
    height: 31,
    left: 17,
    position: "absolute",
  },
  lineStrokeIcon: {
    top: 552,
    height: 1,
    left: 20,
    width: 335,
    position: "absolute",
  },
  profile1: {
    fontSize: 35,
    lineHeight: 35,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    width: 140,
    height: 35,
    color: Color.colorGray_200,
    display: "flex",
    textAlign: "left",
    alignItems: "flex-end",
  },
  pfpSettings1: {
    width: 52,
    marginLeft: 143,
    height: 66,
  },
  frame2: {
    top: 20,
    height: 66,
    left: 20,
    alignItems: "flex-end",
    overflow: "hidden",
    width: 335,
  },
  profileImgIcon: {
    width: 113,
    height: 113,
  },
  name: {
    fontSize: FontSize.size_xl,
    lineHeight: 20,
    fontFamily: FontFamily.poppinsBold,
    width: 201,
    height: 42,
    marginLeft: 17,
    color: Color.colorGray_200,
    fontWeight: "700",
    alignItems: "center",
  },
  frame3: {
    top: 126,
    width: 331,
    height: 117,
    left: 17,
    alignItems: "flex-end",
    overflow: "hidden",
  },
  editProfile1: {
    fontSize: FontSize.size_lg,
    width: 316,
    height: 38,
    fontFamily: FontFamily.nunitoSans12ptRegular,
    color: Color.colorGray_200,
  },
  editProfile: {
    bottom: 72,
    left: 0,
    position: "absolute",
  },
  arrowBackIcon: {
    height: "22.36%",
    width: "7.77%",
    top: "44%",
    right: "0.03%",
    bottom: "33.64%",
    left: "92.2%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  changePnumber: {
    bottom: 37,
    left: 0,
    position: "absolute",
  },
  changePassword: {
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  arrowBackIcon1: {
    width: "7.48%",
    top: "14.45%",
    right: "0%",
    bottom: "65.73%",
    left: "92.52%",
  },
  arrowBackIcon2: {
    width: "6.66%",
    top: "78.91%",
    right: "0.22%",
    bottom: "1.27%",
    left: "93.12%",
  },
  frame4: {
    top: 260,
    height: 110,
    left: 17,
  },
  bookingHistory: {
    width: 119,
    height: 23,
    color: Color.colorWhite,
    top: 0,
    left: 0,
  },
  viewAll1Typo: {
    fontFamily: FontFamily.nunitoSans12ptBold,
    fontWeight: "700",
  },
  paseoCenterParking: {
    fontFamily: FontFamily.nunitoSans12ptRegular,
  },
  july182023Container1: {
    width: "100%",
  },
  july182023Container: {
    top: 31,
    left: 36,
    color: Color.colorLightgray,
  },
  timee2Icon: {
    top: 32,
    height: 13,
    left: 17,
  },
  timee3Icon: {
    top: 64,
    left: 20,
  },
  image15Icon: {
    top: 48,
    left: 18,
    height: 12,
  },
  frame5: {
    top: 459,
    height: 77,
    left: 20,
  },
  frameItem: {
    top: 0,
    left: 0,
  },
  november252023Container: {
    left: 28,
    color: Color.colorGray_200,
    top: 4,
  },
  timee4Icon: {
    height: 13,
    top: 4,
  },
  timee5Icon: {
    top: 39,
    left: 9,
  },
  image16Icon: {
    top: 21,
    height: 12,
  },
  frame6: {
    top: 562,
    left: 32,
    overflow: "hidden",
  },
  containerContainerChild: {
    top: 680,
    left: 147,
    position: "absolute",
  },
  containerContainer: {
    overflow: "hidden",
    left: 0,
    top: 4,
    position: "absolute",
  },
  searchStateSetsearchIcon: {
    marginLeft: 101,
  },
  containerMenuContainer: {
    right: 0,
    bottom: -2,
    left: -2,
    shadowColor: "rgba(20, 20, 20, 0.02)",
    shadowOffset: {
      width: 0,
      height: -1,
    },
    shadowRadius: 1,
    elevation: 1,
    shadowOpacity: 1,
    backgroundColor: Color.colorMidnightblue,
    height: 90,
    paddingHorizontal: Padding.p_23xl,
    paddingVertical: Padding.p_7xl,
  },
  profile: {
    backgroundColor: Color.colorLightgray,
  },
});

export default Profile;
