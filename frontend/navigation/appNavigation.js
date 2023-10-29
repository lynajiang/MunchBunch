import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import CreateScreen from '../screens/createScreen';
import JoinScreen from '../screens/JoinScreen';
import StartScreen from '../screens/StartScreen';
import { Dimensions, LogBox, Platform, Text, View } from 'react-native';
// import ProductScreen from '../screens/ProductScreen';
import { themeColors } from '../theme';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const ios = Platform.OS == 'ios';
LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

export default function AppNavigation() {
  return (
    // <NavigationContainer>
      <Stack.Navigator 
        screenOptions = {{
            headerShown: false,
        }}
      >
        <Stack.Screen name="Start" options={{headerShown: false}} component={StartScreen} />
        <Stack.Screen name="Create" options={{headerShown: false}} component={CreateScreen} />
        <Stack.Screen name="Join" options={{headerShown: false}} component={JoinScreen} />
        <Stack.Screen name="Home" options={{headerShown: false}} component={HomeScreen} />
        {/* <Stack.Screen name="Product" options={{headerShown: false}} component={ProductScreen} /> */}
      </Stack.Navigator>
    // </NavigationContainer>
  )
  
}

