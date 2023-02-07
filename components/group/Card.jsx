import { View, Text, Image} from "react-native";
import React from "react";

const Card = () => {
  return (
    <View className=" bg-gray-100 w-[90%] px-3 py-3 pt-4 rounded-2xl justify-center  my-2">
        <View className="flex flex-row gap-3 rounded-3xl ">
      <Image
        className="w-14 rounded-3xl bg-gray-50  aspect-square   "
        source={{
          uri: "https://source.unsplash.com/150x150/?portrait?3",
        }}
      />
      <View className="flext flex-col">
        <Text className=" text-lg">
            Gossip Group what
        </Text>
        <View className="flex flex-row ">
            <Text className="font-bold ">234,56,74</Text>
            <Text className="font-light"> Members</Text>
        </View>
      </View>
      <Text className="px-5 text-blue-600 text-lg font pl-9 rounded-full h-8 py-1.5
                      mt-32">
            View
        </Text>
    </View>
    <Text className=" w-full px-3 pt-1 ">
            {/* This is group discription, max alphabet example below */}
            what the fk going on at this fuxking place whhhhhhhhh what 
            what the fk going on at this fuxking place whhhhhhhhh what hame
        </Text>
    </View>
  );
};

export default Card;
