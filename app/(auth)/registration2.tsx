import { View, Text, Dimensions, StyleSheet, TextInput } from "react-native";
import React from "react";
import Colors from "../../constants/Colors";
import Button from "../../components/common/Button";
import { router } from "expo-router";
import { width ,height} from "../../helper/Dimensions";

const Registration = () => {
  return (
    <View className="mt-6">
      {/* <---------Form Section-------------> */}
      <View className="flex items-center justify-center gap-y-6">
        <View className="w-fit">
          <Text>Province</Text>
          <TextInput
            style={[styles.textInput, { width: width * 0.9 }]}
            placeholder="First Name"
          />
        </View>
        <View className="w-fit">
          <Text>District </Text>
          <TextInput
            style={[styles.textInput, { width: width * 0.9 }]}
            placeholder="First Name"
          />
        </View>
        <View className="w-fit">
          <Text> Municipality </Text>
          <TextInput
            style={[styles.textInput, { width: width * 0.9 }]}
            placeholder="First Name"
          />
        </View>
        <View className="w-fit">
          <Text> Ward No </Text>
          <TextInput
            style={[styles.textInput, { width: width * 0.9 }]}
            placeholder="First Name"
          />
        </View>
        <View className="w-fit">
          <Text> Registered Card No </Text>
          <TextInput
            style={[styles.textInput, { width: width * 0.9 }]}
            placeholder="First Name"
          />
        </View>
      </View>

      {/* <---------Register  Section-------------> */}
      <View>
        <Text className="text-center text-red-600">
          please only enter if the registered card no if you have one
        </Text>
      </View>

      <View className="flex items-center w-full h-fit mt-8 justify-center">
        <Button
          handlePress={() => {
            router.push({
                pathname: "/(auth)/signin",
                params: { message: "Registration Successful" },
            });
          }}
        >
          <Text
            style={{ color: Colors.text, fontWeight: "bold", fontSize: 20 }}
          >
            Register
          </Text>
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
    marginVertical: 6,
  },
});
