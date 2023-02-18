import { View, Text } from 'react-native'
import React from 'react'
import { 
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
 } from '@react-navigation/drawer';

import ChatScreen from './ChatScreen';
import { useNavigation } from '@react-navigation/native';




const CustomeItem = () => {
  const navigation = useNavigation()
  return (
    <View>
      <Text className="text-3xl font-bold" onPress={()=>navigation.navigate("ChatScreen", {screen: "Home"})}>Fuk off</Text>
    
    </View>
  )
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <CustomeItem/>
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator()
const ChatScreenWithDrawer = () => {
  return (
    <Drawer.Navigator
    drawerContent={(props) => <CustomDrawerContent {...props} />}
     initialRouteName='ChatScreenWithDrawer' screenOptions={{
        drawerPosition: "right",
    }}>
        <Drawer.Screen name="ChatScreenWithDrawer" component={ChatScreen} options={{title: "general"}}/>
    </Drawer.Navigator>
  )
}

export default ChatScreenWithDrawer