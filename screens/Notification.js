import { View, Text, ScrollView } from 'react-native'
import React from 'react'

import NotificationCard from '../components/notification/NotificationCard'

const Notification = () => {
  return (
    <View className=" bg-white  " style={{flex:1}}>
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
      </ScrollView>
    </View>
  )
}

export default Notification