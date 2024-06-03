import * as React from "react";
import { Text, StyleSheet, View, Image, TextInput, Pressable, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const SearchPage = ({ style }) => {
  const navigation = useNavigation();
  const [searchLocation, setSearchLocation] = React.useState("");

  const handleImagePress = (image) => {
    navigation.navigate("BookPage", { 
      selectedImage: image.source, 
      name: image.name, 
      address: image.address,
      description: image.description, 
      price: image.price, 
      hour: image.hour, 
      rating: image.rating ,
      adds: image.adds
    });
  };

  // Data for images
  const images = [
    { source: require("../assets/image-13.png"), name: "Madrigal Parking", address: "Madrigal Avenue in Alabang, Muntinlupa City", location: "Muntinlupa", description: "Madrigal Business Park has multiple parking zones - check signs for visitor, tenant, short-term, and handicap parking.", price: 60, hour: 1, rating: 3.1, adds: 10 },
    { source: require("../assets/high.jpg"), name: "High Street Parking", address: " Bonifacio High Street, Taguig", location: "Taguig", description: "Convenient place to park vehicles but too expensive during weekdays: ₱40 for the first 4 hours and ₱50 for succeeding hours.", price: 40, hour: 4, rating: 3.5, adds: 50 },
    { source: require("../assets/image-81.png"), name: "UN Square", address: "Corner 1000, United Nations Ave, Ermita, Manila City", location: "Manila", description: "UN Square Parking offers a central location for parking your car in Manila, Philippines. Situated on busy UN Avenue, a multi-level structure perfect for those seeking a safe and secure spot close to the action", price: "FREE", hour: 0, rating: 3.5, adds: 0 },
    { source: require("../assets/image-14.png"), name: "Bocobo Pay Parking", address: "J. Bocobo street, manila, 1004,Mmanila", location: "Manila", description: "Bocobo Pay Parking offers a parking option on Jorge Bocobo St. in Manila, that provides a central, safe, and secure multi-level parking facility", price: 50, hour: 1, rating: 3.7, adds: 0 },
    { source: require("../assets/image-7.png"), name: "Jb Parking", address: "Zone 072, 1233 Jorge Bocobo St, Ermita, Manila", location: "Manila", description: "JB Parking offers a convenient and secure multi-level parking facility located in the heart of Manila, providing easy access to nearby businesses and attractions.", price: 60, hour: 3, rating: 4.2 , adds: 20},
    { source: require("../assets/image-8.png"), name: "SM Sta Mesa", address: "San Perfecto Intersection, Manila", location: "Manila", description: "SM Sta. Mesa's multi-level parking structure offers a convenient option for parking near the mall.", price: 60, hour: 1, rating: 4.0 , adds: 0},
    { source: require("../assets/image-11.png"), name: "SM Manila", address: "628 San Marcelino St, Manila", location: "Manila", description: "SM Manila is a bustling shopping mall located in the heart of Manila, offering a diverse range of retail stores, dining options, entertainment facilities, and services.", price: 40, hour: 3, rating: 4.4, adds: 0 },
    { source: require("../assets/image-12.png"), name: "Park N Ride", address: "Antonio Villegas Street, corner Dr Basa St, Ermita, Manila.", location: "Manila", description: "Offers a strategic parking facility for commuters looking to park their vehicles and easily access public transportation, providing a practical solution for those traveling into the central business district of Manila.", price: 45, hour: 3, rating: 1.5, adds: 15 },
  ];

  // Filter images based on the search location or name
  const filteredImages = () => {
    if (!searchLocation) {
      return images; // Return all images if searchLocation is empty
    } else {
      return images.filter((image) => 
        image.location.toLowerCase().includes(searchLocation.toLowerCase()) || 
        image.name.toLowerCase().includes(searchLocation.toLowerCase())
      );
    }
  };

  return (
    <View style={[styles.homepublicPage, style]}>
      <View style={styles.frame}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search location or name"
          onChangeText={(text) => setSearchLocation(text)}
          value={searchLocation}
        />

        <ScrollView contentContainerStyle={styles.imagesContainer}>
          {filteredImages().length > 0 ? (
            filteredImages().map((image, index) => (
              <Pressable
                key={index}
                onPress={() => handleImagePress(image)}
                style={styles.imageWrapper}
              >
                <Image style={styles.image} source={image.source} />
                <Text style={styles.imageName}>{image.name}</Text>
              </Pressable>
            ))
          ) : (
            <Text>No results found</Text>
          )}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  homepublicPage: {
    flex: 1,
    backgroundColor: Color.colorLightgray,
    alignItems: "center",
    justifyContent: "center",
  },
  frame: {
    flex: 1,
    width: "100%",
    padding: 20,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 15,
    fontSize: 16,
    marginBottom: 20,
    marginTop: 20,
  },
  imagesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  imageWrapper: {
    width: "48%", // Adjust the width to allow for two items per row with space between
    marginBottom: 20, // Add space between rows
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: Border.br_3xs,
  },
  imageName: {
    textAlign: "center",
    fontFamily: FontFamily.poppinsBold,
    fontSize: FontSize.size_mini,
    marginTop: 5,
  },
});

export default SearchPage;
