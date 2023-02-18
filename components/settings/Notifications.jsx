import { View, Text } from 'react-native'
import React, {useState} from 'react'

import { Switch } from "@rneui/themed";


const Notifications = () => {
  const [chatNotiChecked, setChatNotiChecked] = useState(true);
  const [subNotiChecked, setSubNotiChecked] = useState(false);


  return (
    <View className="w-screen px-3">
       <View className="flex-row px-2  w-full py-3 items-center bg-gray-100 rounded-t-xl  border-b border-gray-300">
        <Text className=" text-lg tracking-tighter grow">
          Chat Notifications
        </Text>
        <View className="px-2">
          <Switch
            value={chatNotiChecked}
            color="#22c55e"
            onValueChange={(value) => setChatNotiChecked(value)}
          />
        </View>
      </View>
      <View className="flex-row px-2 py-3 items-center bg-gray-100 rounded-b-xl ">
        <Text className=" text-lg tracking-tighter grow">
          Subscription Notifications
        </Text>
        <View className="px-2">
          <Switch
            value={subNotiChecked}
            color="#22c55e"
            onValueChange={(value) => setSubNotiChecked(value)}
          />
        </View>
      </View>
    </View>
  )
}

export default Notifications