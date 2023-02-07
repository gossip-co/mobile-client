import { View, Text } from 'react-native'
import React from 'react'

import Notifications from '../components/settings/Notifications'
import PaymentMethods from '../components/settings/PaymentMethods'
import ExtraOptions from '../components/settings/ExtraOptions'
import Logout from '../components/settings/Logout'
import { ScrollView } from 'react-native-gesture-handler'

const Settings = () => {
  return (
    <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
    <View className="h-screen bg-white items-center pt-0.5 px-3" >

      <Notifications/>
      
      <View className="my-5">
      <PaymentMethods/>
      </View>

      <View>
        <ExtraOptions/>
      </View>

      <View className="my-5">
        <Logout/>
      </View>
    </View>
    </ScrollView>
  )
}

export default Settings