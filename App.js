import 'react-native-gesture-handler';
import { useState } from 'react';
import { StatusBar } from "expo-status-bar";
import { useFonts } from 'expo-font';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { getFocusedRouteNameFromRoute} from "@react-navigation/native";

import Ionicons from "react-native-vector-icons/Ionicons";

import Home from "./screens/Home";
import Search from "./screens/Search";
import Notification from "./screens/Notification";
import Profile from "./screens/Profile";

import LogoTitle from "./components/homepage/LogoTitle";
import HomeNavigation from "./components/homepage/HomeNavigation";
import CreateGroup from "./components/homepage/CreateGroup";
import SearchInput from "./components/search/SearchInput";
import ShareFeedback from "./components/homepage/ShareFeedback";
import UpComingReleases from "./components/homepage/UpComingReleases";

import EditProfile from "./components/profile/EditProfile";
import ProfileNavigation from "./components/profile/ProfileNavigation";
import GroupSettings from "./components/group/GroupSettings";
import LaunchGroup from "./components/group/LaunchGroup";

import Settings from "./screens/Settings";
import PaymentMethods from "./components/settings/PaymentMethods";
import GetPayouts from "./components/settings/GetPayouts";

import GroupDetail from "./components/group/GroupDetail";
import AboutGroupDetailedSection from "./components/group/AboutGroupDetailedSection"; //Change the component name this is horrable can't understand this shit

import ChatScreen from "./components/group-chat/ChatScreen";
import UserProfile from "./components/profile/UserProfile";

import OnBoardingScreen from './screens/OnBoardingScreen';
import LoginScreen from './screens/LoginScreen';
import RegistrationScreen from './screens/RegistrationScreen';


const HomeStack = createStackNavigator()
function HomeStackScreen(){
  return (
    <HomeStack.Navigator screenOptions={{animationEnabled: false}}>
      <HomeStack.Group>
      <HomeStack.Screen name="HomeScreen" component={Home} options={{headerShown: false, title:"Home"}} />
      <HomeStack.Screen name="ChatScreen" component={ChatScreen} options={{title:"Gossip Official"}}/>
      </HomeStack.Group>

      <HomeStack.Group screenOptions={{ presentation: 'modal', animationEnabled: true }}>
      <HomeStack.Screen
      name="CreateGroup" 
      options={{
        title: "Create Group",
        cardStyle: {
          backgroundColor: 'white'
        }
      }} 
      component={CreateGroup} />
      <HomeStack.Screen name="UserProfile" component={UserProfile}
      options={{
        title: null,
        cardStyle : {
          backgroundColor: 'white'
        }
      }}
      />
      <HomeStack.Screen name="ShareFeedback" component={ShareFeedback}
      options={{
        title: "Share Feedback",
        cardStyle : {
          backgroundColor: 'white'
        }
      }}
      />
      <HomeStack.Screen name="UpComingReleases" component={UpComingReleases}
      options={{
        title: "Upcoming Releases",
        cardStyle : {
          backgroundColor: 'white'
        }
      }}
      />
      </HomeStack.Group>
      
    </HomeStack.Navigator>
  )
}

const ProfileStack = createStackNavigator()
function ProfileStackScreen(){
  return (
    <ProfileStack.Navigator screenOptions={{animationEnabled: false}}>
      <ProfileStack.Screen name="ProfileScreen" options={{headerShown: false,title: "Profile"}} component={Profile}/>
      <ProfileStack.Screen name="EditProfile" options={{title: "Edit Profile",}} component={EditProfile}/>
      <ProfileStack.Screen name="Settings" component={Settings}/>
      <ProfileStack.Screen name="PaymentMethods" component={PaymentMethods} options={{title: "Payment Method"}}/>
      <ProfileStack.Screen name="GetPayouts" component={GetPayouts} options={{title: "Payouts"}}/>
      {/* user group name will show in the header */}
      <ProfileStack.Screen 
      name="GroupSettings" component={GroupSettings} 
      options={{
        title: "Gossip Official",
        headerRight: ()=> <LaunchGroup/>
      }}/> 

    </ProfileStack.Navigator>
  )
}

const SearchStack = createStackNavigator()
function SearchStackScreen(){
  return (
    <SearchStack.Navigator screenOptions={{animationEnabled: false}}>
      <SearchStack.Group>
      <SearchStack.Screen 
      name="SearchScreen" 
      options={{
        title: "Search",
            headerTitle: (props)=>null,
            headerLeft: () => <SearchInput/>,
          }}
      component={Search}
      />
      <SearchStack.Screen
      name="GroupDetail" //Group Name
      component={GroupDetail}
      options={{
        title: "Gossip Official"
      }}
      />
      </SearchStack.Group>

      
      <SearchStack.Group screenOptions={{ presentation: 'modal' }}>
        <SearchStack.Screen name="AboutGroup" options={{title: "About Gossip Official"}} component={AboutGroupDetailedSection}/>
      </SearchStack.Group>

    </SearchStack.Navigator>
  )
}

