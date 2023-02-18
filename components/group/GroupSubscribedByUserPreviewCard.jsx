import { View, Text, Image } from 'react-native'
import React from 'react'

const GroupSubscribedByUserPreviewCard = () => {
  return (
    <View className="flex-row w-60 bg-gray-100 px-3 py-2 items-center rounded-2xl mt-3 mr-5">
      <Image
        className="w-14 rounded-3xl bg-gray-50  aspect-square   "
        source={{
          uri: "https://source.unsplash.com/150x150/?portrait?3",
        }}
      />
      <View className="px-2 grow">
        <Text className="text-base tracking-tighter">Gossip Official</Text>
        <View className="flex flex-row ">
            <Text className="font-bold text-xs tracking-tighter text-gray-700">234,56,74</Text>
            <Text className="font-light text-xs tracking-tighter text-gray-700"> Members</Text>
        </View>
      </View>

      </View>
  )
}

export default GroupSubscribedByUserPreviewCard