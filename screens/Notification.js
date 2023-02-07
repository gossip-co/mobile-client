import { View, Text, ScrollView } from 'react-native'
import React from 'react'

import NotificationCard from '../components/notification/NotificationCard'

const Notification = () => {
  return (
    <View className="h-screen bg-white  items-center ">
      <ScrollView bounces={false}>
        <NotificationCard/>
        <NotificationCard/>
        <NotificationCard/>
        <NotificationCard/>
        <NotificationCard/>
        <NotificationCard/>
        <NotificationCard/>
        <NotificationCard/>
        <NotificationCard/>
        <NotificationCard/>
        <NotificationCard/>
        <NotificationCard/>
        <NotificationCard/>
        <NotificationCard/>
        <NotificationCard/>
        <NotificationCard/>
        <NotificationCard/>
        <NotificationCard/>
        <NotificationCard/>
        <NotificationCard/>
        <NotificationCard/>
        <NotificationCard/>
        <NotificationCard/>
        <View className="my-28">
          {/* -->> Don't remove it <<--This container is neccerray in order to provide some space from the bottom to the last container and user can see the last container  */}
        </View>
      </ScrollView>
    </View>
  )
}

export default Notification