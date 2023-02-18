import { View, ScrollView, Text, TextInput } from "react-native";
import React, {useState} from "react";


import NewUserPage from "../components/homepage/NewUserPage";
import UserWithSubscriptions from "../components/homepage/UserWithSubscriptions";


const Home = () => {
  const [totalSubscription, setTotalSubscription] = useState(1)
  
  return (
    <View className="items-center bg-white" style={{flex:1}}>
      
      {totalSubscription===0?(<NewUserPage/>):(<UserWithSubscriptions/>)}
    </View>
  )
  
};

export default Home;
