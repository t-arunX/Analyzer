import { StyleSheet, Text, View,Image, SafeAreaView,ScrollView,setTimeout} from 'react-native';
import React, { useEffect, useState } from 'react';
// import { ActivityIndicator, FlatList } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack'

import {Lchart} from '../chart';
import {Load} from '../chart';
// import { Zoomview } from '../chart';
import {Ani} from './animation';

const Settings = ({navigation}) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text style={{ fontSize:20,marginBottom:100 }}>Coming soon!</Text>
    <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
  </View>
);

export default function Fetch(navigation) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  var info = "Corrosion is a dangerous and extremely costly problem. Because of it, buildings and bridges can collapse, oil pipelines break, chemical plants leak, and bathrooms flood. Corroded electrical contacts can cause fires and other problems, corroded medical implants may lead to blood poisoning, and air pollution has caused corrosion damage to works of art around the world. Corrosion threatens the safe disposal of radioactive waste that must be stored in containers for tens of thousands of years. The most common kinds of corrosion result from electrochemical reactions. General corrosion occurs when most or all of the atoms on the same metal surface are oxidized, damaging the entire surface. Most metals are easily oxidized: they tend to lose electrons to oxygen in the air or in water. As oxygen is reduced , it forms an oxide with the metal. When reduction and oxidation take place on different kinds of metal in contact with one another, the process is called galvanic corrosion. In electrolytic corrosion, which occurs most commonly in electronic equipment, water or other moisture becomes trapped between two electrical contacts that have an electrical voltage applied between them. The result is an unintended electrolytic cell. Take a metal structure such as the Statue of Liberty. It looks strong and permanent. Like nearly all metal objects, however, it can become unstable as it reacts with substances in its environment and deteriorates. Sometimes this corrosion is harmless or even beneficial: the greenish patina that covers the statue's copper skin protected the metal beneath from weather damage. Inside the statue, however, corrosion caused serious harm over the years. Its iron frame and copper skin acted like the electrodes of a huge galvanic cell, so that nearly half of the frame had rusted away by 1986, the statue's one hundredth anniversary."
  var info1 = "Some metals acquire a natural passivity, or resistance to corrosion. This occurs when the metal reacts with, or corrodes in, the oxygen in air. The result is a thin oxide film that blocks the metal’s tendency to undergo further reaction. The patina that forms on copper and the weathering of certain sculpture materials are examples of this. The protection fails if the thin film is damaged or destroyed by structural stress — on a bridge, for example — or by scraping or scratching. In such cases the material may repassivate, but if that is not possible, only parts of the object corrode. Then the damage is often worse because it is concentrated at these sites. Harmful corrosion can be prevented in numerous ways. Electrical currents can produce passive films on metals that do not normally have them. Some metals are more stable in particular environments than others, and scientists have invented alloys such as stainless steel to improve performance under particular conditions. Some metals can be treated with lasers to give them a non-crystalline structure, which resists corrosion. In galvanization, iron or steel is coated with the more active zinc; this forms a galvanic cell where the zinc corrodes rather than the iron. Other metals are protected by electroplating with an inert or passivating metal. Non-metallic coatings — plastics, paints, and oils — can also prevent corrosion."

  const getData = async () => {
     try {
      const response = await fetch('https://api.thingspeak.com/channels/1705035/feeds.json?api_key=WVHTO1A0LSNPCBFD&results');
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    getData();
  }, []);

//   const Scr = ()=>{
//     return(
//     <Text style={{fontSize:25,marginBottom:5,color:"maroon"}}>
//     haiiiiiiiiiii
//   </Text>
//   );
// }
// const stack = createStackNavigator();
// <stack.Navigator>
//           <stack.Screen name = "scr" component={Load} />
//         </stack.Navigator>


  return (
    <SafeAreaView>
    <ScrollView>
    <View>
      { Object.keys(data).length  < 2 ? <Load /> : ( 
      // <Lchart dat={data}/>
      // <Load/>
      <Ani dat={data}/>
      )} 
          <View style={{margin:10}}>
            <Text style={{fontSize:25,marginBottom:5,color:"maroon"}}>what is corrosion? </Text>
            <Text style={{fontSize:15,color:"grey",margin:15}}>{info} </Text>
          </View>
          <View style={{margin:10}}>
            <Text style={{fontSize:25,marginBottom:5,color:"maroon"}}>Natural protection </Text>
            <Text style={{fontSize:15,color:"grey",margin:15}}>{info1} </Text>
          </View>
     </View>
     
{/* // */}
        
    </ScrollView>
    </SafeAreaView>
  );
};

