import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Pressable, ImageBackground, Image } from "react-native";
import { useNavigation, useRoute  } from "@react-navigation/native";
import { Color, FontSize,  FontFamily } from "../GlobalStyles";
import axios from "axios";



const HistoryPage = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { username, name, address, selectedDate} = route.params || {};
  const [bookingHistory, setBookingHistory] = useState([])

  const handleSaveBooking = async () => {
    try {
      const response = await axios.post("http://192.168.1.6/onespot_api/history.php", {
        username: username,
        name: name,
        address: address,
        selectedDate: selectedDate,
      });
  
      console.log(response.data);
      setBookingHistory(prevHistory => [...prevHistory, response.data]);
  
      navigation.navigate("Profile");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchBookingHistory();                                                                                                                                                                                                                                                                                       
    }, []);

  const fetchBookingHistory = async () => {
    try {
      const response = await axios.get("http://192.168.1.6/onespot_api/viewallbookings.php", {
        params: {
          username: username,
        },
      });
      console.log('API response:', response.data);  // Log the response
      setBookingHistory(response.data);
    } catch (error) {
      console.error("Error fetching booking history: ", error);
    }
  };

  return (
    <View style={styles.historyPage}>

      <Pressable style={styles.arrowIcon} onPress={handleSaveBooking} >
        <Image
          contentFit="cover"
          source={require("../assets/back-actiongoback.png")}/>
      </Pressable>

      <View style= {styles.historylayout}> 
        <Text style={styles.bookingHistory}>Booking History</Text>
        {bookingHistory.length > 0 ? (
          bookingHistory.map((transaction, index) => (
            <View key={index} style={styles.historybox}>
              <Image
                style={[styles.icon1, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/timee-2.png")}
              />
              <Text style={styles.infoLayout}>{transaction.selectedDate}</Text>
              <Image
                style={[styles.icon2, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/image-15.png")}
              />
              <Text style={styles.infoLayout}>{transaction.name}</Text>
              <Image
                style={[styles.icon3, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/timee-3.png")}
              />
              <Text style={styles.infoLayout}>{transaction.address}</Text>
            </View>
          ))
        ) : (
          <Text style={styles.noHistoryText}>No booking history available.</Text>
        )}
      </View>

        <ImageBackground
          style={styles.rectangleIcon}
          contentFit="cover"
          source={require("../assets/rectangle-61.png")}/>

        <Pressable
          style={styles.bookToday}
          onPress={handleSaveBooking}>
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
 
  icon1: {
    top: 5,
    left:5,
  },
  icon2: {
    top: 30,
    left: 5,
  },
  icon3: {
    top: 55,
    left: 5,
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
  noHistoryText: {
    textAlign: "center",
    marginTop: 250,
    color: Color.colorWhite,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.nunitoSans12ptRegular,
  },

  historybox: {
    width: 310,
    backgroundColor: Color.colorWhite,
    height: 75,
    overflow: "hidden",
    marginLeft: 20,
    marginTop: 20,
    top: 30,
    
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
