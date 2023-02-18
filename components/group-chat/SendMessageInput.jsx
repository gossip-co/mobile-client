import { View, Text, TextInput, SafeAreaView, ScrollView, KeyboardAvoidingView, Platform, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'


import Ionicons from "react-native-vector-icons/Ionicons";

const SEND_BTN_ICON = "ios-send"

const SendMessageInput = () => {
  return (
    <KeyboardAvoidingView 
    className="w-full items-center border-t border-gray-50"
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    keyboardVerticalOffset={90}
    >
      <SafeAreaView >
        <View className="flex-row   py-3 items-center gap-x-3  mx-5">

        <TextInput 
        className={`${Platform.OS==='ios' ? "py-3": "py-2"}  bg-gray-100  px-3 w-72 rounded-full`}//android py-2/py-3
        placeholder='Your Message'

        />
        <Pressable onPress={()=>console.log("message sent!")}>
        <Ionicons
      name={SEND_BTN_ICON} size={25} color="#3b82f6"/>
        </Pressable>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  )
}

export default SendMessageInput