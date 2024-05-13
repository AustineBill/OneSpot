import React, { useState } from "react";
import { Text, StyleSheet, View, ScrollView } from "react-native";
import { Button } from "react-native-paper";
import { CheckBox } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const TAA = () => {
  const navigation = useNavigation();
  const [activeStateactiveActionchecked, setActiveStateactiveActionchecked] =
    useState(true);

  const handleNext = () => {
    navigation.navigate("Profile");
  };
  

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.taa}>
        <Text style={[styles.termsAndAgreement, styles.andFlexBox]}>
          Terms and Agreement
        </Text>

        <Text style={styles.thisAgreementIsContainer}>
          <Text style={styles.thisAgreementIsMadeAndEnt}>
            <Text style={styles.thisAgreementIs}>
              This agreement is made and entered into by and between OneSpot, and
              you, the user of the OneSpot mobile application.
            </Text>
          </Text>
        </Text>

        <Text style={styles.acceptanceByTermsByDownload}>
          <Text style={styles.acceptanceByTerms}>Acceptance by Terms </Text>
          <Text style={styles.blankLine}>
            By downloading, installing, or using the Application, you agree to be bound by the terms and conditions of this Agreement. If you disagree with any part of this Agreement, you may not use the Application.
          </Text>
          <Text style={styles.acceptanceByTerms}>Use of the Application</Text>
          <Text style={styles.blankLine}>
            You may only use the Application for lawful purposes and in accordance with this Agreement.
            You are responsible for creating and maintaining a secure password for your Account.
            You are solely responsible for all activity that occurs under your Account.
            You agree not to share your Account information with any third party.
            You agree not to use the Application in any manner that could damage, disable, overburden, or impair the Application or underlying infrastructure.
          </Text>
          <Text style={styles.acceptanceByTerms}>Parking Services</Text>
          <Text style={styles.blankLine}>
            The Application allows you to find, reserve, and pay for parking at participating Parking Facilities.
            Real-time availability and pricing information for parking spaces is displayed to the best of the Company's ability.
            You are responsible for complying with all parking rules and regulations at the Parking Facility.
            The Company is not responsible for any damage or loss to your vehicle while parked at a Parking Facility.
          </Text>
          <Text style={styles.acceptanceByTerms}> Payment</Text>
          <Text style={styles.blankLine}>
            You agree to pay all fees associated with Parking Sessions booked through the Application.
            The Company reserves the right to change pricing for Parking Sessions at any time.
            Payment methods available through the Application are subject to change.
            You are responsible for any fees associated with your chosen payment method.
          </Text>
          <Text style={styles.acceptanceByTerms}>User Data</Text>
          <Text style={styles.blankLine}>
            The Company collects certain information about you when you use the Application, such as your location, vehicle information, and payment information.
            This information is used to provide and improve the Application's services.
            The Company will not share your personal information with third parties without your consent, except as required by law.
            You can review and manage your data privacy settings within the Application.
          </Text>
          <Text style={styles.acceptanceByTerms}>Limitation of Liability</Text>
          <Text style={styles.blankLine}>
            THE COMPANY WILL NOT BE LIABLE FOR ANY DAMAGES ARISING OUT OF OR RELATED TO YOUR USE OF THE APPLICATION, INCLUDING, BUT NOT LIMITED TO, DIRECT, INDIRECT, INCIDENTAL, CONSEQUENTIAL, OR SPECIAL DAMAGES.
          </Text>
          <Text style={styles.acceptanceByTerms}>Termination</Text>
          <Text style={styles.blankLine}>
            The Company may terminate your access to the Application at any time, for any reason, with or without notice. You may terminate your use of the Application by deleting it from your device.
            Entire Agreement
            This Agreement constitutes the entire agreement between you and the Company regarding the use of the Application.
          </Text>
          <Text style={styles.acceptanceByTerms}>Updates to the Agreement</Text>
          <Text style={styles.blankLine}>
            The Company may update this Agreement from time to time. You are responsible for checking this Agreement periodically for updates. Your continued use of the Application following the posting of any updates constitutes your acceptance of the revised Agreement.
          </Text>
        </Text>
        <CheckBox
          checked={activeStateactiveActionchecked}
          onPress={() =>
            setActiveStateactiveActionchecked(!activeStateactiveActionchecked)
          }
          checkedColor="#5344c2"
          containerStyle={styles.activeStateactiveActionLayout}
        />
         <Text style={[styles.yesIAgree, styles.andFlexBox]}>
          Yes I agree to this
        </Text>

        <Button
          style={styles.submitButtonActionsubmit}
          mode="contained"
          onPress={handleNext}
          labelStyle={styles.submitButtonActionsubmitBtn}
          contentStyle={styles.submitButtonActionsubmitBtn1}
        >
          Submit
        </Button>

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  submitButtonActionsubmitBtn: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    fontFamily: "Poppins-SemiBold",
  },
  submitButtonActionsubmitBtn1: {
    height: 51,
    width: 315,
    textAlign: "center",
  },
  activeStateactiveActionLayout: {
    backgroundColor: "transparent",
  },
  andFlexBox: {
    textAlign: "left",
  },
  termsAndAgreement: {
    color: "#1a233b",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_6xl,
    marginTop: 20,
    marginLeft: 20,
  },
  thisAgreementIs: {
    fontSize: FontSize.size_smi,
  },
  thisAgreementIsMadeAndEnt: {
    fontFamily: FontFamily.alefBold,
    fontWeight: "700",
  },
  blankLine: {
    fontFamily: FontFamily.poppinsRegular,
    marginLeft: 20,
    marginRight: 20, 
  },
  acceptanceByTerms: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    marginTop: 10,
    marginRight: 50,
   textAlign:"left",
    left: 20,
  },
  acceptanceByTermsByDownload: {
    fontSize: FontSize.size_xs,
    marginLeft: 20,
    marginRight: 20,
  },
  thisAgreementIsContainer: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    marginBottom: 20,
  },
  submitButtonActionsubmit: {
    marginTop: 40,
    marginBottom: 40,
    borderRadius: 15,
    height: 51,
    width: 315,
    left: 40,
   
    justifyContent: "center",
    alignItems: "center",
  },
  
  yesIAgree: {
    textAlign: "left",
    left: 50,
    top:-40,
    fontSize: FontSize.size_base,
  },
  taa: {
    backgroundColor: Color.colorLightsteelblue_100,
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
  },
});

export default TAA;
