import { View, Text, Alert, Pressable } from 'react-native'
import React from 'react'
import Feather from "react-native-vector-icons/Feather";
import { useNavigation } from '@react-navigation/native';

const ShareFeedbackBtn = () => {
  const shareFeedbackIconName = "share"
  const navigation = useNavigation()

  return (
    <Pressable
    onPress={() => navigation.navigate('Home', { screen: 'ShareFeedback' })}
    >
      <Feather
      name={shareFeedbackIconName} size={25} color="black"/>
      
    </Pressable>
  )
}

export default ShareFeedbackBtn