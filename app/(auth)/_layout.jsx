import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import {StatusBar} from 'expo-status-bar'

const AuthLayout = () => {
  return (
   <>
   <Stack>
    <Stack.Screen name = "sign-in" options={{headerShown:false}}>

    </Stack.Screen>
    <Stack.Screen name = "sign-up" options={{headerShown:false}}>

</Stack.Screen>
<StatusBar backgroundColor='#161622' />
    </Stack>
    </>
  )
}

export default AuthLayout