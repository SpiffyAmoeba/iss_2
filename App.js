import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from "./screens/home";
import MeteorScreen from './screens/meteors';
import IssScreen from './screens/IssLocation';

const Stack=createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home" screensOptions={{headerShown:false}}>
      <Stack.Screen name="home" component={HomeScreen}/>
      <Stack.Screen name="meteors" component={MeteorScreen}/>
      <Stack.Screen name="IssLocation" component={IssScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
   
  );
}
export default App;
