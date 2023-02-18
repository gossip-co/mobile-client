import { View, Text, Image, ScrollView, Pressable } from 'react-native'
import React,  {useState} from 'react'
import AntDesign from "react-native-vector-icons/AntDesign";

import { useNavigation } from '@react-navigation/native';

const ChatCard = () => {
  const navigation = useNavigation()
  return (
        <Pressable 
        onPress={()=>navigation.navigate('ChatScreen', {screen: 'Home'})}
        className="flex-row   items-center  w-screen  py-2  border-gray-100  border-b px-5">
      <Image
        className="w-14 rounded-3xl bg-gray-50  aspect-square "
        source={{
          uri: "https://source.unsplash.com/150x150/?portrait?3",
        }}
      />
      <View className="px-7 ">
        <Text className=" text-lg tracking-tighter ">
            Gossip alert abc
        </Text>
        <View className="flex flex-row items-center">
            <Text className=" text-gray-800  ">234,56,74</Text>
            <Text className="font-light tracking-tighter text-gray-800 text-xs"> members</Text>
        </View>
      </View>
      <View className="grow items-end pr-4 ">
      {/* <AntDesign
      name="arrowright" size={25} color="black"/> */}
      <View className="bg-red-600 rounded-full py-1 px-1.5">
        <Text className="text-xs text-white">400</Text>
      </View>
      </View>
      
    </Pressable>
    
  )
}

export default ChatCard