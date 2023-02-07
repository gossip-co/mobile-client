import { View, Text } from "react-native";
import React from "react";

const NotificationCard = () => {
  return (
    <View className="flex items-center  border-b border-gray-100 py-3 w-screen px-5 ">
      <View className="flex flex-row items-center">
        <Text className="font-bold pr-[96] text-lg tracking-tighter " >
          Purchased Completed
        </Text>
        <Text className="text-gray-700 ">12-02-11</Text>
      </View>
      <Text className="text-gray-800 tracking-tighter">
        Your subscription of the group carryminati is added, you can engage with
        the communit as you know  enjoy the fuck out of this
      </Text>
    </View>
  );
};

export default NotificationCard;
