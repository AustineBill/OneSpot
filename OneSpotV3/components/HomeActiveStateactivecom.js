import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet } from "react-native";
import { Image } from "expo-image";

const HomeActiveStateactivecom = ({ style }) => {
  return (
    <Image
      style={[styles.homeActiveStateactivecom, style]}
      contentFit="cover"
      source={require("../assets/frame-38.png")}
    />
  );
};

const styles = StyleSheet.create({
  homeActiveStateactivecom: {
    width: 30,
    height: 30,
    overflow: "hidden",
  },
});

export default HomeActiveStateactivecom;
