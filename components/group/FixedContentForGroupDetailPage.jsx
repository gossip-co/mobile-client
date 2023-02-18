import { View, Text } from 'react-native'
import React from 'react'

import Ionicons from "react-native-vector-icons/Ionicons";


const ICON_00 = "settings-outline"


const FixedContentForGroupDetailPage = () => {
  return (
    <View className="mb-20 w-80 pr-7">
            <Text className="text-xl font-medium tracking-tighter">Exclusive access to</Text>

            <View className="mt-3 ">
              <View className="flex-row gap-x-3 items-baseline">
              <Ionicons
               name={ICON_00} size={25} color="black"/>
              <View>
                <Text className="text-lg ">Content</Text>
                <Text className="text-gray-800 text-left">
                  You will get exclusive content regular basis 
                  You will get exclusive content regular basis 


                </Text>
              </View>
              </View>
            </View>
            <View className="mt-5 ">
              <View className="flex-row gap-x-3 items-baseline">
              <Ionicons
               name={ICON_00} size={25} color="black"/>
              <View>
                <Text className="text-lg ">Content</Text>
                <Text className="text-gray-800 ">
                  You will get exclusive content regular basis 
                  You will get exclusive content regular basis 

                </Text>
              </View>
              </View>
            </View>
            <View className="mt-5 ">
              <View className="flex-row gap-x-3 items-baseline">
              <Ionicons
               name={ICON_00} size={25} color="black"/>
              <View>
                <Text className="text-lg ">Content</Text>
                <Text className="text-gray-800 ">
                  You will get exclusive content regular basis 
                  You will get exclusive content regular basis 


                </Text>
              </View>
              </View>
            </View>
          </View>
  )
}

export default FixedContentForGroupDetailPage