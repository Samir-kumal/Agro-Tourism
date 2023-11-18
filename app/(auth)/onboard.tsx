import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../../constants/Colors'
import { router } from 'expo-router'

const OnBoard = () => {
  return (
    <View>
      <Text>OnBoard</Text>
      <TouchableOpacity onPress={()=> router.push("/(auth)/signin")} style ={{backgroundColor:Colors.primary,paddingHorizontal:12}}>
        <Text>
          Start
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default OnBoard