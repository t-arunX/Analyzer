// import * as React from 'react';
// import { Text, View,Button } from 'react-native';
// import { createNativeStackNavigator } from '@react-navigation/bottom-tabs';

// function HomeScreen({navigation}) {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Home Screen</Text>
//         <Button
//           title="Go to Details..again"
//           onPress={() => navigation.push('Details')}
//         />
//         <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
//         <Button title="Go back" onPress={() => navigation.goBack()} />
//         <Button
//           title="Go back to first screen in stack"
//           onPress={() => navigation.popToTop()}
//         />
//       </View>
//     );
//   }
  
//   function DetailsScreen({navigation}) {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//        <Text>Details Screen</Text>
//         <Button
//           title="Go to Home..again"
//           onPress={() => navigation.push('Home')}
//           style={{
//             padding: 100,
//           }}/>
//           <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
//         <Button title="Go back" onPress={() => navigation.goBack()} />
//         <Button
//           title="Go back to first screen in stack"
//           onPress={() => navigation.popToTop()}
//         />
//       </View>
  
//     );
//   }
  
//   const Stack = createNativeStackNavigator();
  
//   function Maincomponent() {
//     return (
//       <Stack.Navigator initialRouteName="Details">
//           <Stack.Screen name="Home" component={HomeScreen} />
//           <Stack.Screen name="Details" component={DetailsScreen} />
//       </Stack.Navigator>
//     );
//   }
  
//   export default Maincomponent;