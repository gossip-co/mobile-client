import { View, Text, Pressable } from 'react-native'
import React from 'react'

const GetPayouts = () => {
  return (
    <View className="bg-white items-center justify-center" style={{flex:1}}>
      
      <Pressable className="bg-blue-500 rounded-full py-2 px-2">
        <Text className="text-white text-center">Connect Account</Text>
      </Pressable>
    </View>
  )
}

export default GetPayouts