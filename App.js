/*import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



import HomeScreen from './components/Homescreen';
import ContactScreen from './components/ContactScreen';
import AboutScreen from './components/Aboutscreen';


export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const AppNavigator = createStackNavigator ({
  Home: {
    screen: HomeScreen
  },
  About: {
    screen: AboutScreen
  },
  Contact: {
    screen: ContactScreen
  }
}, {
  initialRouteName: "Home"
});



const AppContainer = createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/






// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/
 
import 'react-native-gesture-handler';
 
//import * as React from 'react';
import React, { useCallback, useEffect, useState } from 'react';
import DatePicker from 'react-native-date-picker';
import Entypo from '@expo/vector-icons/Entypo';
//import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import Navigation from './components/NavigationScreens';
import SplashScreen from './components/SplashScreen';
import loginScreen from './components/loginScreen';
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
 
import HomeScreen from './pages/HomeScreen';
import OrderScreen from './pages/OrderScreen';
import ProfileScreen from './pages/ProfileScreen';
import SettingsScreen from './pages/SettingsScreen';
import InventoryScreen from './pages/InventoryScreen';
import InventScreen from './pages/InventScreen';
import AboutScreen from './pages/AboutScreen';


 

 






 
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