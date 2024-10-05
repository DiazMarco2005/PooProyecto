import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../screens/auth/LoginScreen.js';
import RegisterScreen from '../screens/auth/RegisterScreen.js';
import ProfileScreen from '../../ProfileScreen.js';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="BottomTabs">
      <Drawer.Screen name="BottomTabs" component={BottomTabNavigator} />
      {/* hamburger menu tabs */}
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;