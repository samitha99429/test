// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/
import * as React from 'react';
import {useState} from "react";
import Svg, { Path } from 'react-native-svg';
import Logo from '../assets/LuanchIcon.png';
import  SelectListProps  from 'react-native-dropdown-select-list';
import { View, Text, SafeAreaView, StyleSheet,TextInput , Image, Button , TouchableOpacity , Alert, useWindowDimensions ,Dimensions, ScrollView, Platform,Ico ,onButtonPress } from 'react-native';
import SvgCurve from '../components/SvgCurve';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import axios from "react-native-axios";


 
const ChildRegisterScreen = () => {

  const[childname,useChildname]=useState("");
  const[parentname,useParentname]=useState("");
  const[address,useAddress]=useState("");
  const[dateofbirth,useDateofbirth]=useState("");
  const[bloodGroup,useBloodGroup]=useState("");

  const navigation = useNavigation();
  const nextPage2Pressed=()=>{

    const newUser = {
      " childID": "01",
      "childName": childname,
      "parentName": parentname,
      "address": address,
      "dateOfBirth":dateofbirth,
      "bloodGroup": bloodGroup

   

    };
    axios.post('http://172.28.16.150:3000/api/child/', newUser).then((res) => {
      console.log("Hello");
    
      navigation.navigate('Login');
      
    });
   

  };

  const [selected , setSelected] = React.useState("");
  const WIDTH = Dimensions.get('screen').width;

  const data2 = [
    {Key:'1',value:'A Negative'},
    {Key:'2',value:'A Positive'},
    {Key:'3',value:'B Positive'},
    {Key:'4',value:'B Negative'},
    {Key:'5',value:'AB Positive'},
    {Key:'6',value:'AB Negative'},
    {Key:'7',value:'O Positive'},
    {Key:'8',value:'O Negative'},
  ];

 


    //const { height } = Dimensions.get("window");
    const {height}=useWindowDimensions();
  

  return (
  <ScrollView>
    <View style={styles.container}>
    
       <SvgCurve/>
       <TouchableOpacity style={styles.backnav}
            
              onPress={nextPage2Pressed }>
           <AntDesign name="leftcircle" size={27} color="conic-gradient(from -61.23deg at 100% 100%, rgba(17, 134, 110, 0.76) -37.5deg, rgba(36, 83, 71, 0.901714) 99.19deg, #09AB79 125.63deg, rgba(17, 134, 110, 0.76) 322.5deg, rgba(36, 83, 71, 0.901714) 459.19deg)" />
              <Text style={styles.buttonc}></Text>
          </TouchableOpacity>
        </View>
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
          </Text>
         
        <View style={styles.formcard}>
          <Text style={styles.formheader}>Register Child</Text>
          <TextInput style={styles.inputtext} placeholder="   Child Full Name" />
          <TextInput style={styles.inputtext3} placeholder="   Parent Name" />
          <TextInput style={styles.inputtext2} placeholder="   Address" />
          <View style={styles.selectlist2}>
          <SelectListProps style={styles.selectlist2}  placeholder="Blood Type" data={data2} setSelected={setSelected}/>
          </View>
          <TextInput style={styles.inputtext4} placeholder="   Date of Birth" keyboardType='numbers-and-punctuation'>      
          </TextInput>
          <TouchableOpacity
              style={styles.button2}
              onPress={nextPage2Pressed}>
              <Text style={styles.buttoncolor}>Save</Text>
          </TouchableOpacity>


        </View>
      </View>
    </View>
  </SafeAreaView>
  </ScrollView>
  );
        
}


const styles = StyleSheet.create({

formcard: {
position: 'absolute',
width:358,
padding:5,
height:450,
left:16,
backgroundColor:'#FFFFFF',
boxshadow: "0px 8px 8px rgba(0, 0, 0, 0.25)",
borderRadius:15,
marginTop:200,
  },

  formheader:{
    marginTop:10,
    fontSize:20,
    alignSelf:'center',
    fontWeight: 'bold',
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

 card_image:{
  width: 340,
  height: 90,
  borderRadius : 10,
  marginTop:270
 },
 selectlist2:{
  position:'absolute',
  width:276,
  height:35,
  left:37,
  top:325,
  alignContent:'center',
  borderColor: '#163080'
 },
 inputtext2:{
  position: 'absolute',
  width: 276,
  height: 60,
  left: 37,
  top: 200,
  alignContent:'center',
  marginTop:1,
  
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
      top: 150,
      alignContent:'center',
      marginTop:1,
      borderColor: '#163080',
      borderWidth: 1,
      color:'black',
      borderRadius:12
        },

        inputtext4:{
          position: 'absolute',
          width: 276,
          height: 36,
          left: 37,
          top: 275,
          alignContent:'center',
          marginTop:1,
          borderColor: '#163080',
          borderWidth: 1,
          color:'black',
          borderRadius:12
            },

        button2: {
          alignItems: 'center',
          backgroundColor: 'conic-gradient(from -61.23deg at 100% 100%, rgba(17, 134, 110, 0.76) -37.5deg, rgba(36, 83, 71, 0.901714) 99.19deg, #09AB79 125.63deg, rgba(17, 134, 110, 0.76) 322.5deg, rgba(36, 83, 71, 0.901714) 459.19deg)',
          padding: 10,
          textcolor: 'white',
          width: 130,
          height:40,
          marginTop: 350,
          marginBottom:-50,
          borderRadius:10,
          marginLeft:'30%',
          boxshadow: "0px 8px 8px rgba(0, 0, 0, 0.25)"
        },

        buttoncolor:{
          color:'white',
          fontWeight: '600',
        },

        card_image3 : {
          width: 260,
          height: 100,
          justifyContent:'center',
          borderRadius : 10,
          marginTop:2,
          marginLeft:'100%',
        },

        image:{
          boxshadow: "0px 8px 8px rgba(0, 0, 0, 0.25)",
          width:150,
          height:150,
          top:30,
          left:25,
        },
        icon: {
          padding: 12,
        },
        iconContainer: {
          backgroundColor: "red",
        },

        backnav:{

          marginTop:2,
          paddingLeft:5,
          


        },

    
});
export default ChildRegisterScreen;