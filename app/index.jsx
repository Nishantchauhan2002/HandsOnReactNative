import { View, Text ,Image} from 'react-native'
import React from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from 'expo-router'
import { ScrollView } from 'react-native'
import { images } from '../constants'


const RootLayout = () => {
  return (
  
    <SafeAreaView className="bg-primary h-full">
      <ScrollView  contentContainerStyle={{
          height: "100%",
        }}>

          <View className="w-full flex justify-center items-center h-full px-4">
          <Image
            source={images.logo}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
          />

          <Image
            source={images.cards}
            className="max-w-[380px] w-full h-[298px]"
            resizeMode="contain"
          />
          </View>

      </ScrollView>
    </SafeAreaView>
     
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