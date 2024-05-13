import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color } from "../GlobalStyles";

const FrontPage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.frontPage}>
      <Pressable
        style={[styles.frontPageInner, styles.frameFlexBox1]}
        onPress={() => navigation.navigate("Startpage")}
      >
        <View style={[styles.onespotWrapper, styles.frameFlexBox]}>
          <Text style={styles.onespot}>{`OneSpot `}</Text>
        </View>
      </Pressable>
      <View style={[styles.frame, styles.frameFlexBox]}>
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require("../assets/frame-40.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameFlexBox1: {
    justifyContent: "center",
    position: "absolute",
  },
  frameFlexBox: {
    alignItems: "flex-end",
    overflow: "hidden",
  },
  onespot: {
    fontSize: 64,
    fontFamily: FontFamily.itimRegular,
    color: Color.colorWhite,
    textAlign: "left",
    width: 281,
    height: 83,
  },
  onespotWrapper: {
    backgroundColor: "#092547",
    justifyContent: "flex-end",
    paddingHorizontal: 18,
    paddingVertical: 317,
    width: 360,
    height: 800,
  },
  frontPageInner: {
    top: 0,
    left: 0,
    alignItems: "center",
    width: 360,
  },
  frameChild: {
    width: 114,
    height: 128,
  },
  frame: {
    top: 276,
    left: 96,
    width: 141,
    height: 139,
    paddingHorizontal: 8,
    paddingVertical: 0,
    justifyContent: "center",
    position: "absolute",
  },
  frontPage: {
    flex: 1,
    width: "100%",
    height: 800,
  },
});

export default FrontPage;
