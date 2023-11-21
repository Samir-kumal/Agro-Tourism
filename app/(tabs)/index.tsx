import {
  View,
  Text,
  useColorScheme,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ScrollView,
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
import { width, height } from "../../helper/Dimensions";
import ImagePicker from "../../components/home/ImagePickerCard";
import WeatherCard from "../../components/home/WeatherCard";
import MarketPricesCard from "../../components/home/MarketPricesCard";
import ImagePickerCard from "../../components/home/ImagePickerCard";

const Home = () => {
  const colorScheme = useColorScheme();
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
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
        {/* <------------- Weather  Section------------------> */}
        <MarketPricesCard />
        <WeatherCard />
      </View>

      {/* <------------- Photo capture or take  Section------------------> */}

      <ImagePickerCard />
      <View className="mt-6">
        <Text className="font-bold px-2 text-xl">Also Check Weather related details</Text>
      </View>
    </ScrollView>
  );
};

export default Home;
export const styles = StyleSheet.create({
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
});
