import { View, Text, Image, ScrollView, Button, Platform, Pressable } from "react-native";
import React from "react";
import { Video, AVPlaybackStatus } from "expo-av";
import { useNavigation } from "@react-navigation/native";

import Ionicons from "react-native-vector-icons/Ionicons";

import GroupSubscribeBtn from "./GroupSubscribeBtn";
import FixedContentForGroupDetailPage from "./FixedContentForGroupDetailPage";


const ICON_00 = "settings-outline"
const ICON_ARROW = "arrow-forward"

const GroupDetail = () => {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const navigation = useNavigation()

  const vidOnLoading = () => {
    return "some kind of spinner";
  };

  return (
    <View
      style={{ flex: 1 }}
      className=" bg-white items-center justify-center " 
    >

      
      <ScrollView bounces={false} showsVerticalScrollIndicator={true} >
        <View className="w-screen h-40 bg-gray-50">
          <Image
            onPress={() => {
              console.log("Profile timeline pic changed option...");
            }}
            className="w-screen h-40 bg-gray-50 py-2 aspect-auto"
            source={{
              uri: "https://source.unsplash.com/1640x856/?portrait?3",
            }}
          />

          <View className="px-5 w-fit items-left">
            <Image
              style={{ borderWidth: 4, borderColor: "white" }}
              onPress={() => {
                console.log("Profile pic changed option...");
              }}
              className="w-20 rounded-3xl  bg-gray-50 bottom-8  border-4 border-white aspect-square"
              source={{
                uri: "https://source.unsplash.com/150x150/?portrait?3",
              }}
            />
          </View>
        </View>

        <View className="top-14 px-5">
          <Text className="font-bold text-2xl  tracking-tighter ">
            Gossip Official{" "}
          </Text>
          <Text className="text-gray-900 text-xs tracking-tighter px-0.5">
            9836790 Members
          </Text>
          <Text className="text-gray-800  text-xs py-0.5 px-0.5">
            Created on 12 July 2021
          </Text>

          <View
            className={`items-center jutify-center rounded-xl ${
              Platform.OS === "ios" ? "my-5" : null
            }  `}
          >
            <Video
              ref={video}
              className={`${
                Platform.OS === "ios" ? "bg-gray-50" : null
              } h-56  rounded-xl border-4  border-white  w-full  `}
              source={{
                uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
              }}
              isMuted={false}
              useNativeControls
              resizeMode="contain"
              isLooping={false}
              onPlaybackStatusUpdate={(status) => setStatus(() => status)}
              onLoad={vidOnLoading}
            />
          </View>

          <View className="">
          <View className="flex-row items-center">
            <Text className="text-xl font-medium tracking-tighter grow">About this group</Text>
            <Pressable 
            className="bg-gray-100 rounded-full mx-2 px-0.5 " 
            onPress={()=>navigation.navigate('AboutGroup', {'screen': 'Search'})}
            >
            <Ionicons
               name={ICON_ARROW} size={25} color="#3b82f6"/>
            </Pressable>

          </View>
            <Text className="text-gray-800  my-5 pr-3">
            This is the group about fasion, you will get the exclusive content on daily bases, 
            engaged wiht like minded people and grow in you carier ...

            </Text>
          </View>

          <FixedContentForGroupDetailPage/>


        </View>

      </ScrollView>

      <GroupSubscribeBtn />
    </View>
  );
};

export default GroupDetail;
