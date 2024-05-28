import * as React from "react";
import { Text, StyleSheet, View,  Image, TextInput, Pressable, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const SearchPage = ({ style, Username }) => {
  const navigation = useNavigation();
  const [searchLocation, setSearchLocation] = React.useState("");

  const handleImagePress = (imageSource, name) => {
    navigation.navigate("BookPage", { selectedImage: imageSource, name: name });
  };

  // Data for images
  const images = [
    { source: require("../assets/image-13.png"), name: "Madrigal Parking", location: "Manila" },
    { source: require("../assets/image-10.png"), name: "Daj Parking", location: "Taguig" },
    { source: require("../assets/image-81.png"), name: "UN Square", location: "Taguig" },
    { source: require("../assets/image-14.png"), name: "Bocobo Pay Parking", location: "Taguig" },
    { source: require("../assets/image-7.png"), name: "JB Parking", location: "Manila" },
    { source: require("../assets/image-8.png"), name: "SM Sta Mesa", location: "Manila" },
    { source: require("../assets/image-11.png"), name: "SM Manila", location: "Manila" },
    { source: require("../assets/image-12.png"), name: "Park N Ride", location: "Taguig" },
  ];

  // Filter images based on the search location
  const filteredImages = () => {
    if (!searchLocation) {
      return images; // Return all images if searchLocation is empty
    } else {
      return images.filter((image) => image.location.toLowerCase().includes(searchLocation.toLowerCase()));
    }
  };

  return (
    <View style={[styles.homepublicPage, style]}>
      <View style={styles.frame}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search location"
          onChangeText={(text) => setSearchLocation(text)}
          value={searchLocation}
        />

        <ScrollView contentContainerStyle={styles.imagesContainer}>
                  {filteredImages().length > 0 ? (
                    filteredImages().map((image, index) => (
                      <Pressable
                        key={index}
                        onPress={() => handleImagePress(image.source, image.name)}
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
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  profileImgIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 10,
  },
  greeting: {
    flexDirection: "row",
  },
  hello: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.poppinsRegular,
  },
  username: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.poppinsBold,
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