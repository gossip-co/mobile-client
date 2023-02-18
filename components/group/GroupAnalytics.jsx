import { View, Text } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'

const GroupAnalytics = () => {
  return (
    <View className=" bg-white px-5 pt-5" style={{flex:1}}>
    <View>
      <Text className="text-xl tracking-tighter font">User Joined</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View className="flex-row bg-gray-100 items-center px-2 py-3 pr-10 rounded-2xl mt-3 mr-3">
          <Text className="text-xl text-gray-800">this month</Text>
          <View className="bg-gray-200  rounded-full py-1.5 px-2 left-full mr-3">
            <Text className="text-base text-gray-800">3498</Text>
          </View>
        </View>
        <View className="flex-row bg-gray-100 items-center px-2 py-3 pr-10 rounded-2xl mt-3 mr-3">
          <Text className="text-xl text-gray-800">this week</Text>
          <View className="bg-gray-200  rounded-full py-1.5 px-2 left-full mr-3">
            <Text className="text-base text-gray-800">34</Text>
          </View>
        </View>
        <View className="flex-row bg-gray-100 items-center px-2 py-3 pr-10 rounded-2xl mt-3 mr-3">
          <Text className="text-xl text-gray-800">this year</Text>
          <View className="bg-gray-200  rounded-full py-1.5 px-2 left-full mr-3">
            <Text className="text-base text-gray-800">347890908</Text>
          </View>
        </View>
      </ScrollView>
    </View>

    <View className="mt-7">
      <Text className="text-xl tracking-tighter font">Revenue</Text>
      <View className="mt-3">
        <View className="h-48  bg-gray-50 rounded-2xl px-3 py-2">
          <View className="flex-row">
          <View className="grow">
            <Text className="text-base font-bold">₹ 1234</Text>
            <Text className="tracking-tighter text-lg text-gray-800">this month revinue</Text>
          </View>
          <View className="">
            <Text className="text-base font-bold text-center ">₹ 1234</Text>
            <Text className="tracking-tighter text-lg text-gray-800">total revinue</Text>
          </View>
          </View>
          <View className="flex-row mt-16 ">
          <View className="grow">
            <Text className="text-base font-bold ">₹ 1234</Text>
            <Text className="tracking-tighter text-lg text-gray-800">revenue after cut</Text>
          </View>
          <View className="">
            <Text className="text-base text-center font-bold">₹ 1234</Text>
            <Text className="tracking-tighter text-lg text-gray-800">revinue after cut</Text>
          </View>
          </View>
        </View>
        
      </View>
    </View>
    </View>
  )
}

export default GroupAnalytics