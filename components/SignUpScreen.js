import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, useWindowDimensions, Dimensions, TextInput, Button, ScrollView, TouchableOpacity } from 'react-native'
import Logo from '../assets/LuanchIcon.png';
import CustomerInputs from './customerInputs';
import CustomButton from './CustomButton';
import Svg, { Path } from 'react-native-svg';
import SocialSignInButtons from './SocialSignInButtons/SocialSignInButtons';
import Navigation from './NavigationScreens';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import axios from "react-native-axios";

const SignUpScreen = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const WIDTH = Dimensions.get('screen').width;
  const navigation = useNavigation();

  const { height } = Dimensions.get("window");
  //const {height}=useWindowDimensions();
  const onRegisterPressed = () => {

    const newUser = {
      "userID": "01",
      "userName": username,
      "userPassword": username,
      "userEmail": email

    };
    axios.post('http://localhost:3000/api/branch/', newUser).then((res) => {
      console.log("Hello");
    
      navigation.navigate('Login');
      
    });
  };
  const onForgotPasswordPressed = () => {
    console.warn('onForgotPasswordPressed');
  };



  const onSignUpPressed = () => {
   
  };

  const onBackPressed = () => {
    navigation.navigate('Login');
  };

  const nextPagePressed = () => {
    navigation.navigate("Login");

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
            <Image source={Logo} style={[styles.logo, { height: height * 0.3 }]} resizeMode="contain" />



          </View>

        </Svg>

        <TouchableOpacity style={styles.backnav}

          onPress={nextPagePressed}>
          <AntDesign name="leftcircle" size={27} color="conic-gradient(from -61.23deg at 100% 100%, rgba(17, 134, 110, 0.76) -37.5deg, rgba(36, 83, 71, 0.901714) 99.19deg, #09AB79 125.63deg, rgba(17, 134, 110, 0.76) 322.5deg, rgba(36, 83, 71, 0.901714) 459.19deg)" />
          <Text style={styles.buttonc}></Text>
        </TouchableOpacity>

        <Text style={styles.title}>Create an Account</Text>

        <CustomerInputs placeholder="Username" value={username} setValue={setUsername} />
        <CustomerInputs placeholder="Email" value={email} setValue={setEmail} />
        <CustomerInputs placeholder="Password" value={password} setValue={setPassword} secureTextEntry />
        <CustomerInputs placeholder="Confirm Password" value={passwordRepeat} setValue={setPasswordRepeat} secureTextEntry />
        <CustomButton text="Register" onPress={() => {
          onRegisterPressed()
        }} />
        <Text style={styles.text}>By registering, you confirm that you accept our <Text style={styles.Link}>Terms of Use </Text> and Privacy Polcy </Text>

        <SocialSignInButtons />

      </View>


    </ScrollView>
  )
}

const styles = StyleSheet.create({

  logo: {
    width: '60%',
    maxHeight: 200,
    maxWidth: 300
  },

  root: {
    alignItems: 'center',
    padding: 20,
  },

  title: {
    color: '#051C60',
    fontSize: 24,
    fontWeight: 'bold',
    margin: 10,
    alignSelf: 'center'




  },

  text: {

    color: 'grey',
    marginVertical: 10,

  },

  Link: {

    color: '#FDB075'

  },

})
export default SignUpScreen;
