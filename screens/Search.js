import { View, Text, Pressable } from 'react-native'
import React from 'react'

import { useNavigation } from '@react-navigation/native'


const Search = () => {
  const navigation = useNavigation()
  return (
    <Pressable className="h-full bg-white w-fit items-center justify-center">
      {/* <Card/> */}
      <Text className="text-blue-500"
      onPress={()=>navigation.navigate('GroupDetail', {'screen': 'Search'})}
      >Group Detail Page</Text>
    </Pressable>
  )
}

export default Search