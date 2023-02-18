import { View, Text, Pressable } from 'react-native'
import React from 'react'

const GroupSubscribeBtn = () => {
  return (
    <View className="w-screen border-t border-gray-100 mb-5  " >
      <Pressable className="flex-row my-3  bg-blue-500 items-center py-3 rounded-xl px-3 mx-5">
          <Text className="text-white tracking-tighter text-lg grow">Subscribe</Text>
          <Text className="text-white tracking-tighter t">₹30.00 monthly</Text>
      </Pressable>
      </View>
  )
}

export default GroupSubscribeBtn