import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginScreen from '../screens/auth/LoginScreen.js';
import RegisterScreen from '../screens/auth/RegisterScreen.js';
import HomeCoordinatorScreen from '../screens/coordinator/HomeScreen.js';
import HomeStudentScreen from '../screens/student/HomeScreen.js';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../configs/api.js';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const BottomTabNavigatorStudent = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeStudentScreen} options={{headerShown : false}} />
    </Tab.Navigator>
  );
};

const BottomTabNavigatorCoordinator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeCoordinatorScreen} options={{headerShown : false}} />
    </Tab.Navigator>
  );
};

const DrawerNavigator = ({ navigation }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const token = await AsyncStorage.getItem('token');
      setIsAuthenticated(!!token);
      setLoading(false);
    };

    checkAuth();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (!isAuthenticated) {
    navigation.navigate('Login');
    return null;
  }

  return (
    <Drawer.Navigator initialRouteName="BottomTabs">
      <Drawer.Screen name="BottomTabs" component={async ()=>{
        try {
          const token = await AsyncStorage.getItem('token');
          const response = await api.get(
            "/api/students/verifyrole/"
          );

          const component = (
            response.data === 'STUDENT' ?
            BottomTabNavigatorStudent :
            BottomTabNavigatorCoordinator
          );
          
          return component;
        } catch (errr) {
          Alert.alert('Login Failed', 'Invalid credentials');
        }
      }
    } options={{ headerShown: false }}/>
    </Drawer.Navigator>
  );
};

const AppNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator initialRouteName="DrawerNavigator">
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
      <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default AppNavigator;