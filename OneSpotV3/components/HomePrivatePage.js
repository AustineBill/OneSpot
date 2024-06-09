import React, { useRef } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Image, TextInput, ImageBackground, Animated} from "react-native";
import { useNavigation, useFocusEffect, useRoute } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const HomePublicPage = ({ style }) => {
  const navigation = useNavigation();
  const [searchLocation, setSearchLocation] = React.useState("");
  const slideAnim = useRef(new Animated.Value(0)).current;

  const route = useRoute();
  const { username } = route.params;

  const images = [
    { source: require("../assets/image-7.png"), name: "Jb Parking", address: "Zone 072, 1233 Jorge Bocobo St, Ermita, Manila", location: "Manila", description: "JB Parking offers a convenient and secure multi-level parking facility located in the heart of Manila, providing easy access to nearby businesses and attractions.", price: 60, hour: 3, rating: 4.2 , adds: 20},
    { source: require("../assets/image-8.png"), name: "SM Sta Mesa", address: "San Perfecto Intersection, Manila", location: "Manila", description: "SM Sta. Mesa's multi-level parking structure offers a convenient option for parking near the mall.", price: 60, hour: 1, rating: 4.0 , adds: 0},
    { source: require("../assets/image-11.png"), name: "SM Manila", address: "628 San Marcelino St, Manila", location: "Manila", description: "SM Manila is a bustling shopping mall located in the heart of Manila, offering a diverse range of retail stores, dining options, entertainment facilities, and services.", price: 40, hour: 3, rating: 4.4, adds: 0 },
    { source: require("../assets/image-12.png"), name: "Park N Ride", address: "Antonio Villegas Street, corner Dr Basa St, Ermita, Manila.", location: "Manila", description: "Offers a strategic parking facility for commuters looking to park their vehicles and easily access public transportation, providing a practical solution for those traveling into the central business district of Manila.", price: 45, hour: 3, rating: 1.5, adds: 15 },
  ];


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


  const handleImagePress = (image) => {
    navigation.navigate("BookPage", { 
      username,
      selectedImage: image.source, 
      name: image.name, 
      address: image.address,
      description: image.description, 
      price: image.price, 
      hour: image.hour, 
      rating: image.rating,
      adds: image.adds
    });
  };

  const handlePress = () => {
    Animated.timing(slideAnim, {
      toValue: -140,  
      duration: 100,  
      useNativeDriver: true,
    }).start(() => {
      navigation.navigate('HomePublicPage');
    });
  };

  useFocusEffect(
    React.useCallback(() => {
      slideAnim.setValue(0);
    }, [])
  );

  return (
    <View style={[styles.homepublicPage, style]}>
      <View style={[styles.frame, styles.frameFlexBox1]}>
          <View style={styles.frameParent}>
            <View style={[styles.frame27, styles.frame27Position]}>
              <Image
                style={[styles.profileImgIcon]}
                contentFit="cover"
                source={require("../assets/profile-img.png")}
              />
            </View>

            <View style={[styles.frame28, styles.frame28Layout]}>
              <Text style={styles.helloTypo}>Hello, </Text>
              <Text style={styles.shanelle}>{username}</Text>
            </View> 

            <View style={styles.frame1}>
              <Text style={styles.findYourSpot}>
                Find your spot
              </Text>
            </View>
            
            <View>
              <ImageBackground 
                    source={require("../assets/rectangle-62.png")} 
                    style={styles.imageBackground}>
              </ImageBackground>

              <Animated.View style={ { transform: [{ translateX: slideAnim }] }}>
                <ImageBackground 
                  source={require("../assets/rectangle-61.png")} 
                  style={styles.PublicBackground}
                />
              </Animated.View>

              <TouchableOpacity onPress={handlePress}>
                <Text style={[styles.public, styles.publicTypo ]}>PUBLIC</Text>
              </TouchableOpacity>


            
                <Text style={[styles.private, styles.privateTypo]}>PRIVATE</Text>
      

            </View>
            
            <View style={[styles.Searchframe, styles.frameLayout6]}>
              <TextInput
                style={styles.searchInput}
                placeholder="Search location"
                onChangeText={(text) => setSearchLocation(text)}
                value={searchLocation}
              />
            </View>
            
            <View style={styles.imagesContainer}>
              {filteredImages().map((image, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => handleImagePress(image)}
                  style={styles.imageWrapper}
                >
                  <Image
                    style={styles.image}
                    source={image.source}
                  />
                  <Text style={styles.imageText}>{image.name}</Text>
                </TouchableOpacity>
              ))}
            </View>
            
            <TouchableOpacity
              style={[styles.defaultStatedefaultWrapper, styles.MapFlexBox]}
              onPress={() => navigation.navigate("MapPage")}
            >
              <View style={[styles.defaultStatedefault, styles.containerFlexBox]}>
                <Image
                  style={styles.mapComponentsvgIcon}
                  source={require("../assets/map-componentsvg.png")}
                />
                <Text style={styles.reserve}>Map view</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };
            


