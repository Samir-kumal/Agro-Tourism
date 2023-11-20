import { View, Text, Touchable } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons,Ionicons,Entypo } from '@expo/vector-icons'; 
import { TouchableOpacity } from 'react-native-gesture-handler';
import { router } from 'expo-router';
import Colors from '../constants/Colors';

interface HeaderRightProps {
  colors:string
}

const HeaderRight: React.FC<HeaderRightProps> = ({colors}) => {
  return (
    <View style={{display:"flex",flexDirection:"row",padding:10}}>
     <TouchableOpacity onPress={()=>router.push("/(statusbar)/notification")}>
     <MaterialCommunityIcons name="bell-ring" size={24} color={colors} />
    </TouchableOpacity> 
    <TouchableOpacity onPress={()=>router.push("/(statusbar)/profile")}>

    <Ionicons name="person" size={24} color={colors}/>
    </TouchableOpacity> 
    <TouchableOpacity>
    <Entypo name="dots-three-vertical" size={24} color={colors} />
    </TouchableOpacity> 
    </View>
  )
}

export default HeaderRight