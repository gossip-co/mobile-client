import { View, Text } from "react-native";
import React from "react";

import Fontisto from "react-native-vector-icons/Fontisto";

const ExtraOptions = () => {
  const icon = "world-o";
  return (
    <View className="w-screen px-3">
      <View className="flex-row px-2  py-4 items-center bg-gray-100 rounded-t-xl border-b border-gray-300">
        <Text className=" text-lg tracking-tighter grow">New Release</Text>
        <View className="px-5 ">
          <Fontisto name={icon} size={25} color="#3F3F46" />
        </View>
      </View>

      <View className="flex-row px-2  py-4 items-center bg-gray-100  border-b border-gray-300">
        <Text className=" text-lg tracking-tighter grow">FAQ / Contact Us</Text>
        <View className="px-5 ">
          <Fontisto name={icon} size={25} color="#3F3F46" />
        </View>
      </View>

      <View className="flex-row px-2  py-4 items-center bg-gray-100  border-b border-gray-300">
        <Text className=" text-lg tracking-tighter grow">Community Guidelines</Text>
        <View className="px-5 ">
          <Fontisto name={icon} size={25} color="#3F3F46" />
        </View>
      </View>

      <View className="flex-row px-2  py-4 items-center bg-gray-100  border-b border-gray-300">
        <Text className=" text-lg tracking-tighter grow">Terms of Services</Text>
        <View className="px-5 ">
          <Fontisto name={icon} size={25} color="#3F3F46" />
        </View>
      </View>

      <View className="flex-row px-2  py-4 items-center bg-gray-100  rounded-b-xl">
        <Text className=" text-lg tracking-tighter grow">Privacy Policy</Text>
        <View className="px-5 ">
          <Fontisto name={icon} size={25} color="#3F3F46" />
        </View>
      </View>
      
    </View>
  );
};

export default ExtraOptions;
