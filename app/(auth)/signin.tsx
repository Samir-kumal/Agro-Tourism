import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  StatusBar,
  useColorScheme,
  TouchableOpacity,
  TextInput,
  Dimensions,
  Alert,
} from "react-native";
import React, { useEffect } from "react";
import Button from "../../components/common/Button";
import { router, useLocalSearchParams } from "expo-router";

const SignIn = () => {
  const colorScheme = useColorScheme();
  const width = Dimensions.get("window").width;
    const height = Dimensions.get("window").height;
    const {message} = useLocalSearchParams();

    // useEffect(() => {
      if(message){
        setTimeout(()=>{
            Alert.alert(message.toString())
        },1000)
      }
    // },[message])

  return (
    <View>
      <StatusBar
        barStyle={colorScheme === "dark" ? "dark-content" : "light-content"}
      />

      <ImageBackground
        source={require("../../assets/images/onboard/signinPageBackground.png")}
        style={{
          height: height,
          width: width,
        }}
      >
        <View style={styles.overlay}></View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>BMS</Text>
          <Text style={styles.title}>Farming</Text>
        </View>

        <View>
          <Text style= {styles.textLabel}>Email</Text>
          <TextInput style={styles.textInput} placeholder="Email" />
          <Text style= {styles.textLabel}>Password</Text>

          <TextInput style={styles.textInput} placeholder="Password" />
          {/* forgot password section */}
          <View className="flex flex-row justify-between ">
            <View>
              <Text style= {styles.textLabel}>Remember number</Text>
            </View>
            <View>
              <Text style= {styles.textLabel}>Forgot Password</Text>
            </View>
          </View>
        
            {/* ............Register Button Section ................ */}
          <View className="flex items-center justify-center mt-6">
            <Button
              handlePress={() => router.push("/(tabs)")}
           
            >
                <Text className="text-xl text-white font-bold">Login</Text>
            </Button>
              {/* ............Notice Section ................ */}
          <View className="h-24 w-screen items-center justify-end">
            <Text className="text-xl text-center text-white">
            if you are a new user please register your account from below
            </Text>
          </View>
            <TouchableOpacity
              onPress={() => router.push("/(auth)/registration1")}

           
            >
                <Text className="text-xl text-white font-bold">Register</Text>
            </TouchableOpacity>
          </View>

          <View style= {styles.messageContainer}>
<Text style = {styles.message}>
If you are facing any technical issue then click this link below to solve the issue
</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  titleContainer: {
    width: "100%",
    height: 190,
    marginTop: 40,
  },
  title: {
    color: "white",
    fontSize: 50,
    fontWeight: "bold",
    textAlign: "center",
  },

  textInput: {
    height: 58,
    margin: 12,
    borderWidth: 1,
    backgroundColor: "white",
    borderRadius: 4,
    paddingHorizontal: 12,
  },
  textLabel:{
    fontSize:16,
    color:"white",
    paddingHorizontal:12,
  },
  messageContainer:{
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    width:"100%",
    height: "auto",
    marginTop: 50,
  },
  message:{
color:"white",
fontSize:20,
textAlign:"center",
padding:12,
  }

});
