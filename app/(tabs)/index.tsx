import {
  View,
  Text,
  useColorScheme,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { twMerge } from "tailwind-merge";
import React from "react";
import { Image } from "react-native";
import Colors from "../../constants/Colors";
import {
  AntDesign,
  Feather,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import { width,height } from "../../helper/Dimensions";
const place = {
  name: "Kathmandu",
  time: "Today",
};
const priceData = [
  {
    vegetable: " Palak Sagh",
    price: 120.0,
  },
  {
    vegetable: " Rayo Sagh",
    price: 100.0,
  },
  {
    vegetable: " Mula ko Sagh",
    price: 50.0,
  },
  {
    vegetable: " Chicken",
    price: 380.0,
  },
  {
    vegetable: " Palak Sagh",
    price: 120.0,
  },
];
const Home = () => {
  const colorScheme = useColorScheme();
  return (
    <View>
      <StatusBar
        barStyle={colorScheme === "dark" ? "dark-content" : "light-content"}
      />
      {/* <------------- Card Section------------------> */}

      <View className="flex-row flex-wrap mt-2">
        <TouchableOpacity style={styles.cardButton}>
          <AntDesign
            style={styles.cardPlus}
            name="pluscircle"
            size={24}
            color={Colors.primary}
          />

          <Image
            style={styles.cardImage}
            source={require("../../assets/images/home/farm.png")}
          />
          <Text style={styles.cardText}>Add Farm</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardButton}>
          <AntDesign
            style={styles.cardPlus}
            name="pluscircle"
            size={24}
            color={Colors.primary}
          />

          <Image
            style={styles.cardImage}
            source={require("../../assets/images/home/harvest.png")}
          />
          <Text style={styles.cardText}>Add Crops</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardButton}>
          <AntDesign
            style={styles.cardPlus}
            name="pluscircle"
            size={24}
            color={Colors.primary}
          />

          <Image
            style={styles.cardImage}
            source={require("../../assets/images/home/livestock.png")}
          />
          <Text style={styles.cardText}>See Livestock</Text>
        </TouchableOpacity>
      </View>

      {/* <------------- Market Prices Section------------------> */}
      <View className="flex flex-row mx-2  rounded-lg pb-2">
        <View>
          <View style={styles.marketCardContainer} className="">
            <Text className=" text-xl px-2 font-bold">Market Prices</Text>
          </View>
          <View
            style={{ backgroundColor: Colors.primary }}
            className={twMerge(`flex flex-row justify-between py-2  px-2`)}
          >
            <Text style={styles.placeTitle}>{place.name}</Text>
            <Text style={styles.placeTitle}>{place.time}</Text>
          </View>
          <View>
            {priceData.map((item, index) => (
              <View
                key={index}
                className={twMerge(
                  `flex flex-row justify-between py-2  px-2 border-b border-gray-300`
                )}
              >
                <Text style={styles.itemsText}>{item.vegetable}</Text>
                <Text style={styles.itemsText}>Rs. {item.price}</Text>
              </View>
            ))}
          </View>
        </View>
        {/* <------------- Weather  Section------------------> */}

        <View className=" mt-[60px] ml-2  border-l-[1px] border-gray-300">
          <Text
            style={styles.weatherContainer}
            className=" text-lg px-2 py-1 text-white "
          >
            Weather
          </Text>
          <View className="px-2 flex flex-row flex-wrap justify-between">
            <View>
              <Feather className="" name="sun" size={24} color="black" />
              <Text>Sunny</Text>
              <Text className="text-lg">Clear Sky</Text>
              <Text className="text-lg">Kathmandu</Text>
            </View>
            <View>
              <Text>24.5. C</Text>
            </View>
          </View>
          <View>
            <TouchableOpacity
              style={{ backgroundColor: Colors.primary }}
              className="py-2 px-2 mt-12"
            >
              <Text className="text-white">Click to see more</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* <------------- Photo capture or take  Section------------------> */}

      <View className="bg-gray-200 w-screen  mt-4 pt-4">
        <Text className="text-center text-xl font-bold">
          Crops or Animals health check
        </Text>
        <View className="flex flex-row w-full justify-around h-32  items-center ">
          <TouchableOpacity style={styles.photoContainer}>
            <MaterialIcons name="photo-library" size={42} color={Colors.primary} />
            <Text>Gallery</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.photoContainer}>
            <Ionicons name="ios-camera-sharp" size={42} color={Colors.primary}  />
            <Text>Take photo</Text>

          </TouchableOpacity>
          <TouchableOpacity style={styles.photoContainer}>
            <MaterialIcons name="comment" size={42} color={Colors.primary}  />
            <Text>Comment</Text>

          </TouchableOpacity>
        </View>
        <View className="w-[95vw] mx-auto relative bg-white p-2 flex items-center rounded-lg ">
          <View className="absolute top-1/2 left-1">
          <MaterialIcons name="question-answer" size={24} color="black" />
          </View>
<Text className="font-bold font-xl px-8">More details on various problems faced by Farmers </Text>
<Text style= {{color:Colors.primary}}>Click if there is not solution of your problem</Text>
<View className="absolute bottom-2 right-2">
<MaterialIcons name="arrow-forward-ios" size={16} color="black" />
</View>
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  cardButton: {
    width: width * 0.27,
    height: height * 0.15,
    backgroundColor: Colors.secondary,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    position: "relative",
  },
  cardPlus: {
    position: "absolute",
    // height: 30,
    // width: 30,
    borderRadius: 25,
    backgroundColor: Colors.secondary,
    top: -10,
    right: -10,
  },
  cardImage: {
    width: "50%",
    height: "50%",
  },
  cardText: {
    fontSize: 15,
    color: Colors.black,
    fontWeight: "bold",
    marginTop: 10,
  },

  /* <------------- Market Prices Section------------------> */
  marketCardContainer: {
    paddingVertical: 16,
  },
  placeTitle: {
    color: Colors.secondary,
    fontSize: 16,
    marginHorizontal: 16,
  },
  itemsText: {
    color: Colors.black,
  },

  /* <------------- Weather Section------------------> */
  weatherContainer: {
    backgroundColor: Colors.primary,
    // paddingVertical: 16,
  },

      /* <------------- Photo capture or take  Section------------------> */
  photoContainer: {
    display: "flex",
    alignItems: "center",
  }

});
