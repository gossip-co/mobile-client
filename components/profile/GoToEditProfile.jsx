import { View, Text } from 'react-native'
import React from 'react'

import { useNavigation } from '@react-navigation/native';

import FontAwesome from "react-native-vector-icons/FontAwesome";


const GoToEditProfile = () => {
  const navigation = useNavigation()

  const editIcon = "edit"

  return (
    <View>
       <FontAwesome 
      onPress={() => navigation.navigate('Profile', { screen: 'EditProfile' })}
        name={editIcon}  size={25} color="black"/>
    </View>
  )
}

export default GoToEditProfile