// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/
import * as React from 'react';
import {useState} from "react";
//import DatePicker from 'react-native-date-picker';
import AwesomeAlert from 'react-native-awesome-alerts';
import  SelectListProps  from 'react-native-dropdown-select-list';
import { View, Text, SafeAreaView, StyleSheet,TextInput , Image, Button , TouchableOpacity , Alert } from 'react-native';
 
const DetailsScreen = ({ navigation }) => {

 

  const [selected , setSelected] = React.useState("");

  const data = [
    {Key:'1',value:'kegalle'},
    {Key:'2',value:'Colombo'},
    {Key:'3',value:'Kandy'},
    {Key:'4',value:'Galle'},

  ];

  const data2 = [

    {key:'1',value:'Cement'},
    {key:'2',value:'Sand'},
    {key:'3',value:'Iron'},
    {key:'4',value:'metals'},
  ];

  const createThreeButtonAlert = () =>
  Alert.alert(
    "Confirm Order",
    "My Alert Msg",
    [
      {
        text: "Ask me later",
        onPress: () => console.log("Ask me later pressed")
      },
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      },
      { text: "OK", onPress: () => console.log("OK Pressed") },
    
   
    ])
    onButtonPress = () => {
      this.props.navigator.push({
         name: 'Home',
         title: 'Home Page',
      });
    }
  

 
 

  return (
    
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 , padding: 16}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 515
              
              
            }}>
            Make Orders
          </Text>
         
          <View style={styles.formcard}>
       <Text style={styles.formheader}>Make order</Text>
       
        <TextInput style={styles.inputtext} placeholder="   " />
        <View style={styles.selectlist} >
        <SelectListProps style={styles.selectlist2}  placeholder="select supplier" data={data} setSelected={setSelected}/>
        </View>
        <TextInput style={styles.inputtext} placeholder="   Delivery Address" />



        <View style={styles.selectlist2} >
        <SelectListProps style={styles.selectlist2}  placeholder="Item Type" data={data2} setSelected={setSelected}/>
        </View>

        <TextInput style={styles.inputtext2} placeholder="   Quantity" />
        <TextInput style={styles.inputtext3} placeholder="   Total" />
        <Image
                  style={styles.card_image}
                  source={{uri: 'https://rtrs.co/wp-content/uploads/2021/02/builders-helmets-working-construction-site-machine-building-worker-flat-vector-illustration-engineering-development_74855-8259.jpg'}}
               />

 <TouchableOpacity
            style={styles.button2}
            onPress={createThreeButtonAlert }>
            <Text>Open</Text>
          </TouchableOpacity>

    
        </View>
        

        </View>
        <Text
          style={{
            fontSize: 12,
            textAlign: 'center',
            color: 'grey',
            marginBottom:-5,
            marginTop:10
          }}>
          P C I Constructions
        </Text>
        <Text
          style={{
            fontSize: 10,
            textAlign: 'center',
            color: 'grey',
            marginBottom:-10,
            marginTop:5
          }}>
          www.PCIconstructions.com
        </Text>
      </View>
    </SafeAreaView>
  );
        
}


const styles = StyleSheet.create({

formcard: {
position: 'absolute',
width:358,
height:500,
left:16,
top:21,
backgroundColor:'#FFFFFF',
boxshadow: "0px 8px 8px rgba(0, 0, 0, 0.25)",
borderRadius:15,
  },

  formheader:{
    
    fontSize:25,
    alignSelf:'center'
  },

  inputtext:{
position: 'absolute',
width: 276,
height: 36,
left: 37,
top: 50,
alignContent:'center',
marginTop:50,

borderColor: '#163080',
borderWidth: 1,
color:'black',
borderRadius:12
  },


 selectlist:{
  position:'absolute',
  width:276,
  height:39,
  left:37,
  top:50,
  alignContent:'center',
  marginTop:-10,
  borderColor: '#163080'
 },

 card_image:{
  width: 340,
  height: 90,
  borderRadius : 10,
  marginTop:270
 },
 selectlist2:{
  position:'absolute',
  width:276,
  height:36,
  left:37,
  top:50,
  alignContent:'center',
  marginTop:100,
  borderColor: '#163080'
 },
 inputtext2:{
  position: 'absolute',
  width: 220,
  height: 36,
  left: 37,
  top: 160,
  alignContent:'center',
  marginTop:50,
  
  borderColor: '#163080',
  borderWidth: 1,
  color:'black',
  borderRadius:12
    },
    inputtext3:{
      position: 'absolute',
      width: 276,
      height: 36,
      left: 37,
      top: 210,
      alignContent:'center',
      marginTop:50,
      
      borderColor: '#163080',
      borderWidth: 1,
      color:'black',
      borderRadius:12
        },
        button2: {
          alignItems: 'center',
          backgroundColor: '#DDDDDD',
          padding: 10,
          width: 130,
          height:40,
          marginTop: 56,
          marginBottom:-50,
          borderRadius:10,
          marginLeft:'30%'
        },



});
export default DetailsScreen;