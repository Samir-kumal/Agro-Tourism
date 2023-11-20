import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React from "react";
import Colors from "../../constants/Colors";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { width,height } from "../../helper/Dimensions";
interface DataProps {
  id: number;
  name: string;
}
const Profile = () => {
  const data: DataProps[] = [
    {
      id: 1,
      name: "profile",
    },
    {
      id: 2,
      name: "farm",
    },
  ];
  return (
    <FlatList
      data={data}
      pagingEnabled={true}
      horizontal={true}
      renderItem={({ item }) => (
        <>
          {item.id === 1 ? (
            <View style={{ backgroundColor: Colors.theme }}>
              {/* <------------- Profile card Section------------------> */}

              <View className="w-screen h-60 flex items-center">
                <View style={styles.profileCard}>
                  <Ionicons name="person" size={82} color={Colors.primary} />
                  <TouchableOpacity className="absolute bottom-0 right-0 opacity-50">
                    <FontAwesome5 name="edit" size={24} color="black" />
                    <Text>edit</Text>
                  </TouchableOpacity>
                </View>
              </View>

              {/* <------------- Profile Details Section------------------> */}

              <View className="h-screen w-screen bg-white rounded-2xl ">
                <View className="flex ">
                  <Text style={styles.textTitle}>
                    Name: <Text style={styles.textValue}>Samir Kumal</Text>
                  </Text>
                  <Text style={styles.textTitle}>
                    Mobile Number:{" "}
                    <Text style={styles.textValue}>9806133772</Text>
                  </Text>
                  <Text style={styles.textTitle}>
                    Age: <Text style={styles.textValue}>21</Text>
                  </Text>
                  <Text style={styles.textTitle}>
                    Gender: <Text style={styles.textValue}>Male</Text>
                  </Text>
                  <Text style={styles.textTitle}>
                    Address: <Text style={styles.textValue}>Palungtar 7</Text>
                  </Text>
                  <Text style={styles.textTitle}>
                    Name: <Text style={styles.textValue}>Samir Kumal</Text>
                  </Text>
                </View>
              </View>
            </View>
          ) : (
            <View
              style={{
                backgroundColor: Colors.theme,
                width: width,
                height: height,
              }}
            >
              <View className=" flex flex-row justify-between relative ">
                <View style= {{height:height*0.92}} className="w-screen  flex  justify-between items-end">
                  <View className="w-screen flex items-center h-40 justify-center">
                    <Text className="text-xl text-center">
                      Please add your Farm by clicking the button below
                    </Text>
                  </View>
               <View className="flex flex-row items-center w-screen justify-between">
               <TouchableOpacity style={styles.farmAddButton}>
                  <Text className="text-white"> Add Farm</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.farmAddButton}>
                  <Text className="text-white"> Add Crops</Text>
                </TouchableOpacity>
               </View>
                </View>
              
              </View>
            </View>
          )}
        </>
      )}
    />
  );
};

export default Profile;

const styles = StyleSheet.create({
  profileCard: {
    width: 140,
    height: 140,
    borderRadius: 100,
    marginTop: 16,
    backgroundColor: "#F3F4F6",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
    elevation: 5,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  textTitle: {
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 15,
    marginLeft: 25,
  },
  textValue: {
    fontWeight: "normal",
    fontSize: 16,
  },
  farmAddButton: {
    paddingHorizontal: 12,
    width: width * 0.4,
    height: 50,
    borderRadius: 10,
    paddingVertical: 2,
    backgroundColor: Colors.primary,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal:4
  },
});
