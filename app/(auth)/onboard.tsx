import { View, Text, TouchableOpacity, SafeAreaView, ImageBackground } from 'react-native'
import React from 'react'
import Colors from '../../constants/Colors'
import { router } from 'expo-router'
import Button from '../../components/common/Button'

const OnBoard = () => {
  return (
    <SafeAreaView>
      <ImageBackground
        source={require('../../assets/images/onboard/onboard.jpg')}
        style={{
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        resizeMode="cover"
      >
        <View className='flex  items-center justify-around h-full w-screen'>
      <Text className='font-bold text-5xl text-white'>BMS Farming</Text>
      <Text style= {{backgroundColor:'rgba(0, 0, 0, 0.5)'}} className='font-bold text-lg p-2 rounded-2xl translate-y-18 text-white '>"GreenFields: Your farming ally! Expert advice, weather alerts, and tech solutions. Join us for a prosperous farming journey, cultivating success from soil to market."</Text>

      
      <Button handlePress={()=>router.push("/(auth)/signin")}>
      <Text className='text-white text-xl'>
          Start
        </Text>
      </Button>
    </View>
        </ImageBackground>
    </SafeAreaView>
  )
}

export default OnBoard