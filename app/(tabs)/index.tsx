import { View, Text, useColorScheme, StatusBar } from 'react-native'
import React from 'react'

const Home = () => {
  const colorScheme = useColorScheme()
  return (
    <View>
      <StatusBar barStyle={colorScheme ==="dark" ? "dark-content": "light-content"} />
      
      <Text>Home</Text>
    </View>
  )
}

export default Home