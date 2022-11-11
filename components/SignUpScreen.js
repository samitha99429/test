import React, {useState} from 'react'
import {View, Text,Image, StyleSheet, useWindowDimensions ,Dimensions,TextInput,Button ,ScrollView} from 'react-native'
import Logo from '../assets/LuanchIcon.png';
import CustomerInputs from './customerInputs';
import CustomButton from './CustomButton';
import Svg, { Path } from 'react-native-svg';




const  SignUpScreen=()=> {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const WIDTH = Dimensions.get('screen').width;
   
    //const { height } = Dimensions.get("window");
    const {height}=useWindowDimensions();
    const onLoginPressed =()=>{
      console.warn("sign in");
    };
    const onForgotPasswordPressed=()=>{
      console.warn('onForgotPasswordPressed');
    };

    const onLoginFacebook=()=>{
      console.warn('onLoginFacebook');
    };

    const onLoginGoogle=()=>{
      console.warn('onLoginGoogle');
    };

    const onSignUpPressed=()=>{
      console.warn('onSignUpPressed');
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
       
        <Text style={styles.title}>Create an Account</Text>
          
        <CustomerInputs placeholder="Username" value={username} setValue={setUsername}/>
    <CustomerInputs placeholder="Password" value={password} setValue={setPassword} secureTextEntry/>
    <CustomerInputs placeholder="Confirm Password" value={password} setValue={setPassword} secureTextEntry/>
    <CustomButton text="Create Account" onPress={onLoginPressed} />
   
    <CustomButton text="Log In with Facebook" bgcolor="#E7EAF4" fgcolor="#4765A9" onPress={onLoginFacebook} />
    <CustomButton text="Log In with Google " bgcolor="#FAE9EA" fgcolor="#DD4D44" onPress={onLoginGoogle} /> 

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

    title:{
        color:'#051C60',
        fontSize:24,
        fontWeight:'bold',
        margin:10,
        alignSelf:'center'


      
        
    },

})
export default SignUpScreen;
