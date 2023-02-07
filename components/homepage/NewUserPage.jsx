import { View, Text, TextInput } from "react-native";
import React from "react";

import SearchInput from "../search/SearchInput";

const NewUserPage = () => {
  return (
    <View className="flex flex-col mt-48 ">
      <Text className="font-bold text-3xl tracking-tighter text-center ">
        Welcome to Gossip
      </Text>
      <Text className="text-xm tracking-tighter text-center text-gray-600">
        Join your favourite community
      </Text>
      <TextInput
        className="border border-gray-300 px-2 py-4 text-center my-3 rounded-2xl text-xs"
        editable
        placeholder="Find Communty/ Paste group Link"
        keyboardType="text"
      />
    </View>
  );
};

export default NewUserPage;
