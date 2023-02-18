import { View, Text } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


import EditGroupDetail from './EditGroupDetail';
import GroupAnalytics from './GroupAnalytics';


const ACTIVE_BORDER_COLOR = "#3b82f6" //blue-500

const Tab = createMaterialTopTabNavigator()
const GroupSettings = () => {
  return (
    <NavigationContainer independent={true} >
      <Tab.Navigator 
      screenOptions={{
          tabBarIndicatorStyle: {
            backgroundColor: ACTIVE_BORDER_COLOR
          }
      }}
      >
        <Tab.Screen name="EditGroupDetail" component={EditGroupDetail} options={{title: "Group Detail"}}/>
        <Tab.Screen name="GroupAnaylitics" component={GroupAnalytics} options={{title: "Analytics"}}/>
        
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default GroupSettings