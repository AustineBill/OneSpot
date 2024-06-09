import * as React from "react";
import { Text, StyleSheet, View, Image, TextInput, Pressable, ScrollView } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const SearchPage = ({ style }) => {
  const navigation = useNavigation();
  const [searchLocation, setSearchLocation] = React.useState("");
  const route = useRoute();
  const { username } = route.params || {};


  const handleImagePress = (image) => {
    navigation.navigate("BookPage", { 
      username,
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
    { source: require("../assets/image-12.png"), name: "Paseo Center Parking", address: "88 Sedeño, Paseo Center, Paseo de Roxas, Makati City", location: "Makati City", description: "Paseo Center Parking is a secure and convenient parking option located in the central business district of Makati. It offers easy access to nearby offices and shopping areas.", price: 50, hour: 2, rating: 4.2, adds: 20 },
    { source: require("../assets/image-12.png"), name: "Greenbelt 3 Parking", address: "Esperanza St, Ayala Center, Makati City", location: "Makati City",  description: "Greenbelt 3 Parking is part of the Greenbelt shopping complex, offering ample parking space with direct access to the mall and nearby establishments. Overnight parking is available for PHP 200.",   price: 45,  hour: 3,  rating: 4.5, adds: 15 },
    { source: require("../assets/image-12.png"),  name: "Century City Mall Parking",  address: "Kalayaan Ave, Makati City",  location: "Makati City", description: "Century City Mall Parking provides a safe and accessible parking option for shoppers and visitors to the mall. It is well-lit and secured.", price: 50,  hour: 2,  rating: 4.3,  adds: 20},
    { source: require("../assets/image-12.png"), name: "Makati Parking Building", address: "Dela Rosa St, Makati City", location: "Makati City", description: "The Makati Parking Building offers affordable and secure parking for the public, located near the central business district and various offices.", price: 30,  hour: 2,  rating: 4.0,  adds: 10},
    { source: require("../assets/image-12.png"), name: "Gabriela Silang Parking Lot", address: "Corner of Ayala Avenue and Makati Avenue, Makati City", location: "Makati City", description: "Gabriela Silang Parking Lot offers convenient parking options close to major business districts and shopping centers. Lost or damaged card fee is PHP 200.", price: 50, hour: 2, rating: 4.3, adds: 25 },
    { source: require("../assets/image-12.png"), name: "Legazpi Active Park Parking", address: "Legazpi Street, Makati City", location: "Makati City", description: "Legazpi Active Park Parking provides easy access to Legazpi Park and surrounding commercial areas, offering affordable parking solutions.", price: 40, hour: 3, rating: 4.1, adds: 15 },
    { source: require("../assets/image-12.png"), name: "Greenhills Shopping Center Parking", address: "Ortigas Ave, Greenhills, San Juan City", location: "San Juan City", description: "Greenhills Shopping Center Parking offers ample space for shoppers and visitors, providing easy access to the shopping center and its diverse retail and dining options. Overnight parking is available for PHP 200.", price: 50, hour: 3, rating: 4.3, adds: 20 },
    { source: require("../assets/image-12.png"), name: "Promenade Mall Parking", address: "Wilson St, Greenhills, San Juan City", location: "San Juan City", description: "Promenade Mall Parking is conveniently located near the Promenade Mall, offering secure parking facilities for mall-goers and visitors to nearby establishments.", price: 40, hour: 2, rating: 4.2, adds: 15 },
    { source: require("../assets/image-12.png"), name: "V-Mall Parking", address: "Ortigas Ave, Greenhills, San Juan City", location: "San Juan City", description: "V-Mall Parking provides a secure and convenient parking option for visitors to V-Mall and surrounding areas, with easy access to various stores and restaurants.", price: 50, hour: 3, rating: 4.4, adds: 20 },
    { source: require("../assets/image-12.png"), name: "San Juan City Hall Parking", address: "N. Domingo St, San Juan City", location: "San Juan City", description: "San Juan City Hall Parking offers affordable parking for visitors and employees, located near government offices and other public facilities.", price: 30, hour: 2, rating: 4.0, adds: 10 },
    { source: require("../assets/image-12.png"), name: "Agora Market Parking", address: "N. Domingo St, San Juan City", location: "San Juan City", description: "Agora Market Parking provides convenient parking options for shoppers and vendors at Agora Market, ensuring easy access to the market area.", price: 20, hour: 2, rating: 3.9, adds: 10 },
    { source: require("../assets/image-12.png"), name: "Club Filipino Parking", address: "Ortigas Ave, Greenhills, San Juan City", location: "San Juan City", description: "Club Filipino Parking offers secure parking facilities for members and guests of Club Filipino, with easy access to club amenities and nearby areas.", price: 50, hour: 3, rating: 4.1, adds: 15 },
    { source: require("../assets/image-12.png"), name: "SM Mall of Asia Parking", address: "Seaside Blvd, Pasay City", location: "Pasay City", description: "SM Mall of Asia Parking provides ample and secure parking spaces for shoppers and visitors to the mall, offering easy access to various retail, dining, and entertainment options. Overnight parking is available for PHP 200.", price: 40, hour: 3, rating: 4.5, adds: 10 },
    { source: require("../assets/image-12.png"), name: "Resorts World Manila Parking", address: "Newport Blvd, Newport City, Pasay City", location: "Pasay City", description: "Resorts World Manila Parking offers convenient and secure parking for guests and visitors to the casino, hotels, and shopping areas within Resorts World Manila. Overnight parking is available for PHP 300.", price: 45, hour: 3, rating: 4.4, adds: 20 },
    { source: require("../assets/image-12.png"), name: "DoubleDragon Plaza Parking", address: "DD Meridian Park, Macapagal Blvd, Pasay City", location: "Pasay City", description: "DoubleDragon Plaza Parking provides spacious and secure parking facilities for visitors to the commercial complex, with easy access to offices, shops, and restaurants.", price: 40, hour: 3, rating: 4.3, adds: 15 },
    { source: require("../assets/image-12.png"), name: "CCP Complex Parking", address: "Roxas Blvd, Pasay City", location: "Pasay City", description: "CCP Complex Parking offers convenient parking for visitors to the Cultural Center of the Philippines, providing easy access to theaters, museums, and the bay area.", price: 30, hour: 2, rating: 4.2, adds: 10 },
    { source: require("../assets/image-12.png"), name: "NAIA Terminal 3 Parking", address: "Andrews Ave, Pasay City", location: "Pasay City", description: "NAIA Terminal 3 Parking provides secure and accessible parking for travelers, offering long-term and short-term parking options near the airport terminal. Overnight parking is available for PHP 300.", price: 50, hour: 3, rating: 4.1, adds: 20 },
    { source: require("../assets/image-12.png"), name: "One E-com Center Parking", address: "Ocean Drive, Mall of Asia Complex, Pasay City", location: "Pasay City", description: "One E-com Center Parking offers convenient parking for employees and visitors to the business center, with easy access to nearby malls and restaurants.", price: 40, hour: 3, rating: 4.0, adds: 15 },
    { source: require("../assets/image-12.png"), name: "Araneta Square Parking", address: "999 Rizal Ave Ext, Caloocan City", location: "Caloocan City", description: "Araneta Square Parking provides ample parking spaces for visitors to the shopping complex, with easy access to various retail outlets and entertainment facilities.", price: 30, hour: 3, rating: 4.1, adds: 10 },
    { source: require("../assets/image-12.png"), name: "Puregold Monumento Parking", address: "Rizal Ave Ext, Caloocan City", location: "Caloocan City", description: "Puregold Monumento Parking offers secure parking for shoppers visiting the supermarket, with convenient access to grocery stores and other retail services.", price: 40, hour: 2, rating: 4.0, adds: 10 },
    { source: require("../assets/image-12.png"), name: "Caloocan City Hall Parking", address: "A. Mabini St, Caloocan City", location: "Caloocan City", description: "Caloocan City Hall Parking provides public parking for visitors to the city hall, offering easy access to government offices and services.", price: 20, hour: 2, rating: 4.3, adds: 10 },
    { source: require("../assets/image-12.png"), name: "Caloocan Central Post Office Parking", address: "Rizal Ave Ext, Caloocan City", location: "Caloocan City", description: "Caloocan Central Post Office Parking offers convenient parking for visitors to the post office, with easy access to mail and delivery services.", price: 20, hour: 2, rating: 4.0, adds: 10 },
    { source: require("../assets/image-12.png"), name: "Grace Park Parking Area", address: "Grace Park, Caloocan City", location: "Caloocan City", description: "Grace Park Parking Area provides public parking spaces in the Grace Park area, with easy access to local businesses and residential areas.", price: 20, hour: 2, rating: 3.9, adds: 10 },
    { source: require("../assets/image-12.png"), name: "Trinoma Mall Parking", address: "EDSA cor. North Ave, Quezon City", location: "Quezon City", description: "Trinoma Mall Parking offers extensive parking facilities for mall visitors, ensuring secure and convenient access to a wide range of shops and restaurants.", price: 50, hour: 3, rating: 4.5, adds: 20 },
    { source: require("../assets/image-12.png"), name: "SM City North EDSA Parking", address: "North Ave, Quezon City", location: "Quezon City", description: "SM City North EDSA Parking provides a large parking area for shoppers and visitors, featuring multiple entry and exit points for ease of access.", price: 40, hour: 3, rating: 4.4, adds: 20 },
    { source: require("../assets/image-12.png"), name: "Ayala Vertis North Parking", address: "North Ave, Quezon City", location: "Quezon City", description: "Ayala Vertis North Parking offers secure and spacious parking options for visitors to the Vertis North complex, including retail, dining, and entertainment venues.", price: 50, hour: 3, rating: 4.3, adds: 20 },
    { source: require("../assets/image-12.png"), name: "Eastwood City Public Parking", address: "Eastwood Ave, Quezon City", location: "Quezon City", description: "Eastwood City Public Parking offers secure parking for visitors to the Eastwood City commercial and residential area, with easy access to shops, offices, and residences.", price: 30, hour: 2, rating: 4.0, adds: 15 },
    { source: require("../assets/image-12.png"), name: "Shangri-La Plaza Mall Parking", address: "EDSA cor. Shaw Blvd, Mandaluyong City", location: "Mandaluyong City", description: "Shangri-La Plaza Mall Parking offers a secure and convenient parking space for mall visitors, providing easy access to retail stores and dining options within the mall.", price: 50, hour: 3, rating: 4.5, adds: 20 },
    { source: require("../assets/image-12.png"), name: "SM Megamall Parking", address: "EDSA cor. J. Vargas Ave, Mandaluyong City", location: "Mandaluyong City", description: "SM Megamall Parking provides extensive parking facilities for shoppers and visitors, featuring multiple levels and easy access to the mall.", price: 50, hour: 3, rating: 4.4, adds: 20 },
    { source: require("../assets/image-12.png"), name: "Greenfield District Parking", address: "Mayflower St, Mandaluyong City", location: "Mandaluyong City", description: "Greenfield District Parking offers secure parking for visitors to the Greenfield District, with convenient access to various shops, offices, and residential areas.", price: 40, hour: 3, rating: 4.3, adds: 15 },
    { source: require("../assets/image-12.png"), name: "Boni MRT Station Parking", address: "EDSA, Mandaluyong City", location: "Mandaluyong City", description: "Boni MRT Station Parking offers convenient public parking for commuters, providing easy access to the MRT station and nearby establishments.", price: 20, hour: 2, rating: 4.1, adds: 10 },
    { source: require("../assets/image-12.png"), name: "SM Valenzuela Parking", address: "McArthur Highway, Valenzuela City", location: "Valenzuela City", description: "SM Valenzuela Parking offers secure parking for shoppers visiting the SM Valenzuela mall, providing easy access to retail stores and dining options.", price: 40, hour: 3, rating: 4.5, adds: 15 },
    { source: require("../assets/image-12.png"), name: "Puregold Valenzuela Parking", address: "McArthur Highway, Valenzuela City", location: "Valenzuela City", description: "Puregold Valenzuela Parking provides ample parking spaces for shoppers visiting the supermarket, with easy access to grocery stores and other retail services.", price: 30, hour: 3, rating: 4.4, adds: 10 },
    { source: require("../assets/image-12.png"), name: "Karuhatan Public Market Parking", address: "Karuhatan, Valenzuela City", location: "Valenzuela City", description: "Karuhatan Public Market Parking offers secure and convenient parking for visitors to the Karuhatan Public Market, with easy access to various stalls and shops.", price: 20, hour: 2, rating: 4.0, adds: 10 },
    { source: require("../assets/image-12.png"), name: "Malanday Public Market Parking", address: "Malanday, Valenzuela City", location: "Valenzuela City", description: "Malanday Public Market Parking offers convenient public parking for market visitors, providing easy access to a variety of stalls and shops within the market area.", price: 20, hour: 2, rating: 4.1, adds: 10 }
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
