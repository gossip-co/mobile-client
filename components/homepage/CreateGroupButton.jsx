import { View, Text, Alert, Pressable } from 'react-native'
import React from 'react'
import Feather from "react-native-vector-icons/Feather";
import { useNavigation } from '@react-navigation/native';

const CreateGroupButton = () => {
  const createGroupIconName = "plus"
  const navigation = useNavigation()

  return (
    <Pressable
    className="border-2 rounded-lg"
    onPress={() => navigation.navigate('Home', { screen: 'CreateGroup' })}
    >
      <Feather
      name={createGroupIconName} size={20} color="black"/>
      
    </Pressable>
  )
}

export default CreateGroupButton