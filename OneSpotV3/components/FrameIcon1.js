import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";

const FrameIcon1 = ({ style }) => {
  const navigation = useNavigation();

  return (
    
    <Pressable
      style={[styles.parent, style]}
      onPress={() => navigation.navigate("Profile")}
    >
      <Image
        style={styles.icon}
        contentFit="cover"
        source={require("../assets/frame-391.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: "100%",
    height: "100%",
  },
  parent: {
    width: 30,
    height: 30,
  },
});

export default FrameIcon1;
