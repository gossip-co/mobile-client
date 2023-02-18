import { View, Text } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'

import Notifications from '../components/settings/Notifications'
import GoPaymentMethods from '../components/settings/GoPaymentMethods'
import ExtraOptions from '../components/settings/ExtraOptions'
import Logout from '../components/settings/Logout'
import Account from '../components/settings/Account'



// Improve the UI, not working properly , put navigation into view and produc the error,
// After some point/height the scrollview is not working 
const Settings = () => {
  const isUserHasGroup = true
  return (
    <View style={{flex:1}}>
      <ScrollView  bounces={false} showsVerticalScrollIndicator={false} >
    <View className="h-screen bg-white items-center pt-0.5 px-3" >

        <View>
        <Notifications/>
        </View>
      
      <View className="my-5">
      <GoPaymentMethods/>
      </View>

      <View>
        <ExtraOptions/>
      </View>

      <View className="my-5">
      {isUserHasGroup && <Account/>}
      </View>

      <View className="">
        <Logout/>
      </View>

      
    </View>
    </ScrollView>
    </View>


  )
}

export default Settings