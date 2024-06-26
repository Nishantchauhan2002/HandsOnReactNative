import { Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const RootLayout = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white" >
      <Text className = "text-3xl">RootLayout</Text>
      <Link href="/profile" style={{color:'s'}}>Go the next screen </Link>
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