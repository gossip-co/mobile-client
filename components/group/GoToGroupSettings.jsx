import { View, Text, Image } from 'react-native'
import React from 'react'

import { useNavigation } from '@react-navigation/native';

import Ionicons from "react-native-vector-icons/Ionicons";


const GoToGroupSettings = () => {
  const navigation = useNavigation()
    const settingsIcon = "settings-outline"

  return (
    <View className="">
      <Text className="text-base  tracking-tighter">Group</Text>

      <View className="flex-row w-[90%] bg-gray-100 px-3 py-5 items-center rounded-2xl mt-2">
      <Image
        className="w-14 rounded-3xl bg-gray-50  aspect-square   "
        source={{
          uri: "https://source.unsplash.com/150x150/?portrait?3",
        }}
      />
      <View className="pl-5 ">
        <Text className="text-lg font-medium tracking-tighter">Gossip</Text>
        <View className="flex flex-row grow ">
            <Text className="font-medium tracking-tighter text-gray-700">234,56,74</Text>
            <Text className="font-light tracking-tighter text-gray-700 "> Members</Text>
        </View>
      </View>
      <View className="items-center w-16 grow ">
      <Ionicons
      onPress={() => navigation.navigate('Profile', { screen: 'GroupSettings' })}
      name={settingsIcon} size={25} color="#3b82f6"/>
      </View> 
      </View>

    </View>
  )
}

export default GoToGroupSettings