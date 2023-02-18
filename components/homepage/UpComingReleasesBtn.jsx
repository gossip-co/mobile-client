import { View, Text, Pressable } from "react-native";
import React from "react";

import { useNavigation } from "@react-navigation/native";

import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const UpComingReleasesBtn = () => {
  const navigation = useNavigation()
  const ICON = "route";
  return (
    <Pressable onPress={()=>navigation.navigate('UpComingReleases', {screen: 'Home'})}>
      <FontAwesome5 
      name={ICON}
      size={25}
      color="#3F3F46"
      />
    </Pressable>
  );
};

export default UpComingReleasesBtn;
