    import * as React from "react";
    import {StyleSheet, Text, Pressable, View, Image, Platform, TouchableOpacity} from "react-native";
    import { useNavigation, useRoute } from "@react-navigation/native";
    import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

    const Profile = ({ route }) => {
      const navigation = useNavigation();

      const { username } = route.params;
      const { name, address, selectedDate} = route.params || {};

    
      const handleBack = () => {
        //navigation.navigate("BottomTabsRoot", { screen: "Profile" , params: { username }});
        navigation.navigate("Profile", { username });
      };


      return (
        <View style={styles.profile}>

    

            <View style={styles.frameLayout2}>
              <Image
                style={styles.frameChild}
                contentFit="cover"
                source={require("../assets/rectangle-132.png")}
              />

              <View style={styles.frameFlexBox}>
                <Pressable onPress={() => navigation.navigate("HistoryPage")}>
                  <Text style={styles.viewAll}>
                    View all
                  </Text>
                </Pressable>
              </View>
            </View>

            

            <View style={[styles.frame2, styles.frameContainerFlexBox]}>
              <Text style={styles.profile1}>Profile</Text>
              
              
              <TouchableOpacity onPress={() => navigation.navigate("ChangeProfile")}>
                <Image
                  style={styles.pfpSettings1}
                  contentFit="cover"
                  source={require("../assets/pfp--settings-1.png")}
                />
              </TouchableOpacity>
           
            </View>


            
            <View style={styles.frame3}>
                <Image
                  style={styles.profileImgIcon}
                  contentFit="cover"
                  source={require("../assets/profile-img1.png")}/>
              
                <Text style={styles.name}>{username}</Text>
              </View>
            
              
            <View style={[styles.frame4, styles.frameLayout1]}>
              <Pressable
                style={styles.editProfile}
                onPress={() => navigation.navigate("EditProfPage")}
              >
                <Text style={[styles.editProfile1, styles.nameFlexBox]}>
                  Edit profile 
                </Text>
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

              <Image
                style={[styles.arrowBackIcon1, styles.arrowIconLayout]}
                contentFit="cover"
                onPress={handleBack}
                source={require("../assets/arrowback2.png")}
              />

              <Pressable
                style={styles.changePassword}
                contentFit="cover"
                onPress={() => navigation.navigate("ResetPassPage")}
              >
                <Text style={[styles.editProfile1, styles.nameFlexBox]}>
                  Change password
                </Text>
              </Pressable>

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
            </View>

            <View style= {styles.historybox}> 
              <Image
                style={[styles.Icon4, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/timee-2.png")}
              />
               <Text style={styles.infoLayout}> {selectedDate} </Text>
              <Image
                style={[styles.Icon5, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/image-15.png")}
              />
               <Text style={styles.infoLayout}> {name} </Text>
              <Image
                style={[styles.Icon6, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/timee-3.png")}
              />
               <Text style={styles.infoLayout}> {address} </Text>
            </View>

        </View>
      );
    };



  const styles = StyleSheet.create({
  
    frameLayout2: {
      top: 270,
      alignItems: "center",
    },
    frameFlexBox: {
      top: 210,
      left: 260,
      position: "absolute",
    },
    nameFlexBox: {
      alignItems: "center",
      display: "flex",
      textAlign: "left",
      marginLeft: 20,
    },
    logoutTypo: {
      fontSize: FontSize.size_lg,
      alignItems: "center",
      display: "flex",
      textAlign: "left",
      fontFamily: FontFamily.nunitoSans12ptBold,
      fontWeight: "700",
      position: "absolute",
      marginLeft: 20,
    },
    historybox: {
      width: 290,
      backgroundColor: Color.colorWhite,
      height: 60,
      top: -20,
    },
    frameContainerFlexBox: {
      flexDirection: "row",
      position: "absolute",
    },

    frameContainerFlexBox1: {
      flexDirection: "row",
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
      flex: 1,
      flexDirection: 'row',
      alignItems: 'flex-end'
      },
    infoLayout: {
      marginLeft: 30,
      marginTop: 10,
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
      width: 330, 
      height: 240
    },
    viewAll: {
      textDecorationLine: "underline", 
      color: Color.colorWhite,
      fontFamily: FontFamily.nunitoSans12ptBold,
      fontWeight: "700",
      fontSize: FontSize.size_mid, 
    },
    logout: {
      height: "100%",
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
      fontSize: 40,
      lineHeight: 50,
      fontWeight: "600",
      fontFamily: FontFamily.poppinsSemiBold,
      width: 140,
      height: 50,
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
      top: 40,
      height: 60,
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
      fontSize: FontSize.size_6xl,
      lineHeight: 50,
      fontFamily: FontFamily.poppinsBold,
      width: 200,
      height: 50,
      marginBottom: 30,
      marginLeft: 17,
      color: Color.colorGray_200,
      fontWeight: "700",
      alignItems: "center",
    },
    frame3: {
      bottom: 270,
      width: 300,
      alignItems: "flex-end",
      overflow: "hidden",
      flexDirection: "row",
      //position: "absolute",
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
      width: 200,
      height: 25,
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
      top: 440,
      height: 77,
      
    },

    november252023Container: {
      left: 28,
      color: Color.colorGray_200,
      top: 4,
    },
    Icon4: {   
      top: 4,
      left: 9,
    },
    Icon5: {
      top: 39,
      left: 9,
      
    },
    Icon6: {
      top: 21, 
      left: 9,
    },
    attachButton: {
      left: -90,
      color: "blue", 
      top: -210,
    },
    removePhotoButton: {
      left: -30  ,
      color: "red",
      top: -230,
    },
    attachedPhotoContainer: {
      flexDirection: "row",
    
    },
    attachedPhoto: {
      width: 50,
      height: 50,
      borderRadius: 5,
      marginRight: 10,
    },
    
    profile: {
      backgroundColor: Color.colorLightgray,
      height: 800,
      flex: 1,
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
      overflow: "hidden",
      
      
    },
  });

  export default Profile;
