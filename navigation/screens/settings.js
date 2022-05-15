import React from 'react';
import { Text, View , Button} from 'react-native';


const Settings = ({navigation}) => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize:20,marginBottom:100 }}>Coming soon!</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
);

export default Settings;