const styles = StyleSheet.create({

  frameFlexBox1: {
    alignItems: "center",
    position: "absolute",
  },
  MapFlexBox: {
    alignItems: "center",
    position: "absolute",
  },
  
  privateTypo: {
    color: Color.colorWhite,
    top: 190,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    alignItems: "center",
  },

  publicTypo: {
    color: Color.colorWhite,
    top: 90,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    alignItems: "center",
  },
  frameLayout6: {
    width: 331,
    position: "absolute",
    overflow: "hidden",
  },
  helloTypo: {
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_base,
  },
  containerFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  frame27Position: {
    width: 48,
    left: 20,
    position: "absolute",
    top: 40,
  },
  frame28Layout: {
    width: 104,
    position: "absolute",
  },
  findYourSpot: {
    fontSize: FontSize.size_6xl,
    width: 240,
    height: 45,
    fontFamily: FontFamily.poppinsBold,
    display: "flex",
    fontWeight: "700",
    display: "flex",
    textAlign: "left",
    color: Color.colorBlack,
    alignItems: "center",
  },
  frame1: {
    top: 130,
    width: 249,
    justifyContent: "center",
    position: "absolute",
    overflow: "hidden",
    alignItems: "flex-end",
    justifyContent: "center",
    left: 0,
  },
  public: {
    left: 80,
    position: "absolute",
  },
  private: {
    left: 210,
    position: "absolute",
  },
  imageBackground: {
    justifyContent: 'center', 
    width: 290,
    left: 40,
    height: 48,
    top: 180,
  },
  PublicBackground: {
    width: 150,
    height: 50, 
    left: 180, 
    top: 130, 
  },
  searchInput: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginTop: 10,
    marginBottom: 10,
    fontSize: 16,
  },


  Searchframe: {
    top: 240,
    justifyContent: "center",
    alignItems: "flex-center",
    left: 20,
  },

  rectangleView: {
    backgroundColor: Color.colorMidnightblue,
  },

  mapComponentsvgIcon: {
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  reserve: {
    fontSize: FontSize.size_mid,
    lineHeight: 26,
    fontFamily: FontFamily.nunitoSans12ptBold,
    color: Color.colorDarkslateblue,
    marginLeft: 6,
    textAlign: "center",
    fontWeight: "700",
  },
  defaultStatedefault: {
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorWhitesmoke,
    paddingHorizontal: Padding.p_smi,
    paddingVertical: 0,
    width: 128,
    height: 42,
  },
  defaultStatedefaultWrapper: {
    left: 130,
    top: 650,
    justifyContent: "center",
  },
  profileImgIcon: {
    top: 15,
    height: 48,
  },
  frame27: {
    height: 63,
    overflow: "hidden",
    top: 0,
  },
  shanelle: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  imagesContainer: {
    top: 180,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  imageWrapper: {
    width: '40%', // Adjust the width to ensure 2 images per row with some spacing
    marginLeft: '3%', // Margin to create space between images
    //margin: '2.5%', // Margin to create space between images
    marginTop: '8%', // Margin to create space between images
    //marginBottom: '2%', // Margin to create space between images
    aspectRatio: 1, // Ensures the image container is square
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: Border.br_3xs,
  },
  imageText: {
    textAlign: 'left',
    width: 200,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.poppinsBold,
  },
  frame28: {
    left: 90,
    height: 63,
    overflow: "hidden",
    top: 50,
  },
  frameParent: {
    top: 26,
    left: 0,
    position: "absolute",
    width: 360,
  },
  frame: {
    top: -9,
    height: 820,
    justifyContent: "flex-end",
    left: 0,
    overflow: "hidden",
    width: 360,
  },
  homepublicPage: {
    backgroundColor: Color.colorLightgray,
    height: "100%",
    overflow: "hidden",
    width: "100%",
    alignItems: "center",
    justifyContent: "center", 
  },
});

export default HomePublicPage;
