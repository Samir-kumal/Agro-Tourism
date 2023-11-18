import { View, Text, TouchableOpacity,TouchableOpacityProps, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../../constants/Colors'

interface ButtonProps extends TouchableOpacityProps {
    children: React.ReactNode,
    handlePress?: () => void,
    
}
const Button:React.FC<ButtonProps> = ({children, handlePress, ...props}) => {
    
  return (
    <TouchableOpacity style= {styles.button} onPress={handlePress} >
        {children}
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
    button:{
        backgroundColor:Colors.primary,
        paddingHorizontal:12,
        paddingVertical:18,
        borderRadius:12,
        width:"90%",
        justifyContent:"center",
        alignItems:"center",
    }
})