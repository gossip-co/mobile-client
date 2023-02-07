import { View, Text, Alert } from 'react-native'
import React from 'react'
import AntDesign from "react-native-vector-icons/AntDesign";
import { useNavigation } from '@react-navigation/native';

const CreateGroupButton = () => {
  const addGroupIconName = "pluscircleo"
  const infoIcon = "infocirlceo"
  const navigation = useNavigation()

  return (
    <View
    className="items-center px-8"
    >
      <AntDesign
      onPress={() => navigation.navigate('Home', { screen: 'CreateGroup' })}
      name={addGroupIconName} size={25} color="black"/>
      
    </View>
  )
}

export default CreateGroupButton