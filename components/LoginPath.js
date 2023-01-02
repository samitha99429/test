import { View, Text,TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'
import SvgCurve from './SvgCurve'
import CustomButton from './CustomButton'
import { Navigate } from 'react-router-native'
import loginScreen from './LoginScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';






const LoginPath = ( ) => {
  const navigation = useNavigation();

    const PathbuttonPressed =()=>{
       
      navigation.navigate('Login');
     
       

    };
    const  Pathbutton2Pressed =()=>{
      navigation.navigate('ParentLogin');

    };
    
  return (
    <View>
      
      <SvgCurve/>
      <View>
      <TouchableOpacity
            style={styles.button2}
            onPress={PathbuttonPressed
    }>
            <Text style={styles.text}>Login as a Employee</Text>
          </TouchableOpacity>
</View>
<View>
          <TouchableOpacity
            style={styles.button3}
            onPress={
              Pathbutton2Pressed
            }>
            <Text style={styles.text}>Login as a Parent</Text>
          </TouchableOpacity>
          </View>
    </View>
  )
}

const styles=StyleSheet.create({

    button2:{

        width:'85%',
        padding:15,
        alignItems:'center',
        borderRadius:10,
        height: 48,
        borderColor:'#e8e8e8',
     borderWidth:1,
      marginTop:240,
      margin: 30, 
     justifyContent: 'center', 
     paddingLeft: 10 ,
     marginVertical:25,
     backgroundColor:"conic-gradient(from -61.23deg at 100% 100%, rgba(17, 134, 110, 0.76) -37.5deg, rgba(36, 83, 71, 0.901714) 99.19deg, #09AB79 125.63deg, rgba(17, 134, 110, 0.76) 322.5deg, rgba(36, 83, 71, 0.901714) 459.19deg)"

    },
    text:{
        fontWeight:'bold',
        color:'white'
    },
    button3:{

        width:'85%',
        padding:15,
        alignItems:'center',
        borderRadius:10,
        height: 48,
        borderColor:'#e8e8e8',
     borderWidth:1,
      marginTop:5,
      margin: 30, 
     justifyContent: 'center', 
     paddingLeft: 10 ,
     marginVertical:25,
     backgroundColor:"conic-gradient(from -61.23deg at 100% 100%, rgba(17, 134, 110, 0.76) -37.5deg, rgba(36, 83, 71, 0.901714) 99.19deg, #09AB79 125.63deg, rgba(17, 134, 110, 0.76) 322.5deg, rgba(36, 83, 71, 0.901714) 459.19deg)"
    },
})

export default LoginPath;