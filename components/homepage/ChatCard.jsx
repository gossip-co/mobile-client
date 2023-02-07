import { View, Text, Image, ScrollView } from 'react-native'
import React,  {useState} from 'react'
import Ionicons from "react-native-vector-icons/Ionicons";

const ChatCard = () => {
  return (
        <View className="flex flex-row  gap-x-11  w-screen  py-2 pt-4 border-gray-100  border-b justify-center">
      <Image
        className="w-14 rounded-3xl bg-gray-50  aspect-square "
        source={{
          uri: "https://source.unsplash.com/150x150/?portrait?3",
        }}
      />
      <View className="flext flex-col ">
        <Text className=" text-lg font-medium">
            Gossip Alert
        </Text>
        <View className="flex flex-row">
            <Text className="font-bold text-gray-700 tracking-tighter">234,56,74</Text>
            <Text className="font-light tracking-tighter text-gray-700"> Members</Text>
        </View>
      </View>
      <View className="flex flex-col pl-7 items-center py-2">
      <Ionicons
      name="arrow-forward" size={25} color="#4b5563"/>
      </View>
      
    </View>
    
  )
}

export default ChatCard