const Tab = createBottomTabNavigator();
const AuthStack = createStackNavigator()
export default function App() {
  const [isSignedIn, setIsSignedIn] = useState(true)
  const [fontsLoaded] = useFonts({
    'Hind-Light': require('./assets/fonts/Hind-Light.ttf'),
    'Hind-Bold': require('./assets/fonts/Hind-Bold.ttf'),
    'Hind-Medium': require('./assets/fonts/Hind-Medium.ttf'),
    'Hind-Regular': require('./assets/fonts/Hind-Regular.ttf'),
    'Hind-SemiBold': require('./assets/fonts/Hind-SemiBold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer >
      {isSignedIn ? (
        <Tab.Navigator
        screenOptions={({ route }) => ({
          cardStyle: { backgroundColor: "white" },
          tabBarHideOnKeyboard: true,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Search") {
              iconName = focused ? "search" : "ios-search-outline";
            } else if (route.name === "Profile") {
              iconName = focused ? "person-circle-sharp" : "person-circle";
            } else if (route.name === "Notifications") {
              iconName = focused ? "notifications" : "notifications-outline";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={30} color={color} />;
          },
          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "#3F3F46",
          tabBarShowLabel:false
        })}
      >
        
        <Tab.Group
          screenOptions={{ headerStyle: { backgroundColor: "#FFFFFF" } }}
        >
          <Tab.Screen
            name="Home"
            backgroundColor="#fff"
            component={HomeStackScreen}
            options={({ route }) => ({
              headerShown: ((route) => {
                const routeName = getFocusedRouteNameFromRoute(route) ?? ""
                if (
                routeName==='CreateGroup' || 
                routeName==="ChatScreen" || 
                routeName==="UserProfile" || 
                routeName==="ShareFeedback" ||
                routeName==="UpComingReleases"
                ) {
                  return false
                }
                return true
              })(route),
              headerTitle: (props) => null,
              headerRight: () => (
                    <HomeNavigation/>
                  ),
              headerLeft: (props) => <LogoTitle/>,
              tabBarStyle: ((route)=> {
                const routeName = getFocusedRouteNameFromRoute(route) ?? ""
                if (
                routeName==="CreateGroup" || 
                routeName==="ChatScreen" || 
                routeName==="UserProfile" || 
                routeName==="ShareFeedback" ||
                routeName==="UpComingReleases"
                ){
                  return {display: 'none'}
                }
                return {display: 'flex'}
              })(route)
            })}
          />
          <Tab.Screen 
           name="Search"
           options={({route})=> ({
            headerShown: false,
            tabBarStyle: ((route)=> {
              const routeName = getFocusedRouteNameFromRoute(route) ?? ""
              if (routeName === "GroupDetail"){
                return {display: 'none'}
              }
              return {display: 'flex'}
            })(route)
           })}
           component={SearchStackScreen}
          />
          <Tab.Screen
            name="Notifications"
            component={Notification}
            options ={{
              tabBarBadge: 4 
            }}
          />
          <Tab.Screen
          name="Profile"
          component={ProfileStackScreen}
          options={({ route }) => ({
            headerShown: ((route) => {
              const routeName = getFocusedRouteNameFromRoute(route) ?? ""
              if (routeName === 'EditProfile' || routeName === 'Settings' || routeName === 'GroupSettings' || routeName === "GetPayouts"|| routeName === "PaymentMethods") {
                return false
              }
              return true
            })(route),
            headerRight: () => (
                  <ProfileNavigation/>
                ),
            tabBarStyle: ((route)=> {
              const routeName = getFocusedRouteNameFromRoute(route) ?? ""
              if (routeName === "EditProfile" || routeName === "Settings" || routeName === "GroupSettings" || routeName === "GetPayouts" || routeName === "PaymentMethods"){
                return {display: 'none'}
              }
              return {display: 'flex'}
            })(route)
          })}
           />
          
        </Tab.Group>

        {/* <Tab.Group >
          <Tab.Screen name="Trending" component={TrendingGroups}/>
        </Tab.Group> */}
      </Tab.Navigator>
      ) : 
      (
        <AuthStack.Navigator>
          <AuthStack.Screen name="OnBoardingScreen" component={OnBoardingScreen} options={{title: null, headerShown: false}}/>
          <AuthStack.Screen name="LoginScreen" component={LoginScreen} options={{title: "Log In"}}/>
          <AuthStack.Screen name="RegistrationScreen" component={RegistrationScreen} options={{title: "Registration"}}/>
        </AuthStack.Navigator>
      )}
      
      <StatusBar backgroundColor="#ffff" />
    </NavigationContainer>
  );
}
