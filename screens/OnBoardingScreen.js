import { View, Text, Button, Pressable, SafeAreaView } from 'react-native'
import React from 'react'

import { useNavigation } from '@react-navigation/native'

const OnBoardingScreen = ({navigation}) => {
  return (
    <SafeAreaView className="bg-white  items-center justify-end " style={{flex:1}}>
        <View className="flex-row gap-10  ">
            
            <Pressable
             className="bg-black w-32 px-2 py-3 rounded-lg items-center shadow"
             onPress={()=>navigation.navigate("LoginScreen")}
             >
              <Text className="font-medium text-white">Log In</Text>
            </Pressable>

            <Pressable 
            className="bg-blue-500 w-32 px-2 py-3 rounded-lg items-center shadow"
            onPress={()=>navigation.navigate("RegistrationScreen")}
            >
              <Text className="font-medium text-white">Register</Text>
            </Pressable>
        </View>
    </SafeAreaView>
  )
}

export default OnBoardingScreen