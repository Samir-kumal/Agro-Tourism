import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import React from "react";
import { AntDesign,Entypo,FontAwesome,FontAwesome5, Ionicons, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";

const icons= {
  size: 52,
  color: Colors.primary,
}

const data = [
  {
    name: "Farmer’s market",
    image: <AntDesign name="shoppingcart" size={icons.size} color={icons.color} />,
  },
  {
    name: "farmer insurance",
    image: <FontAwesome5 name="money-check" size={icons.size} color={icons.color} />
  },
  {
    name: "Farming News",
    image: <FontAwesome name="newspaper-o" size={icons.size} color={icons.color} />
  },
  {
    name: "Farming Expences",
    image: <Entypo name="wallet" size={icons.size} color={icons.color} />
  },
  {
    name: "manure calculator",
    image: <MaterialCommunityIcons name="calculator-variant" size={icons.size} color={icons.color} />
  },
  {
    name: "government offices",
    image: <MaterialCommunityIcons name="office-building" size={icons.size} color={icons.color} />
  },
  {
    name: "Farming Education institutes",
    image: <Ionicons name="school" size={icons.size} color={icons.color} />
  },
  {
    name: "Video Collection",
    image: <MaterialIcons name="video-collection" size={icons.size} color={icons.color} />
  },
];

const menu = () => {
  const card_Container =
    "w-[40%] h-40 bg-white rounded-xl shadow-lg flex items-center justify-center px-4 py-2 my-2";
  return (
    <ScrollView
      contentContainerStyle={styles.container}
   
    >
      {data.map((item) => (
        <TouchableOpacity key={item.name} className={card_Container}>
          <View>{item.image}</View>
          <Text>{item.name}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default menu;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
});
