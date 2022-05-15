import * as React from 'react';
import { Text, View,Button,SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Ionicons from 'react-native-vector-icons/Ionicons';
import {createStackNavigator} from '@react-navigation/stack'

import Tabnavigator from "./tabnavigator";
import Drawernavigator from './drawernavigator';

const stack = createStackNavigator();

const Screen = ()=>{
  <Text>
    hai
  </Text>
}

export default function Maincomponent() {
  return (
    <NavigationContainer> 
      
        <Tabnavigator />
        {/* <stack.Navigator>
          <stack.Screen name = "Tabnavigator" component={Tabnavigator} options={{header:()=>null}}/>
          <stack.Screen name = "Toabnavigator" component={Screen} options={{header:()=>null}}/>
        </stack.Navigator> */}
        {/* <Drawernavigator/> */}
        
    </NavigationContainer>
  );
}