import { View, Text, ScrollView, Button } from 'react-native'
import React from 'react'

import ChatCard from './ChatCard'

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
  
      </ScrollView>


  )
}

export default UserWithSubscriptions