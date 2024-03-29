import React from 'react';
import { Text, View , Button} from 'react-native';

const Home = ({navigation}) => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Home!</Text>
    <Button
      title="Go to Settings"
      onPress={() => navigation.navigate('Settings')}
    />
  </View>
);

export default Home;
