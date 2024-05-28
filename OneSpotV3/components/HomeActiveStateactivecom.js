import * as React from "react";
import {  StyleSheet } from "react-native";
import { Image } from "expo-image";

const HomeActiveStateactivecom = ({ style }) => {
  return (
    <Image
      style={[styles.homeActiveStateactivecom, style]}
      contentFit="cover"
      source={require("../assets/frame-382.png")}
    />
  );
};

const styles = StyleSheet.create({
  homeActiveStateactivecom: {
    width: 50,
    height: 100,
    overflow: "hidden",
  },
});

export default HomeActiveStateactivecom;
