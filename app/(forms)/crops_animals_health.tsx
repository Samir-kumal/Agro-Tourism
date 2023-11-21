import {
  View,
  Text,
  ScrollView,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { useLocalSearchParams } from "expo-router";

interface ImageProps {
  image: string | null;
}
const CheckupCropsAnimals:React.FC<ImageProps> = () => {
  const { image } = useLocalSearchParams();

  console.log("image component",image);

  return (
    <ScrollView>
      <View>
        <Text>Select crops or Animals</Text>
        {/* <---------------Inner container----------------> */}
        <View>
          <View>
            <Text>Crop</Text>
          </View>
          <View>
            <Text>Animal</Text>
          </View>
        </View>
        {/* <---------------Inner container----------------> */}
        <View>
          <Text>Animal or Crop</Text>
          <TextInput className="border-2 border-gray-600 p-4" />
          <Text>Animal or Crop</Text>
          <TextInput className="border-2 border-gray-600 p-4" />
        </View>

        {/* <--------------for disabled people------------------> */}
        <View className="flex items-center">
          <Text className="text-center">OR</Text>
          <View>
            <Text>
              For people that cannot write can put the problems using
              voice.Click the mic below to place down any issues that you are
              facing
            </Text>
          </View>
          <FontAwesome name="microphone" size={24} color="black" />
        </View>
        {/* <--------------for disabled people------------------> */}

        {/* <--------------File selector ------------------> */}
        <View>
          <View className="flex flex-row p-2">
            <Text>Upload a file</Text>
            <TouchableOpacity className="p-3 bg-gray-400">
              <Text className="text-sm">Select a file</Text>
            </TouchableOpacity>
          </View>
          <View>
            {/* {image &&  <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />} */}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default CheckupCropsAnimals;
