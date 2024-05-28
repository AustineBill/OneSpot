import * as React from "react";

import { StyleSheet, Text, View, Pressable, ImageBackground, Image } from "react-native";
import { useNavigation, useRoute  } from "@react-navigation/native";
import { Color, FontSize, Border, FontFamily } from "../GlobalStyles";

const HistoryPage = () => {
  const navigation = useNavigation();

  const route = useRoute();
  const { name, address, selectedDate} = route.params || {};

const handleBack = () => {
  navigation.navigate("Profile");
};

  return (
    <View style={styles.historyPage}>

      <Pressable style={styles.arrowIcon} onPress = {handleBack}>
        <Image
          contentFit="cover"
          source={require("../assets/back-actiongoback.png")}/>
      </Pressable>

      <View style= {styles.historylayout}> 
        <Text style={styles.bookingHistory}>Booking History</Text>
      
      <View style= {styles.historybox}> 
      
        <Image
          style={[styles.timee4Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/timee-2.png")}
        />

        <Text style={styles.infoLayout}> {selectedDate} </Text>
        <Image
          style={[styles.image17Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/image-15.png")}
        />
        <Text style={styles.infoLayout}> {name} </Text>
        <Image
          style={[styles.timee6Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/timee-3.png")}
        />
        <Text style={styles.infoLayout}> {address} </Text>
      </View>

      
      

      </View>

        <ImageBackground
          style={styles.rectangleIcon}
          contentFit="cover"
          source={require("../assets/rectangle-61.png")}/>

        <Pressable
          style={styles.bookToday}
          onPress={() => navigation.navigate("BottomTabsRoot", { screen: "" })}>
          <Text style={styles.bookToday1}>
            BOOK TODAY
          </Text>
        </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  bookingHistory: {
    top: 5,
    fontSize: FontSize.size_xl,
    height: 30,
    textAlign: "center",
    display: "flex",
    color: Color.colorWhite,
    fontFamily: FontFamily.nunitoSans12ptBold,
    left: 100,
    position: "absolute",
  },
  arrowIcon: {
    bottom: 40,
    left: 20,
    width: 50,
    height: 50,
   
  },
  iconLayout: {
    height: 20,
    width: 20,
    position: "absolute",
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  infoLayout: {
   marginLeft: 30,
   marginTop: 5,
    
  },
  timee4Icon: {
    top: 5,
    left: 10,
  },
  image17Icon: {
    top: 30,
    left: 10,
  },
  timee6Icon: {
    top: 55,
    left: 10,
  },
  historylayout: {
    width: 350,
    backgroundColor: Color.colorGray_200,
    height: 550,
    overflow: "hidden",
    marginLeft: 20,
    marginBottom: 20,
  },

  historybox: {
    width: 310,
    backgroundColor: Color.colorWhite,
    height: 75,
    overflow: "hidden",
    marginLeft: 20,
    marginTop: 50,
    
  },
  confirm: {
    fontSize: FontSize.size_base_1,
    fontFamily: FontFamily.manropeBold,
    textAlign: "center",
    justifyContent: "center",
    width: 191,
    height: 38,
    display: "flex",
    color: Color.colorWhite,
  },
  rectangleIcon: {
    top: 700,
    left: 170,
    width: 200,
    height: 60,
    position: "absolute",
  },
  bookToday1: {
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.poppinsBold,
    width: 105,
    height: 26,
    display: "flex",
    color: Color.colorWhite,
    
  },
  bookToday: {
    left: 225,
    top: 720,
    position: "absolute",
  },
  historyPage: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: Color.colorLightgray,
   
  },
});

export default HistoryPage;
