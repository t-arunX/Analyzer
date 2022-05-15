import * as React from 'react';
import { Text, View,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createStackNavigator} from '@react-navigation/native-stack'


//pages
import Settings from './screens/settings';
// import Lchart from '../components/chart';
import Fetch from '../components/dist/fetch';
// import Home from './screens/home';

// const stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function Tabnavigator(navigation) {

  return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Home') {
                iconName = focused
                    ? 'ios-information-circle'
                    : 'ios-information-circle-outline';
                } else if (route.name === 'Settings') {
                iconName = focused ? 'ios-list' : 'ios-list';
                }

                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
            })}

            tabBarOptions={{
                        labelStyle:{paddingBottom:5,fontSize:10},
                    }}
        >
            {/* <Tab.Screen name="Home" component={Lchart} /> */}
            <Tab.Screen name="Home" component={Fetch}  options={{header:()=>null}}/>
            <Tab.Screen name="Settings" component={Settings} options={{header:()=>null}} />
        </Tab.Navigator>
  );
}