import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'
import Colors from '../../constants/Colors'

const WeatherCard = () => {
  return (
    <View className=" mt-[60px] ml-2  border-l-[1px] border-gray-300">
          <Text
            style={styles.weatherContainer}
            className=" text-lg px-2 py-1 text-white "
          >
            Weather
          </Text>
          <View className="px-2 flex flex-row flex-wrap justify-between">
            <View>
              <Feather className="" name="sun" size={24} color="black" />
              <Text>Sunny</Text>
              <Text className="text-lg">Clear Sky</Text>
              <Text className="text-lg">Kathmandu</Text>
            </View>
            <View>
              <Text>24.5. C</Text>
            </View>
          </View>
          <View>
            <TouchableOpacity
              style={{ backgroundColor: Colors.primary }}
              className="py-2 px-2 mt-12"
            >
              <Text className="text-white">Click to see more</Text>
            </TouchableOpacity>
          </View>
        </View>
      
  )
}

export default WeatherCard

const styles = StyleSheet.create({
    weatherContainer: {
        backgroundColor: Colors.primary,
        // paddingVertical: 16,
      },
    
})