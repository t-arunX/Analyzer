import React from 'react';
import { Text, View,Image, Dimensions,ScrollView,StyleSheet, FlatList} from 'react-native';
import {LineChart} from "react-native-chart-kit";
import { SafeAreaView } from 'react-native';


export function Load(){
    return(
    <View style={{justifyContent:"center", alignItems:"center" }}>
        <Image source={require('../assets/Icons/sp.gif')} style={{ width: 200, height: 200 }}/>
        <Text style={{color:"grey",marginTop:-40}}>umm...it's embarrassing😅</Text>
    </View>
    );
  }


export function Lchart(props) {
        const field = [];
        const date = [];
        // const date_org = [""];
        for(var i in props.dat.feeds){
            if(props.dat.feeds[i].field1 > 0){
              field.push(props.dat.feeds[i].field1);
              let temp = props.dat.feeds[i].created_at;    
              var place=0;
               //date
                var x = "";
                for(let i = 0;i< temp.length;i++){
                if(temp[i] == "T") {
                    place = i+1;
                    break;
                }
                x+=temp[i];
                }
                
                // date.push(x);
            //time
            var y = "";
            for(let i = place;i< temp.length;i++){
                if(temp[i] == "Z") break;
                y+=temp[i];
            }
            date.push("         "+x+"  "+y+"   ")

            
            }
        }

        const yy = [...field];
        const len = (field.length)*150;

        const today = [""];
        const d = new Date();
        var todaydate = d.getDate();
        const year = d.getFullYear();
        const month = d.getMonth()+1;
        const today_data = [];

        for(let n in date){
            let c = parseInt(todaydate);
            var s="";
            var v ="";
            for(let i=9;i<=18;i++){
                s+=date[n][i];
            }
            for(let i=9;i<=28;i++){
                v+=date[n][i];
            }
            var compare_d = s[8]+s[9];
            var compare_m = s[5]+s[6];
            var compare_y = s[0]+s[1]+s[2]+s[3];
            
            var hour = parseInt(v[12]+v[13])+5
            if(hour>23) {hour = hour - 23;
            }
           var carry = 0;
            var minutes = parseInt(v[15]+v[16])+30;
            if(minutes>59) {
                minutes = minutes - 60;
                carry = 1;
            }
            hour+=carry;
            hour+=v[14]+minutes+v[17]+v[18]+v[19]
    if(compare_y == year && compare_m == month && compare_d == c ){
                    today_data.push([s,hour,field[n]])
            }
        }
return (
    <SafeAreaView>
        <View style={{justifyContent: 'center',alignItems: 'center', marginTop:50}}>
            
          <Text style={{fontSize:25 }}>Corrosion Graph</Text>
        </View>
        <ScrollView vertical>
        <ScrollView horizontal>
        <View style={{margin: 8}}>
           
          <LineChart
                data={{
                labels: date,
                datasets: [
                    {
                    data: yy
                    }
                ]
                }}
                width={(Dimensions.get("window").width+len)} // from react-native
                height={320}
                // yAxisLabel="$"
                yAxisSuffix="%"
                yAxisInterval={1} // optional, defaults to 1
                chartConfig={{
                backgroundColor: "#e26a00",
                backgroundGradientFrom: "tomato",
                backgroundGradientTo: "grey",
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                    borderRadius: 16,
                },
                propsForDots: {
                    r: "5",
                    strokeWidth: "2",
                    stroke: "#ffa726"
                }
                }}
                bezier
                style={{
                marginVertical: 8,
                borderRadius: 16,
                }}
            />
        </View> 
    </ScrollView>
    <Text style={{ fontSize:30,color:"green",marginBottom:10,marginLeft:10}}>Today's Data {">"}</Text>
    {Object.keys(today_data).length  != 0 ? 
    <SafeAreaView style={{marginLeft:40}}>
    <View >
        <FlatList
        data={today_data}
        keyExtractor={({ id }, index) => id}
        renderItem={({ item }) => (
            <View style={{flexDirection: 'row'}}>
                <Text style={{ fontSize:18}}>{item[0]}{"      "+item[1]+"         -  "}</Text>
                <Text style={{ fontSize:18,flexDirection: 'row',color:"darkred"}}>{item[2]} %</Text>
            </View> )}/>
            </View>
        </SafeAreaView> 
        : <><View style={{alignItems:"center",justifyContent:"center",flexDirection: 'row', marginTop:40}}>
                <Image source={require('../assets/Icons/warn.png')} style={{ width: 40, height: 40 }}/>
                <Text style={{ fontSize:25,alignItems:"center",justifyContent:"center"}}> Not Available !</Text>
                </View>
                <View style={{alignItems:"center",margin:40}}>
                    <View style={{width:300,borderWidth: 0.2,borderColor: "thistle"}}></View>
                </View>
                </>}
    </ScrollView>
</SafeAreaView>
);
}
