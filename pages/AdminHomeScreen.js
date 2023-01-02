// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/
import React, {useState} from 'react'
import {View, Text,Image, StyleSheet,TouchableOpacity, useWindowDimensions ,Dimensions,TextInput,Button ,ScrollView} from 'react-native';
import Svg from '../components/SvgCurve';
import Order from './ChildRegisterScreen';
import { useNavigation } from '@react-navigation/native';





const AdminHomeScreen=()=> {
  const navigation = useNavigation();
    const WIDTH = Dimensions.get('screen').width;
    
    //const { height } = Dimensions.get("window");
    const {height}=useWindowDimensions();

    const nextbuttonPressed=()=>{

      navigation.navigate("Order");

    };
    
    const nextbutton2Pressed=()=>{

      navigation.navigate("BMI");

    };
    const nextbutton3Pressed=()=>{

      navigation.navigate("vaccinesetup");

    };
  return (
    <ScrollView>
    
   <Svg/>
   <Text
            style={{
              fontSize: 25,
              textAlign: 'left',
              marginLeft:10,
              marginBottom:50,
              
            }}>
          
          </Text>

      <View>
     
      <View style={styles.container}>
            <View style={styles.card_template}>
                <Image
                  style={styles.card_image}
                  source={{uri: 'https://cdn.create.vista.com/api/media/medium/422236284/stock-vector-children-flu-vaccine-injections-kids?token='}}
               />
               <View style={styles.text_container}>
               <TouchableOpacity
            style={styles.button}
            onPress={nextbuttonPressed
    }>
            <Text style={styles.card_title}>Register Child</Text>
          </TouchableOpacity>
          </View>
      
         </View>
      </View>

      <View style={styles.container}>
            <View style={styles.card_template}>
                <Image
                  style={styles.card_image}
                  source={{uri: 'https://img.freepik.com/premium-vector/doctor-holding-medical-report-flat-vector-illustration-clipboard-with-checklist_149152-657.jpg?w=740'}}
               />
               <View style={styles.text_container}>
               <TouchableOpacity
            style={styles.button}
            onPress={nextbutton3Pressed
    }>
            <Text style={styles.card_title}>Setup Vaccine</Text>
          </TouchableOpacity>
          </View>
      
         </View>
      </View>
      <View style={styles.container}>
            <View style={styles.card_template}>
                <Image
                  style={styles.card_image}
                  source={{uri: 'https://png.pngtree.com/png-vector/20200411/ourlarge/pngtree-call-for-medical-attention-via-mobile-phone-png-image_2182239.jpg'}}
               />
               <View style={styles.text_container}>
               <TouchableOpacity
            style={styles.button}
            onPress={nextbutton2Pressed
    }>
            <Text style={styles.card_title}>BMI Calculator</Text>
          </TouchableOpacity>
          </View>
      
         </View>
      </View>
</View>

  
   
   </ScrollView>
  )
}
//const BGColor = "conic-gradient(from -61.23deg at 100% 100%, rgba(17, 134, 110, 0.76) -37.5deg, rgba(36, 83, 71, 0.901714) 99.19deg, #09AB79 125.63deg, rgba(17, 134, 110, 0.76) 322.5deg, rgba(36, 83, 71, 0.901714) 459.19deg)"
const styles = StyleSheet.create({

    logo:{
        width:'60%',
       maxHeight:200,
        maxWidth:300
    },

    root:{
        alignItems:'center',
        padding:20,
    },

    card_title:{
  color:'white',
  fontWeight: 'bold'

    },
    button: {
      alignItems: 'center',
      backgroundColor:"conic-gradient(from -61.23deg at 100% 100%, rgba(17, 134, 110, 0.76) -37.5deg, rgba(36, 83, 71, 0.901714) 99.19deg, #09AB79 125.63deg, rgba(17, 134, 110, 0.76) 322.5deg, rgba(36, 83, 71, 0.901714) 459.19deg)",
      padding: 10,
      width: 260,
      height:40,
      marginTop: 10,
      borderRadius:10,
    },
 
  
    container:{
      flex:1,
      marginTop:-40,
      marginLeft:100,
      width:60,
      justifyContent:"center",
      alignItems: "center",
    },
     
    card_template:{
      width: 100,
      height: 200,
      boxShadow: "10px 10px 17px -12px rgba(0,0,0,0.75)",
      justifyContent:"center",
      
      
    },
  
    card_image: {
      width: 260,
      height: 80,
      borderRadius : 10
    },
 


})
export default AdminHomeScreen;