import React, {useState} from 'react'
import {View, Text,Image, StyleSheet, useWindowDimensions ,Dimensions,TextInput,Button ,ScrollView} from 'react-native'
import Logo from '../assets/LuanchIcon.png';
import CustomerInputs from './customerInputs';
import CustomButton from './CustomButton';
import Svg, { Path } from 'react-native-svg';
import SocialSignInButtons from './SocialSignInButtons/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';



const  ParentLoginScreen=()=> {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const WIDTH = Dimensions.get('screen').width;
    const navigation = useNavigation();
   
    //const { height } = Dimensions.get("window");
    const {height}=useWindowDimensions();
    const onLoginPressed =()=>{
      console.warn("sign in");

      navigation.navigate('ParentHome');
    };
    const onForgotPasswordPressed=()=>{
      console.warn('onForgotPasswordPressed');
    };

    const onSignUpPressed=()=>{
      console.warn('onSignUpPressed');

      navigation.navigate('Signup');
    };
  return (
    <ScrollView>
    <View style={styles.container}>
        <Svg height={250} width={WIDTH} top={30}>
          <Path
            d="M0,192L48,176C96,160,192,128,288,138.7C384,149,480,203,576,240C672,277,768,299,864,304C960,309,1056,299,1152,288C1248,277,1344,267,1392,261.3L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" // put your path here
            fill="#62bf8c"
            stroke="#62bf8c"
          />  
          <View style={styles.root}>
    <Image source={Logo} style={[styles.logo, {height:height*0.3}]} resizeMode="contain" />
    
   

   </View>
        </Svg>
       
          
        <CustomerInputs placeholder="Username" value={username} setValue={setUsername}/>
    <CustomerInputs placeholder="Password" value={password} setValue={setPassword} secureTextEntry/>
    <CustomButton text="Login" onPress={onLoginPressed} />
    <CustomButton text="forgot Password?" onPress={onForgotPasswordPressed} type="TERTIARY"/>
  <SocialSignInButtons/>
    <CustomButton text="Don't have an account? Create one" onPress={onSignUpPressed} type="TERTIARY"/>
      </View>
   
   
   </ScrollView>
  )
}

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

    container:{

      
        
    },

})
export default ParentLoginScreen;
