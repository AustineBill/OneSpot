
import FrontPage from "./screens/FrontPage";
import HomePrivatePage from "./components/HomePrivatePage";
import LoginPage from "./screens/LoginPage";
import SignIn from "./screens/SignIn";
import ResetPassPage from "./screens/ResetPassPage";
import CarBookSlot from "./screens/CarBookSlot";
import BookPage from "./screens/BookPage";
import PayMethodPage from "./screens/PayMethodPage";
import ReceiptPage from "./screens/ReceiptPage";
import Signin1 from "./screens/Signin1";
import Startpage from "./screens/Startpage";
import TAA from "./screens/TAA";
import Profile from "./components/Profile";
import ResetNumPage from "./screens/ResetNumPage";
import HistoryPage from "./screens/HistoryPage";
import ParkinginfoPage from "./screens/ParkinginfoPage";
import AddVehiclePage from "./screens/AddVehiclePage";
import VerificationPage from "./screens/VerificationPage";
import HomePublicPage from "./components/HomePublicPage";
import ParkingSlot from './components/ParkingSlots';
import SignIn2 from "./screens/SignIn2";
import EditProfPage from "./screens/EditProfPage";
import TransactionPage from "./screens/TransactionPage";
import ConfirmBooking from "./screens/ConfirmBooking";
import SearchPage from "./components/SearchPage";
import MapPage from "./screens/MapPage";
import SearchStateSetsearchIcon1 from "./components/SearchStateSetsearchIcon1";
import HomeActiveStateactivecom from "./components/HomeActiveStateactivecom";
import FrameIcon1 from "./components/FrameIcon1";

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { useRoute } from "@react-navigation/native";
import { View, StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Color } from "../OneSpotV3/GlobalStyles";


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


function BottomTabsRoot({ route, navigation }) {
  const { username } = route.params;

  console.log("Received username in BottomTabsRoot: ", username); 


  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBarContainer,
      }}
    >
     <Tab.Screen
        name="Home"
        options={{
          tabBarIcon: ({ focused }) => <HomeActiveStateactivecom style={styles.icon} />,
          tabBarLabel: () => null,
        }}
      >
        {() => (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="HomePublicPage" component={HomePublicPage} initialParams={{ username }} />
            <Stack.Screen name="HomePrivatePage" component={HomePrivatePage} initialParams={{ username }} />
          </Stack.Navigator>
        )}
      </Tab.Screen>

      <Tab.Screen
        name="Profile"
        options={{
          tabBarIcon: ({ focused }) => <FrameIcon1 style={styles.icon} />,
          tabBarLabel: () => null,
        }}
      >
        {() => (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Profile" component={Profile} initialParams={{ username }} />
          </Stack.Navigator>
        )}
      </Tab.Screen>
    </Tab.Navigator>
  );
}

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);

  const [fontsLoaded, error] = useFonts({
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("./assets/fonts/Poppins-ExtraBold.ttf"),
    "NunitoSans12pt-Regular": require("./assets/fonts/NunitoSans12pt-Regular.ttf"),
    "NunitoSans12pt-Bold": require("./assets/fonts/NunitoSans12pt-Bold.ttf"),
    "Manrope-Regular": require("./assets/fonts/Manrope-Regular.ttf"),
    "Manrope-Medium": require("./assets/fonts/Manrope-Medium.ttf"),
    "Manrope-SemiBold": require("./assets/fonts/Manrope-SemiBold.ttf"),
    "Manrope-Bold": require("./assets/fonts/Manrope-Bold.ttf"),
    "Manrope-ExtraBold": require("./assets/fonts/Manrope-ExtraBold.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Raleway-Bold": require("./assets/fonts/Raleway-Bold.ttf"),
    "Raleway-ExtraBold": require("./assets/fonts/Raleway-ExtraBold.ttf"),
    "Montserrat-Bold": require("./assets/fonts/Montserrat-Bold.ttf"),
    "Alef-Bold": require("./assets/fonts/Alef-Bold.ttf"),
    "Itim-Regular": require("./assets/fonts/Itim-Regular.ttf"),
  });

  React.useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(true);
    }, 3000);
  }, []);

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <NavigationContainer>
      {hideSplashScreen ? (
        <Stack.Navigator initialRouteName="Startpage" screenOptions={{ headerShown: false }}>
          {isAuthenticated ? (
            <>
              <Stack.Screen name="BottomTabsRoot" component={BottomTabsRoot} initialParams={{ route }}  />
              <Stack.Screen name="ProfilePage" component={Profile} />
              <Stack.Screen name="HomePublicPage" component={HomePublicPage} />
              <Stack.Screen name="HomePrivatePage" component={HomePrivatePage} />
              <Stack.Screen name="SearchPage" component={SearchPage} />
            </>
          ) : (
            <>
              <Stack.Screen name="BottomTabsRoot" component={BottomTabsRoot}  />
              <Stack.Screen 
                name="FrontPage"
                component={FrontPage}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="LoginPage"
                options={{ headerShown: false }}
              >
                {(props) => <LoginPage {...props} setIsAuthenticated={setIsAuthenticated} />}
              </Stack.Screen>
              <Stack.Screen
                name="SignIn"
                component={SignIn}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ResetPassPage"
                component={ResetPassPage}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="CarBookSlot"
                component={CarBookSlot}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ParkingSlots"
                component={ParkingSlot}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="BookPage"
                component={BookPage}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="PayMethodPage"
                component={PayMethodPage}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ReceiptPage"
                component={ReceiptPage}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Signin1"
                component={Signin1}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Startpage"
                component={Startpage}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="TAA"
                component={TAA}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ResetNumPage"
                component={ResetNumPage}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="HistoryPage"
                component={HistoryPage}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ParkinginfoPage"
                component={ParkinginfoPage}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="AddVehiclePage"
                component={AddVehiclePage}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="VerificationPage"
                component={VerificationPage}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="SignIn2"
                component={SignIn2}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="EditProfPage"
                component={EditProfPage}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="TransactionPage"
                component={TransactionPage}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ConfirmBooking"
                component={ConfirmBooking}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="MapPage"
                component={MapPage}
                options={{ headerShown: false }}
              />
            </>
          )}
        </Stack.Navigator>
      ) : (
        <FrontPage />
      )}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  tabBarContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 60, 
    backgroundColor: Color.colorMidnightblue,
  },
  tabBarItem: {
    alignItems: "center",
    position: "absolute",
  },
  icon: {
    width: 30,
    height: 30,
  },
});

export default App;
