import { View, Text, Image, Modal, Button } from "react-native";
import React, {useState} from "react";

import FontAwesome from "react-native-vector-icons/FontAwesome";

import { useNavigation } from '@react-navigation/native';


const Profile = () => {
  const navigation = useNavigation()
  const timeLineImg = true;
  const profilePic = true;
  const bio = true;
  const insta = false;
  const twitter = false;

  const editIcon = "edit"
  const instaIcon = "instagram"
  const twitterIcon = "twitter"

  return (
    <View className="h-screen bg-white ">
        <Image
          className="w-screen h-36 bg-gray-50 py-2 aspect-auto"
          source={{
            uri: "https://source.unsplash.com/1500x500/?portrait?3",
          }}
        />

      <View className="px-5 w-fit items-left">
        <Image
        className="w-24 rounded-full bg-gray-50 bottom-10  border-4 border-white  aspect-square "
        source={{
          uri: "https://source.unsplash.com/150x150/?portrait?3",
        }}
      />
      
      
      <View className="bottom-8 ">
      <Text className="font-bold text-2xl  tracking-tighter">Aditya Pushkar</Text>
      <Text className="text-gray-900 ">@aditya_pushkar</Text>
      <Text className="w-[93%] text-sm text-gray-800 tracking-tighter py-3">
        Creating something out of nothing, software engineer,
        Building, what the fuck going on what the hell is im doing here 
        hell out of here 
      </Text>

      {/* Twitter */}
      <View className="flex flex-row items-center">
      <FontAwesome 
        name={twitterIcon}  size={25} color="#22c55e"/>
      <Text className="text-green-600 px-1">@aditya_pushkar</Text>
      </View> 
        {/* Instagram */}
        <View className="flex flex-row items-center py-1">
      <FontAwesome 
        name={instaIcon}  size={25} color="#22c55e"/>
      <Text className="text-green-600 px-1">@_aditya_pushkar</Text>
      </View>  
      <Text className="py-3 text-gray-800">Joind 11 July, 2023</Text>
      </View>
      </View>


    </View>
  );
};

export default Profile;
