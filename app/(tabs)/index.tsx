import {
  View,
  Text,
  useColorScheme,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import React from "react";
import { Image } from "react-native";
import Colors from "../../constants/Colors";
import { AntDesign } from "@expo/vector-icons";
export const { width, height } = Dimensions.get("window");

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
<View>
  <Text>Market Prices</Text>
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
});
