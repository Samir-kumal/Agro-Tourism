import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Platform,
  
} from "react-native";
import React, { useState, useEffect,SetStateAction } from "react";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";
import * as ImagePicker from "expo-image-picker";
import { router } from "expo-router";


interface ImagePickerCardProps{}
const ImagePickerCard:React.FC<ImagePickerCardProps> = () => {
  const [image, setImage] = useState<string>("");

  const pickImage = async () => {
 try {
     // No permissions request is necessary for launching the image library
     let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });


    if (!result.canceled && result.assets) {
      setImage(result.assets[0].uri);
    }

    router.push({
      pathname: "/(forms)/crops_animals_health",
      params: {
        image: image[0],
      }
    });

 } catch (error) {
   console.log(error);
 }
  };
  const captureImage = async ()=>{
   try {
    await ImagePicker.requestCameraPermissionsAsync()
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing:true,
      quality: 1,

    })
    console.log(result)
    if(!result.canceled && result.assets){
      setImage(result.assets[0].uri);


    }
   } catch (error) {
    console.log(error)
   }
  }

  return (
    <View className="bg-gray-200 w-screen  mt-4 pt-4 mb-2">
      <Text className="text-center text-xl font-bold">
        Crops or Animals health check
      </Text>
      <View className="flex flex-row w-full justify-around h-32  items-center ">
        <TouchableOpacity onPress={pickImage} style={styles.photoContainer}>
          <MaterialIcons
            name="photo-library"
            size={42}
            color={Colors.primary}
          />
          <Text>Gallery</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={captureImage} style={styles.photoContainer}>
          <Ionicons name="ios-camera-sharp" size={42} color={Colors.primary} />
          <Text>Take photo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.photoContainer}>
          <MaterialIcons name="comment" size={42} color={Colors.primary} />
          <Text>Comment</Text>
        </TouchableOpacity>
      </View>
      <View className="w-[95vw] mx-auto relative bg-white p-2 flex items-center rounded-lg ">
        <View className="absolute top-1/2 left-1">
          <MaterialIcons name="question-answer" size={24} color="black" />
        </View>
        <Text className="font-bold font-xl px-8">
          More details on various problems faced by Farmers{" "}
        </Text>
        <Text style={{ color: Colors.primary }}>
          Click if there is not solution of your problem
        </Text>
        <View className="absolute bottom-2 right-2">
          <MaterialIcons name="arrow-forward-ios" size={16} color="black" />
        </View>
      </View>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
   
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
    </View>
    </View>
  );
};

export default ImagePickerCard;

const styles = StyleSheet.create({
  photoContainer: {
    display: "flex",
    alignItems: "center",
  },
});
