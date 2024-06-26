import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const RootLayout = () => {
  return (
    <View style={styles.container}>
      <Text>RootLayout</Text>
      <Link href="/profile" style={{color:'s'}}>Go the next screen </Link>
    </View>
  )
}

export default RootLayout

const styles = StyleSheet.create({
  container:{
    display:'flex',
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  }
})