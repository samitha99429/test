import 'react-native-gesture-handler';
 
//import * as React from 'react';
import React, { useCallback, useEffect, useState } from 'react';
import DatePicker from 'react-native-date-picker';
import Entypo from '@expo/vector-icons/Entypo';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

import { Text, View } from 'react-native';
import
 MaterialCommunityIcons
from 'react-native-vector-icons/MaterialCommunityIcons';
 
//import {NavigationContainer} from '@react-navigation/native';
//import {createStackNavigator} from 'react-navigation-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
 
import AdminHomeScreen from '../pages/AdminHomeScreen';
import OrderScreen from '../pages/ChildRegisterScreen';
import ProfileScreen from '../pages/ProfileScreen';
import SettingsScreen from '../pages/SettingsScreen';
import InventoryScreen from '../pages/InventoryScreen';
import InventScreen from '../pages/InventScreen';
import AboutScreen from '../pages/BMICalculationScreen';
import loginScreen from './LoginScreen';


 
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
 
function HomeStack() {
  return (
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: '#163080' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' }
        }}>
        <Stack.Screen
          name="Home"
          component={AdminHomeScreen}
          options={{ title: 'Home Page' }}/>
        <Stack.Screen
          name="Details"
          component={OrderScreen}
          options={{ title: 'Order Page' }} />

         <Stack.Screen
          name="Inventory"
          component={InventoryScreen}
          options={{ title: 'Inventory Page' }} />

         <Stack.Screen
          name="Invent"
          component={InventScreen}
          options={{ title: 'Invent Page' }} />


          <Stack.Screen
          name="About"
          component={AboutScreen}
          options={{ title: 'About Page' }} />
 <Stack.Screen
          name="loginscreen"
          component={loginScreen}
          options={{ title: 'login Page' }} />

      </Stack.Navigator>
  );
}
 
function SettingsStack() {
  return (
    <Stack.Navigator
      initialRouteName="Settings"
      screenOptions={{
        headerStyle: { backgroundColor: '#163080' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' }
      }}>
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ title: 'Order Page' }}/>
      <Stack.Screen
        name="Order"
        component={OrderScreen}
        options={{ title: 'Order Page' }}/>
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ title: 'Profile Page' }}/>
    </Stack.Navigator>
  );
}


function ProfileStack() {
  return (
    <Stack.Navigator
      initialRouteName="Settings"
      screenOptions={{
        headerStyle: { backgroundColor: '#163080' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' }
      }}>
    
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ title: 'Profile Page' }}/>
    </Stack.Navigator>
  );
}





 
function Navigation() {

  
  return (

   <>
   


    <NavigationContainer>



      <Tab.Navigator
        initialRouteName="Feed"
        tabBarOptions={{
          activeTintColor: '#163080',
        }}>
        <Tab.Screen
          name="."
          component={HomeStack}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="home"
                color={color}
                size={size}
              />
            ),
          }}  />
        <Tab.Screen
          name="SettingsStack"
          component={SettingsStack}
          options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="truck-delivery"
                color={color}
                size={size}
              />
            ),
          }} />
         <Tab.Screen
          name="ProfileStack"
          component={ProfileStack}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="account"
                color={color}
                size={size}
              />
            ),
            }}/>
      </Tab.Navigator>
    </NavigationContainer>
    </>
    
  );
}
export default Navigation;