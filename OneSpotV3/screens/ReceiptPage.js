import React from 'react';
import { Text, StyleSheet, View, Pressable, Alert } from "react-native";
import { Image } from "expo-image";
import { useNavigation, useRoute } from "@react-navigation/native";
import axios from 'axios';
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const ReceiptPage = ({ route }) => {
  const navigation = useNavigation();
  const { username, name, address, selectedFloor, selectedBlock, selectedSlot, duration, totalPrice, time, selectedDate } = route.params || {};

  const calculateDepartureTime = (arrivalTime, duration) => {
    const [time, meridiem] = arrivalTime.split(' ');
    let [hours] = time.split(':').map(Number);

    if (meridiem === 'PM' && hours !== 12) {
      hours += 12;
    } else if (meridiem === 'AM' && hours === 12) {
      hours = 0;
    }

    let departureHour = hours + parseInt(duration, 10);

    let departureMeridiem = 'AM';
    if (departureHour >= 24) {
      departureHour -= 24;
    }
    if (departureHour >= 12) {
      departureMeridiem = 'PM';
      if (departureHour > 12) {
        departureHour -= 12;
      }
    } else if (departureHour === 0) {
      departureHour = 12;
    }

    return `${departureHour} ${departureMeridiem}`;
  };

  const departureTime = calculateDepartureTime(time, duration);

  const saveReceipt = async () => {
    try {
      const receiptData = {
        accountName: username,
        totalCost: totalPrice,
        location: address,
        date: selectedDate,
        arrivalTime: time,
        departureTime: departureTime,
        totalDuration: duration,
        floor: selectedFloor,
        block: selectedBlock,
        slotId: selectedSlot.id,
      };

      console.log("Data to be sent:", receiptData);

      const response = await axios.post('http://192.168.1.6/onespot_api/receipt.php', receiptData);

      console.log("Response from server:", response.data);

      if (response.data.message === "New record created successfully") {
        Alert.alert("Success", "Receipt saved successfully");
        navigation.navigate("HistoryPage", { username, selectedDate, name, address });
      } else {
        Alert.alert("Error", "Failed to save the receipt: " + response.data.error);
      }
    } catch (error) {
      console.error("Error saving receipt:", error);
      Alert.alert("Error", "An error occurred while saving the receipt");
    }
  };

 
  return (
    <View style={[styles.receiptPage, styles.pageBg]}>
      <View style={styles.tabsPage}>

      <Text style={styles.invoice}>INVOICE</Text>
      
      <View style={[styles.inputDate, styles.inputLayout]}>
        <Text style={[styles.accountName, styles.timeFlexBox]}>
          Account Name: {username}
        </Text>
      </View>

        <View style={styles.inputLayout}>
          <Text style={[styles.TotalAmount, styles.timeFlexBox]}>
            Total Cost: {totalPrice}
          </Text>
        </View>

        <View style={ styles.inputDate2Position}>
          <Text style={[styles.location, styles.timeFlexBox]}> Location: {address} </Text>
          <Text style={[styles.date, styles.timeFlexBox]}>Date: {selectedDate}</Text>
          <Text style={[styles.arrivalTime, styles.timeFlexBox]}>Arrival Time: {time} </Text>
          <Text style={[styles.departurelTime, styles.timeFlexBox]}>Departure Time: {departureTime} </Text>
          <Text style={[styles.totalDuration, styles.timeFlexBox]}>Total Duration:  {duration} hours</Text>
          <Text style={[styles.floornumber, styles.timeFlexBox]}>Floor: {selectedFloor} </Text>
          <Text style={[styles.slotNumber, styles.timeFlexBox]}> Block  and Slot Number: {selectedBlock} - {selectedSlot?.id}</Text>   
        </View>
      </View>

        <Pressable style={styles.button} onPress={saveReceipt}>
          <Image
            style={styles.tabsPageChild}
            contentFit="cover"
            source={require("../assets/rectangle-74.png")}
          />
          <Text style={styles.saved}>Saved</Text>
        </Pressable>
        
    </View>
  );
};

const styles = StyleSheet.create({
  pageBg: {
    overflow: "hidden",
    backgroundColor: Color.colorGray_200,
  },
  frame2: {
    top: 183,
    backgroundColor: Color.colorLightgray,
    width: 315,
    height: 500,
    overflow: "hidden",
  },
  inputLayout: {
    height: 24,
    width: 315,
    left: 26,
    position: "absolute",
  },
  timeFlexBox: {
    textAlign: "left",
    color: Color.colorBlack,
  },
  inputDate2Position: {
    left: 10,
    width: 200,
    position: "absolute",
    top: 100,  
  },
  tabsLayout: {
    height: 48,
    width: 315,
    left: 26,
    position: "absolute",
  },
  TotalAmount: {
    top: 420,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_3xl,
    color: Color.colorBlack,
    position: "absolute",
  },

  accountName: {
    top: 500,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
    fontSize: FontSize.size_3xl,
    color: Color.colorBlack,
  },
 

  location: {
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
    width: 400,
    position: "absolute",
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end'
  },

  date: {
    top: 40,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
    left: 5,
    position: "absolute",
  },
  arrivalTime: {
    top: 80,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
    left: 5,
    position: "absolute",
  },
  departurelTime: {
    top: 120,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
    left: 5,
    position: "absolute",
  },
  totalDuration: {
    top: 160,
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    left: 5,
    fontSize: FontSize.size_base,
  },
  floornumber: {
    top: 200,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
    position: "absolute",
    left: 5,
  },
  slotNumber: {
    top: 240,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
    position: "absolute",
    width: 300,
  },
  invoice: { 
    top: 20,
    left: 130,
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.ralewayExtraBold,
    color: Color.colorBlack,
    position: "absolute",
  },
  
  tabsPageChild: {
    borderRadius: Border.br_mini,
    width: 280,
    height: 60,
  },
  saved: {
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.poppinsExtraBold,
    color: Color.colorBlack,
    textAlign: "center",
    bottom: 50,
  },
  button: {
    alignItems: "center",
    
    top: 80,
  },
  tabsPage: {
    top: 10,
    width: 350,
    backgroundColor: Color.colorLightgray,
    height: 550,
    overflow: "hidden",
    marginLeft: 20,
  },
  receiptPage: {
    flex: 1,
    width: "100%",
    height: 800,
    justifyContent: "center",
    flexDirection: "column",
  },
});

export default ReceiptPage;
