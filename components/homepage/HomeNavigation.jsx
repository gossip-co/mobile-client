import { View, Text, Share } from 'react-native'
import React from 'react'

import CreateGroupButton from './CreateGroupButton'
import ShareFeedbackBtn from './ShareFeedbackBtn'
import UpComingReleasesBtn from './UpComingReleasesBtn'

const HomeNavigation = () => {
  return (
    <View className="w-fit flex-row items-center mx-5 gap-x-7   ">
      <View>
        <ShareFeedbackBtn/>
      </View>
      <View>
        <CreateGroupButton/>
      </View>
      <View>
        <UpComingReleasesBtn/>
      </View>
    </View>
  )
}

export default HomeNavigation