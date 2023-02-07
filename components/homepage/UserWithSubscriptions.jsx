import { View, Text, ScrollView, Button } from 'react-native'
import React from 'react'

import ChatCard from './ChatCard'
import NewUserPage from './NewUserPage'

const UserWithSubscriptions = () => {
  return (
      <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
        <ChatCard/>
        <ChatCard/>
        <ChatCard/>
        <ChatCard/>
        <ChatCard/>
        <ChatCard/>
        <ChatCard/>
        <ChatCard/>
        <ChatCard/>
        <ChatCard/>
        <ChatCard/>
        <ChatCard/>
        <ChatCard/>
        <ChatCard/>
        <View className="my-28">
        {/* <Text className="text-blue-600 shadow-3xl w-32 font  bg-gray-100  text-center tracking-tighter px-2 py-3 rounded-2xl">Trending Groups</Text> */}
        </View>
  
      </ScrollView>

  )
}

export default UserWithSubscriptions