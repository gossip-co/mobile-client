import { View, Text, Pressable } from 'react-native'
import React from 'react'

import { useNavigation } from '@react-navigation/native';
import AntDesign from "react-native-vector-icons/AntDesign";

// Group account detail ex the banck account where the user want to recieve the payment 
const Account = () => {
  const navigation =  useNavigation()
  const icon = "arrowright";
  return (
    <Pressable 
    onPress={()=>navigation.navigate('GetPayouts', {screen: 'Profile'})}
    className="flex-row px-2  w-full py-4 items-center bg-gray-100 rounded-xl ">
      <Text className=" text-lg tracking-tighter grow">Get Payout</Text>
      <View className="px-5 ">
        <AntDesign name={icon} size={25} color="#3F3F46" />
      </View>
    </Pressable>
  )
}

export default Account