import { View, Text, Image, Alert, Pressable, Platform } from 'react-native'
import React from 'react'

import { useNavigation } from '@react-navigation/native'

const ChatCard = () => {
  const navigation = useNavigation()
  return (
    <View className="flex-row  py-2">
       <Pressable onPress={()=>navigation.navigate('UserProfile', {screen: 'Home'})}>

<Image
  className="w-12 rounded-full bg-gray-50  aspect-square"
  source={{
    uri: "https://source.unsplash.com/150x150/?portrait?3",
  }}
/>
</Pressable>
      <View className="px-5">
        <View className="flex-row items-center">
          <View>
          <Text className="text-base text-blue-500" >
            Aditya Pushkar
        </Text>
          </View>

      <Text className="text-xs font-light text-gray-700 left-full">Today at 12:00pm</Text>
        </View>
        <View>
        <Text className={`text-gray-800 pr-8 ${Platform.OS === "android" ? "text-xs": null}`}>
            Hellow guys any plan for party, let men know who 
            are coming or who are no coming, stag entry is not allowed and so 
            Pleae came with your partner
        </Text>
        </View>
      </View>



      </View>
  )
}

export default ChatCard