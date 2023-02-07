import { View, Text } from 'react-native'
import React from 'react'

import { useNavigation } from '@react-navigation/native';
import Ionicons from "react-native-vector-icons/Ionicons";

const GoToSettings = () => {
    const settingsIcon = "settings-outline"
    const navigation = useNavigation()
  return (
    <View >
      <Ionicons
      onPress={() => navigation.navigate('Profile', { screen: 'Settings' })}
      name={settingsIcon} size={25} color="black"/>
    </View>
  )
}

export default GoToSettings