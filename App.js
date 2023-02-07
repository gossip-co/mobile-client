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
import Settings from "./screens/Settings";

import LogoTitle from "./components/homepage/LogoTitle";
import CreateGroupButton from "./components/homepage/CreateGroupButton";
import CreateGroup from "./components/homepage/CreateGroup";
import SearchInput from "./components/search/SearchInput";

import EditProfile from "./components/profile/EditProfile";
import ProfileNavigation from "./components/profile/ProfileNavigation";

const HomeStack = createStackNavigator()
function HomeStackScreen(){
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="HomeScreen" component={Home} options={{headerShown: false, title:"Home"}}/>
      <HomeStack.Screen
      name="CreateGroup" 
      options={{
        title: "Create Group",
      }} 
      component={CreateGroup} />
    </HomeStack.Navigator>
  )
}

const ProfileStack = createStackNavigator()
function ProfileStackScreen(){
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="ProfileScreen" options={{headerShown: false,title: "Profile"}} component={Profile}/>
      <ProfileStack.Screen name="EditProfile" options={{title: "Edit profile",}} component={EditProfile}/>
      <ProfileStack.Screen name="Settings" component={Settings}/>
    </ProfileStack.Navigator>
  )
}

const Tab = createBottomTabNavigator();
export default function App() {
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
                if (routeName === 'CreateGroup') {
                  return false
                }
                return true
              })(route),
              headerTitle: (props) => null,
              headerRight: () => (
                    <CreateGroupButton />
                  ),
              headerLeft: (props) => <LogoTitle/>,
              tabBarStyle: ((route)=> {
                const routeName = getFocusedRouteNameFromRoute(route) ?? ""
                if (routeName === "CreateGroup"){
                  return {display: 'none'}
                }
                return {display: 'flex'}
              })(route)
            })}
          />
          <Tab.Screen 
           name="Search"
           component={Search}
           options={{
            headerTitle: (props)=>null,
            headerLeft: () => <SearchInput/>,
           }}
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
              if (routeName === 'EditProfile' || routeName=== 'Settings') {
                return false
              }
              return true
            })(route),
            headerRight: () => (
                  <ProfileNavigation/>
                ),
            tabBarStyle: ((route)=> {
              const routeName = getFocusedRouteNameFromRoute(route) ?? ""
              if (routeName === "EditProfile" || routeName === "Settings"){
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
      <StatusBar backgroundColor="#ffff" />
    </NavigationContainer>
  );
}
