// BottomTabsRoot.js

import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";
import { Color } from "../OneSpotV3/GlobalStyles";
import HomePublicPage from "./components/HomePublicPage";
import Profile from "./components/Profile";
import SearchPage from "./components/SearchPage";
import FrameIcon1 from "./components/FrameIcon1";
import HomeActiveStateactivecom from "./components/HomeActiveStateactivecom";
import SearchStateSetsearchIcon1 from "./components/SearchStateSetsearchIcon1";

const Tab = createBottomTabNavigator();

function BottomTabsRoot() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBarContainer,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomePublicPage}
        options={{
          tabBarIcon: ({ focused }) => <HomeActiveStateactivecom style={styles.icon} />,
          tabBarLabel: () => null,
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchPage}
        options={{
          tabBarIcon: ({ focused }) => <SearchStateSetsearchIcon1 style={styles.icon} />,
          tabBarLabel: () => null,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => <FrameIcon1 style={styles.icon} />,
          tabBarLabel: () => null,
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBarContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 60,
    backgroundColor: Color.colorMidnightblue,
  },
  icon: {
    width: 30,
    height: 30,
  },
});

export default BottomTabsRoot;
