import { View, Text, Alert, Pressable } from 'react-native'
import React from 'react'

const LaunchGroup = () => {
  return (
    <Pressable
    onPress={()=>Alert.alert("Please complete your group profile before launching it")}
    className="bg-green-500 items-center py-1.5 px-2 mx-3 rounded-full ">
      <Text
       className="text-xs tracking-tighter text-white ">Launch Group</Text>
    </Pressable>
  )
}

export default LaunchGroup