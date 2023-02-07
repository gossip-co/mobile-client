import { View, Text, Alert } from 'react-native'
import React from 'react'

const Logout = () => {
  return (
    <View className="bg-gray-100 w-80  rounded-xl shadow-inner ">
      <Text 
      onPress={()=>Alert.alert("Are you want to logout")}
      className="text-xl  text-center py-3 text-red-500 ">
        Log out
     </Text>
    </View>
  )
}

export default Logout