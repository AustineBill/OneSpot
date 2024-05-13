import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet } from "react-native";
import { Image } from "expo-image";

const SearchStateSetsearchIcon = ({ style }) => {
  return (
    <Image
      style={[styles.searchStateSetsearchIcon, style]}
      contentFit="cover"
      source={require("../assets/frame-17.png")}
    />
  );
};

const styles = StyleSheet.create({
  searchStateSetsearchIcon: {
    width: 30,
    height: 30,
  },
});

export default SearchStateSetsearchIcon;
