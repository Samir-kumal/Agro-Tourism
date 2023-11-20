import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import Colors from "../../constants/Colors";
import { width, height } from "../../helper/Dimensions";
const work = () => {

  // const data = [
  //   {
  //     name:"yojana",
  //     image:<AntDesign name="addfile" size={24} color={"black"}
  //   },
  //   {
  //     name:"yojana",
  //     image:<AntDesign name="addfile" size={24} color={"black"}
  //   }, {
  //     name:"yojana",
  //     image:<AntDesign name="addfile" size={24} color={"black"}
  //   }, {
  //     name:"yojana",
  //     image:<AntDesign name="addfile" size={24} color={"black"}
  //   }, {
  //     name:"yojana",
  //     image:<AntDesign name="addfile" size={24} color={"black"}
  //   },
  // ]
  return (
    <View>
      {/* <------------- Crops download Section------------------> */}

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
            source={require("../../assets/images/home/harvest.png")}
          />
          <Text style={styles.cardText}>Add Crops</Text>
        </TouchableOpacity>
      </View>
      <View className="w-[95vw] mx-auto bg-white shadow-sm p-2">
      <Text className="font-bold">Tite Karela</Text>
      <Text>Find the news for the latest techniques on harvesting karela </Text>
      <View className="flex flex-row gap-x-2">
      <TouchableOpacity style= {{backgroundColor:Colors.primary}}>
        <Text className="text-white p-2">Read More</Text>       
      </TouchableOpacity>
      <TouchableOpacity  style= {{backgroundColor:Colors.primary}}>
        <Text className="text-white p-2">Read More</Text>       
      </TouchableOpacity>
      </View>
      </View>

      {/* <------------- Crops Harvesting Techniques Section------------------> */}

      <View className="w-full h-full">

      </View>

    </View>
  );
};

export default work;

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
