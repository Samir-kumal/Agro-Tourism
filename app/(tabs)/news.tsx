import { View, Text, StatusBar, useColorScheme } from 'react-native'
import React from 'react'

const news = () => {
const colorScheme = useColorScheme();
  return (
    <View>
      <StatusBar barStyle={colorScheme ==="dark" ? "dark-content": "light-content"} />
      <Text>news</Text>
    </View>
  )
}

export default news