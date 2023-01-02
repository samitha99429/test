
 
import 'react-native-gesture-handler';
 
//import * as React from 'react';
import React, { useCallback, useEffect, useState } from 'react';
import DatePicker from 'react-native-date-picker';
import Entypo from '@expo/vector-icons/Entypo';
//import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import Navigation from './components/NavigationScreens';
import SplashScreen from './components/SplashScreen';
import loginScreen from './components/LoginScreen';
import customerInputs from './components/customerInputs';

import { Text, View , StyleSheet} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import
 MaterialCommunityIcons
from 'react-native-vector-icons/MaterialCommunityIcons';
 
//import {NavigationContainer} from '@react-navigation/native';
//import {createStackNavigator} from 'react-navigation-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
 
import AdminHomeScreen from './pages/AdminHomeScreen';
import OrderScreen from './pages/ChildRegisterScreen';
import ProfileScreen from './pages/ProfileScreen';
import SettingsScreen from './pages/SettingsScreen';
import InventoryScreen from './pages/InventoryScreen';
import InventScreen from './pages/InventScreen';
import AboutScreen from './pages/BMICalculationScreen';


 

 






 
function App() {

  
  return (
   
    <SafeAreaProvider>
    <SplashScreen></SplashScreen>
  </SafeAreaProvider>
  
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default App;