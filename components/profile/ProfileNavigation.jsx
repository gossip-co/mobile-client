import { View, Text } from 'react-native';
import React from 'react';

import GoToEditProfile from './GoToEditProfile';
import GoToSettings from '../settings/GoToSettings';


const ProfileNavigation = () => {
  return (
    <View className="flex-row items-center px-5 gap-x-5">
        <View>
            <GoToEditProfile/>
        </View>
     <View>
        <GoToSettings/>
     </View>
    </View>
  )
}

export default ProfileNavigation