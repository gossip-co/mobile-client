import { View, Text } from "react-native";
import React from "react";

import AntDesign from "react-native-vector-icons/AntDesign";

const PaymentMethods = () => {
  const icon = "arrowright";
  return (
    <View className="flex-row px-2  w-full py-4 items-center bg-gray-100 rounded-xl">
      <Text className=" text-lg tracking-tighter grow">Payments</Text>
      <View className="px-5 ">
        <AntDesign name={icon} size={25} color="#3F3F46" />
      </View>
    </View>
  );
};

export default PaymentMethods;
