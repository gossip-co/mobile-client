import {
  View,
} from "react-native";
import React from "react";
import { ScrollView } from "react-native";


import ChatCard from "./ChatCard";
import SendMessageInput from "./SendMessageInput";



const ChatScreen = ({}) => {

  // navigation.setOptions({title: "Hello World "})
  // const channelName = route.params?.channelName
  // console.group("CHANNELS NAME>>>>", channelName)
  return (
    <View style={{ flex: 1 }} className="bg-white  px-3 ">

          <ScrollView showsVerticalScrollIndicator={false}>
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
          </ScrollView>


        <SendMessageInput/>

    </View>
  );
};

export default ChatScreen;
