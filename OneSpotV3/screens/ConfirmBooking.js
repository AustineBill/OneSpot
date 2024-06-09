import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View, Pressable, TextInput } from "react-native";
import { Image } from "expo-image";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";
import { Picker } from '@react-native-picker/picker';

const ConfirmBooking = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { username, name, price, selectedBrand , address, hour, adds} = route.params || {};
  const { selectedFloor, selectedBlock, selectedSlot , selectedDate} = route.params;
  
  const [Time, setTime] = useState("");
  const [Total, setTotal] = useState("");
  const [Duration, setDuration] = useState('0');
  const [selectedMeridiem, setSelectedMeridiem] = useState('AM');

  const basePrice = price; 
  const baseHours = hour; 
  const additionalHourlyRate = adds; 

  const calculatePrice = () => {
    if (price === "FREE") {
      return 0;
    } else {
      const durationInHours = parseInt(Duration);
      if (durationInHours <= baseHours) {
        return basePrice;
      } else {
        const additionalHours = durationInHours - baseHours;
        const additionalCost = additionalHours * additionalHourlyRate;
  
        return basePrice + additionalCost;
      }
    }
  };

  useEffect(() => {
    const totalPrice = calculatePrice();
    setTotal(totalPrice.toString());
  }, [Duration]);

  

  return (
    <View style={styles.confirmBooking}>
      <View style={styles.passwordReset}>
        <View style={styles.containerContaineraspectra}>

          <Pressable
            style={[styles.containerContaineraspectraInner, styles.logFlexBox]}
            onPress={() => navigation.navigate("PayMethodPage", { username, name, address, selectedFloor, 
              selectedBlock, selectedSlot, duration: Duration, time: `${Time} ${selectedMeridiem}`,
              selectedDate, totalPrice: calculatePrice()
             })}
          >
            <View style={styles.logFlexBox}>
              <View
                style={[styles.logInActionresetPassword, styles.logFlexBox]}
              >
                <Text style={styles.confirmBooking1}>Confirm Booking</Text>
              </View>
            </View>
          </Pressable>


          <Pressable
           style={styles.frame}
           onPress={() => navigation.navigate("CarBookSlot")}>
            <Image
              style={styles.vectorIcon}
              contentFit="cover"
              source={require("../assets/vector.png")}
            />
          </Pressable>

          <Text style={styles.bookingDetails}>Booking Details</Text>

        
            <Text style={styles.CarModel}>{selectedBrand}</Text>
        
          <View style={[styles.frame2, styles.frame2Position]}>
            <View style={[styles.timeContainer, styles.setTime]}>
              <Text style={styles.Titlelabel}>Time</Text>
              <Picker
                selectedValue={Time}
                onValueChange={(itemValue) => setTime(itemValue)}
                style={styles.Hourpicker}>
                 
                <Picker.Item label="Time" value="" />
                {[...Array(24)].map((_, i) => (
                  <Picker.Item label={String(i + 1)} value={String(i + 1)} key={i} />
                ))}
              </Picker>

           
              <Picker
                selectedValue={selectedMeridiem}
                onValueChange={(itemValue) => setSelectedMeridiem(itemValue)}
                style={styles.Merpicker}>
                <Picker.Item label="AM" value="AM" />
                <Picker.Item label="PM" value="PM" />
              </Picker>

            </View>
             
            
              <View style={[styles.FloorBox, styles.emailChildBg]} />
              <Text style={[styles.SetFloor, styles.Titlelabel]}>Floor Location</Text>
        
            

            <View style={styles.setDuration}>
            <Text style={styles.Titlelabel}>How long do you stay?</Text>
              <Picker
                selectedValue={Duration}
                onValueChange={(itemValue) => setDuration(itemValue)}
                style={styles.picker}>
                <Picker.Item label="Select Hour" value="" />
                {[...Array(24)].map((_, i) => (
                  <Picker.Item label={`${i + 1} hour${i > 0 ? 's' : ''}`} value={String(i + 1)} key={i} />
                ))}
              </Picker>
            </View>

            <View style={[styles.email4, styles.emailPosition]}>
              <View style={[styles.emailChild1, styles.emailChildBg]} />
              <Text  style={[styles.SetBlock, styles.Titlelabel]}>
                Select Slot
              </Text>
            </View>

          
            
            <View style={[styles.TotalBox, styles.emailChildBg]} />
              <Text  style={[styles.setTotal, styles.Titlelabel]}>
                Total
              </Text>
            </View>

          
            <Text style={styles.total}>Php: {calculatePrice()}</Text>
            <Text style={styles.floor}>{selectedFloor}</Text>
            <Text style={styles.block}>{selectedBlock} - {JSON.stringify(selectedSlot.id)}</Text>

        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  logFlexBox: {
    width: 309,
    justifyContent: "center",
    alignItems: "center",
  },

  fieldContainer: {
    marginLeft: 40,
    marginRight: 20,
  },

  timeContainer: {
    marginLeft: 40,
    marginRight: 20,
    flexDirection: 'row', 
    justifyContent: 'space-between',
  },


  Titlelabel: {
    fontSize: 18,
    color: "black",
    marginBottom: 10,
    textAlign: "left",
  },

 label: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: "left",
    color: Color.colorWhite,
  },

  picker: {
    backgroundColor: Color.colorGray_100,
    height: 50, 
    borderWidth: 1,
    borderColor: "black",
    color: Color.colorWhite,
  },


  Hourpicker: {
    backgroundColor: Color.colorGray_100,
    height: 50, 
    borderWidth: 1,
    borderColor: "black",
    marginTop: 40,
    width: 120,
    marginLeft: -40, 
    color: Color.colorWhite,
   
  },

  Merpicker: {
    backgroundColor: Color.colorGray_100,
    height: 50, 
    borderWidth: 1,
    borderColor: "black",
    left: 5, 
    top: 40,
    width: 110,
    color: Color.colorWhite,
  },
  textInput: {
    height: 50,
    backgroundColor: Color.colorGray_100,
    borderColor: "black",
    borderWidth: 1,
    paddingHorizontal: 10,
    width: 235,
  },
  setTime: {
    marginTop: 300,
    position: "absolute",
    
    
  },
  setDuration: {
    marginTop: 20,
    left: 40,
    width: 240,
    
  },
  setTotal: {
    marginTop: 400,
    position: "absolute",
    marginLeft: 40,
  },
  SetFloor: {
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    top: 220,
    left: 40,
    position: "absolute",
  },
  SetBlock: {
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    
    top: 10,
    position: "absolute",
  },

  frame2Position: {
    left: 39,
    position: "absolute",
  },
  emailPosition: {
    left: 40,
    width: 235,
  },

  emailChildBg: {
    backgroundColor: Color.colorGray_100,
    height: 44,
  },

 
  time: {
    height: 46,
    left: 14,
    width: 292,
    fontSize: FontSize.size_lg,
    color: Color.colorAliceblue_100,
    fontFamily: FontFamily.manropeSemiBold,
    fontWeight: "600",
    textAlign: "center",
    position: "absolute",
    top: 346,
  },

  total: {
    marginTop: 630,
    height: 46,
    left: 50,
    width: 292,
    fontSize: FontSize.size_lg,
    color: Color.colorWhite,
    fontFamily: FontFamily.manropeSemiBold,
    fontWeight: "600",
    textAlign: "center",
    position: "absolute",
  },
 
  floor: {
    top: 440,
    left: 50,
    width: 292,
    fontSize: FontSize.size_lg,
    color: Color.colorAliceblue_100,
    fontFamily: FontFamily.manropeSemiBold,
    fontWeight: "600",
    textAlign: "center",
    position: "absolute",
  },

  block: {
    color: Color.colorAliceblue_100,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    textAlign: "center",
    position: "absolute",
    top: 350,
    left: 50,
    width: 292,
    fontSize: FontSize.size_lg,
    height: 31,
  },
  confirmBooking1: {
    fontSize: FontSize.size_6xl,
    color: Color.colorBlack, 
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",  
  },
  logInActionresetPassword: {
    borderRadius: Border.br_69xl_7,
    backgroundColor: Color.colorLightsteelblue_200,
    height: 58,
  },
  containerContaineraspectraInner: {
    top: 704,
    left: 36,
    position: "absolute",
  },
  bookingDetails: {
    left: 200,
    textAlign: "left",
    color: Color.colorWhite,
    fontSize: FontSize.size_xl,
    display: "flex",
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
    top: 30,
    position: "absolute",
  },
  vectorIcon: {
    height: "45.15%",
    width: "6.2%",
    top: "36.12%",
    right: "93.8%",
    bottom: "18.74%",
    left: "0%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  frame: {
    top: 14,
    left: 28,
    width: 371,
    height: 44,
    position: "absolute",
    overflow: "hidden",
  },
  CarModel: {
    marginTop: 100,
    fontSize: FontSize.size_6xl,
    color: "#dae4ff",
    fontFamily: FontFamily.manropeSemiBold,
    fontWeight: "600",
    position: "absolute",
    left: 50, 
  },


  emailChild1: {
    top: 42,
    borderRadius: 6,
    backgroundColor: Color.colorGray_100,
    width: 235,
    left: 0,
    position: "absolute",
  },

  FloorBox: {
    top: 250,
    borderRadius: 6,
    backgroundColor: Color.colorGray_100,
    width: 235,
    left: 40,
    position: "absolute",
  },
  TotalBox: {
    top: 440,
    borderRadius: 6,
    backgroundColor: Color.colorGray_100,
    width: 235,
    left: 40,
    position: "absolute",
  },

  email4: {
    top: 115,
    height: 86,
    width: 235,
    position: "absolute",
  },
  frame2: {
    top: 183,
    backgroundColor: Color.colorLightgray,
    width: 315,
    height: 500,
    overflow: "hidden",
  },
  containerContaineraspectra: {
    height: 812,
    width: 375,
    overflow: "hidden",
  },
  passwordReset: {
    left: -15,
    backgroundColor: Color.colorGray_200,
    justifyContent: "center",
    alignItems: "center",
    top: 0,
    width: 410  ,
    position: "absolute",
    overflow: "hidden",
  },
  confirmBooking: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
});

export default ConfirmBooking;
