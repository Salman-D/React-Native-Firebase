import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//Imports Screens
import Signup from '../Screens/Signup'
import Login from '../Screens/Login'
import HomeScreen from '../Screens/HomeScreen';
import SplashScreen from '../Screens/SplashScreen';
import MobileVerifyScreen from '../Screens/MobileVerifyScreen';
import ImageUpload from '../Screens/ImageUpload';
import Expense_tracker from '../../Expense_tracker/Expense'
import BottomNavigations from './BottomNavigations/Bottom'
import BottomNavigations2 from './BottomNavigations/Bottom2'
import Todo from './../../Todo/Todo'
import RegisterCourse from '../Screens/RegisterCourse';
const Stack = createNativeStackNavigator();

function MainNavigator() {

 

  return (
    <NavigationContainer>

      <Stack.Navigator>

      {/* <Stack.Screen
          options={{ headerShown: false }}
          name="Expense_tracker"
          component={Expense_tracker} /> */}

      {/* <Stack.Screen
          options={{ headerShown: false }}
          name="Mobile Verification"
          component={MobileVerifyScreen} />
 */}

    

        <Stack.Screen
          options={{ headerShown: false }}
          name="Splash Screen"
          component={SplashScreen} />


        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={Login} />



        <Stack.Screen
          options={{ headerShown: false }}
          name="Signup"
          component={Signup} />

        <Stack.Screen
          options={{ headerShown: false }}
          name="Bottom"
          component={BottomNavigations} />

        <Stack.Screen
          options={{ headerShown: false }}
          name="Bottom2"
          component={BottomNavigations2} />


        <Stack.Screen
          name="Register Couse"
          component={RegisterCourse} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigator;
