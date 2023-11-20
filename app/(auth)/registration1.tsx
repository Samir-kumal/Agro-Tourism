import { View, Text, TextInput, StyleSheet, Dimensions } from "react-native";
import React from "react";
import Colors from "../../constants/Colors";
import Button from "../../components/common/Button";
import { router } from "expo-router";
import { width } from "../../helper/Dimensions";


const Registration = () => {
  const height = Dimensions.get("window").height;
  return (
    <View>
      <View className="flex-row justify-center gap-x-6 mt-6">
        <View className="w-fit">
          <Text>First Name</Text>
          <TextInput style={styles.textInput} placeholder="First Name" />
        </View>
        <View className="w-fit">
          <Text>Last Name</Text>
          <TextInput style={styles.textInput} placeholder="First Name" />
        </View>
      </View>
      {/* <----- Gender Section ------> */}
      <View className="h-32 mt-6">
        <Text>Gender</Text>
        <View className="flex-row justify-around">
          <Text>Male</Text>
          <Text>Female</Text>
          <Text>others</Text>
        </View>
      </View>

      {/* <----- Phn and Password Section ------> */}
      <View className="flex items-center justify-center gap-y-6">
        <View className="w-fit">
          <Text>Phone Number</Text>
          <TextInput
            style={[styles.textInput, { width: width * 0.9 }]}
            placeholder="First Name"
          />
        </View>
        <View className="w-fit">
          <Text>Password </Text>
          <TextInput
            style={[styles.textInput, { width: width * 0.9 }]}
            placeholder="First Name"
          />
        </View>
        <View className="w-fit">
          <Text> Confirm Password </Text>
          <TextInput
            style={[styles.textInput, { width: width * 0.9 }]}
            placeholder="First Name"
          />
        </View>
      </View>

      {/* <----- Next Button ------> */}
      <View className="flex items-center justify-center mt-6">
        <Button handlePress = {()=> router.push("/(auth)/registration2")}>
          <Text style= {{color:Colors.text, fontWeight:"bold", fontSize:20}}>Next</Text>
        </Button>
      </View>
    </View>
  );
};

export default Registration;

const styles = StyleSheet.create({
  textInput: {
    width: width * 0.4,
    borderColor: Colors.primary,
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
});
