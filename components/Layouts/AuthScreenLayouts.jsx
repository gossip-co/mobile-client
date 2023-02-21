import { View, Text } from 'react-native'
import React from 'react'

const AuthScreenLayouts = ({children}) => {
  return (
    <View className="mt-10 px-8">
      {children}
    </View>
  )
}

export default AuthScreenLayouts