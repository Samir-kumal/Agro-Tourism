import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Pressable,
  Alert,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";
import Button from "../../components/common/Button";
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
    vegetable: " Chicken Sagh",
    price: 120.0,
  },
  {
    vegetable: " Palak Chicken",
    price: 120.0,
  },
  {
    vegetable: "  Sagh",
    price: 120.0,
  },
  {
    vegetable: " Palak ",
    price: 120.0,
  },
  {
    vegetable: "  Sagh mushroom",
    price: 120.0,
  },
  {
    vegetable: "  Sagh sagh",
    price: 120.0,
  },
  {
    vegetable: " Palak Palak",
    price: 120.0,
  },
  {
    vegetable: " Palak Palak Palak",
    price: 120.0,
  },
  {
    vegetable: "  aagh",
    price: 120.0,
  },
  {
    vegetable: " chack Sagh",
    price: 120.0,
  },
  {
    vegetable: " mula Sagh",
    price: 120.0,
  },
  {
    vegetable: " kera Sagh",
    price: 120.0,
  },
  {
    vegetable: " rayopayo Sagh",
    price: 120.0,
  },
  {
    vegetable: " layo Sagh",
    price: 120.0,
  },
];

const market = () => {
  const icons = {
    size: 22,
    color: "black",
  };
  const listItemsTitle = "font-bold text-xs ";
  const textInput = "w-[40%] p-2 border-[1.5px] border-gray-400 rounded-md";
  const seletector =
    "w-[50%] p-2 flex flex-row justify-between  border-[1.5px] border-gray-400 rounded-md";
  return (
    <ScrollView showsVerticalScrollIndicator= {false}>
      <View>
        <Text className="font-bold text-lg my-4 mx-2">
          Please add your production
        </Text>
        <View className="flex flex-row flex-wrap justify-between px-4 gap-y-2">
          <TouchableOpacity className={seletector}>
            <Text>Add Production</Text>
            <Ionicons name="add-circle" size={icons.size} color={icons.color} />
          </TouchableOpacity>
          <TextInput className={textInput} placeholder="Search" />
          <TouchableOpacity className={seletector}>
            <Text>Add Production</Text>
            <Ionicons name="add-circle" size={icons.size} color={icons.color} />
          </TouchableOpacity>
          <TextInput className={textInput} placeholder="Search" />
        </View>
        <View className="flex items-center mt-4">
          <Button>
            <Text className="text-white">Add your Production</Text>
          </Button>
        </View>
      </View>

      {/* <----------List of Items-------------> */}

      <View className="mt-4">
        <Text className="font-bold text-lg my-4 mx-4">
          List of your production
        </Text>
        <View className="flex flex-row justify-between mx-4 bg-white mb-4 p-2 py-6 rounded-xl">
          <View>
            <Text className={listItemsTitle}>Kathmandu</Text>
            <Text className={listItemsTitle}>2080 kartik 24</Text>
          </View>
          <View className="flex flex-row  items-center justify-center">
            <TouchableOpacity onPress={()=>Alert.alert("fuck")} className="bg-green-600 p-2 focus:bg-green-600 flex flex-row items-center justify-center">
              <Text className="text-xs text-white">Daily market price</Text>
            </TouchableOpacity>
            <Pressable className="bg-gray-500 focus:bg-green-600 p-2 ">
              <Text className="text-xs text-white">Available goods</Text>
            </Pressable>
          </View>
        </View>
        <View className="flex flex-row flex-wrap justify-between px-4 gap-y-[1px]">
          {priceData.map((item) => (
            <View key={item.vegetable} className="w-full h-10 bg-white rounded-xl shadow-lg flex flex-row items-center justify-between px-4 py-2 my-2">
              <Text>{item.vegetable}</Text>
              <Text>Rs. {item.price}</Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default market;
