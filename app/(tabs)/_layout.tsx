import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import Colors from "../../constants/Colors";
import { FontAwesome, Ionicons, Foundation, Entypo } from "@expo/vector-icons";
import HeaderRight from "../../components/HeaderRight";

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        headerStyle: {
          backgroundColor: Colors.primary,
        },
        headerTitleStyle: {
          color: Colors.secondary,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Bms Farming",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={24} color={color} />
          ),
          headerLeft: () => (
            <Entypo name="menu" size={34} color={Colors.secondary} />
          ),
          headerRight: () => <HeaderRight colors={Colors.secondary} />,
        }}
      />
      <Tabs.Screen
        name="news"
        options={{
          title: "News",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="newspaper-o" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="work"
        options={{
          title: "Work",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="suitcase" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="diary"
        options={{
          title: "Diary",
          tabBarIcon: ({ color, size }) => (
            <Foundation name="clipboard-notes" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="market"
        options={{
          title: "market",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cart" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
