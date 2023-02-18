import { View, Text, Pressable } from "react-native";
import React from "react";

import { useNavigation } from "@react-navigation/native";
import AntDesign from "react-native-vector-icons/AntDesign";

const GoPaymentMethods = () => {
  const navigation = useNavigation()
  const icon = "arrowright";
  return (
    <Pressable
    onPress={()=>navigation.navigate('PaymentMethods', {screen: 'Profile'})}
     className="flex-row px-2  w-full py-4 items-center bg-gray-100 rounded-xl">
      <Text className=" text-lg tracking-tighter grow">Payment Methods</Text>
      <View className="px-5 ">
        <AntDesign name={icon} size={25} color="#3F3F46" />
      </View>
    </Pressable>
  );
};

export default GoPaymentMethods;
