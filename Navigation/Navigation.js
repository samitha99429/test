import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../components/LoginScreen';
import LoginPath from '../components/LoginPath';
import SignUpScreen from '../components/SignUpScreen';
import HomeScreen from '../pages/AdminHomeScreen';
import ChildRegisterScreen from '../pages/ChildRegisterScreen';
import BMICalculationScreen from '../pages/BMICalculationScreen';
import ParentLoginScreen from '../components/ParentLoginScreen';
import ParentHomeScreen from '../pages/ParentHomeScreen';
import AdminHomeScreen from '../pages/AdminHomeScreen';
import VaccineProcess from '../pages/VaccineProcess';
import VaccineSetup from '../pages/VaccineSetup';



const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}} >
            <Stack.Screen name="LoginPath" component={LoginPath}/>
            <Stack.Screen name="Login" component={LoginScreen}/>
            <Stack.Screen name="Signup" component={SignUpScreen}/>
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="Order" component={ChildRegisterScreen}/>
            <Stack.Screen name="BMI" component={BMICalculationScreen}/>
            <Stack.Screen name="ParentLogin" component={ParentLoginScreen}/>
            <Stack.Screen name="ParentHome" component={ParentHomeScreen}/>
            <Stack.Screen name="AdminHome" component={AdminHomeScreen}/>
            <Stack.Screen name="vaccineprocesses" component={VaccineProcess}/>
            <Stack.Screen name="vaccinesetup" component={VaccineSetup}/>

        </Stack.Navigator>
    </NavigationContainer>

 
  )
}

export default Navigation