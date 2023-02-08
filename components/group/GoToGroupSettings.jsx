import { View, Text, Image } from 'react-native'
import React from 'react'

import Ionicons from "react-native-vector-icons/Ionicons";


const GoToGroupSettings = () => {
    const settingsIcon = "settings-outline"

  return (
    <View className="">
      <Text className="text-xl  tracking-tighter">Group </Text>

      <View className="flex-row w-[90%] bg-gray-100 px-3 py-5 items-center rounded-2xl mt-2">
      <Image
        className="w-14 rounded-3xl bg-gray-50  aspect-square   "
        source={{
          uri: "https://source.unsplash.com/150x150/?portrait?3",
        }}
      />
      <View className="px-2 grow">
        <Text className="text-lg font-medium tracking-tighter">Gossip Official</Text>
        <View className="flex flex-row ">
            <Text className="font-bold tracking-tighter text-gray-700">234,56,74</Text>
            <Text className="font-light tracking-tighter text-gray-700"> Members</Text>
        </View>
      </View>
      <View className="px-3">
      <Ionicons
      name={settingsIcon} size={25} color="#3b82f6"/>
      </View> 
      </View>

    </View>
  )
}

export default GoToGroupSettings