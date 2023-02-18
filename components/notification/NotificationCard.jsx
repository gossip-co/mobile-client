import { View, Text, Image, Pressable } from "react-native";
import React from "react";

import Entypo from 'react-native-vector-icons/Entypo';

const NotificationCard = () => {
  const ICON = "bell"
  return (
    <View className="flex-row items-center px-3 py-2 border-b border-gray-100">
      <View className="self-start bg-yellow-50 rounded-full py-2 px-2 ">
      <Entypo name={ICON} size={30} color="#f59e0b"/>
      </View>
      <View className="px-2">
        <View className="flex-row  items-center">
          <Text className="text-lg font-medium  tracking-tighter ">Subscription Added</Text>
          <Text className="left-full text-xs text-gray-700 tracking-tighter">Yesterday 12:00pm</Text>
        </View>
        <View className="pr-12">
        <Text className="text-gray-800">
          Your subscription for group charyminati is added, you can enjoy the fuck out of this and dont cry 
          if you will get roasted, sab ak dusre ki gand mar lo full bakchodi karo 
        </Text>
      </View>
      </View>
    </View>
  );
};

export default NotificationCard;
