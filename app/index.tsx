import { Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const RootLayout = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white" >
      <Text className = "text-3xl font-pblack">RootLayout</Text>
      <Link href="/home" style={{color:'s'}}>Go the Home screen </Link>
    </View>
  )
}

export default RootLayout

// const styles = StyleSheet.create({
//   container:{
//     display:'flex',
//     flex:1,
//     alignItems:'center',
//     justifyContent:'center'
//   }
// })