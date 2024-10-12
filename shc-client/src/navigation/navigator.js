import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginScreen from '../screens/auth/LoginScreen.js';
import RegisterScreen from '../screens/auth/RegisterScreen.js';
import HomeCoordinatorScreen from '../screens/coordinator/HomeScreen.js';
import HomeStudentScreen from '../screens/student/HomeScreen.js';
import { createStackNavigator } from '@react-navigation/stack';
import api from '../configs/api.js';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const BottomTabNavigatorStudent = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeStudentScreen} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
};

const BottomTabNavigatorCoordinator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeCoordinatorScreen} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
};

const DrawerNavigator = ({ navigation }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      const token = await AsyncStorage.getItem('token');
      if (!token) {
        setIsAuthenticated(false);
        setLoading(false);
        return;
      }

      try {        
        let response;
          try {
            response = await api.get('/api/students/verify-role', {
              headers: { Authorization: `Bearer ${token}` },
            });
          } catch {
            response = await api.get('/api/coordinators/verify-role', {
              headers: { Authorization: `Bearer ${token}` },
            });
          }
        setUserRole(response.data); // 'STUDENT' or 'COORDINATOR'
        setIsAuthenticated(true);
      } catch (error) {
        Alert.alert('Error', 'Unable to verify role');
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      navigation.navigate('Login');
    }
  }, [loading, isAuthenticated, navigation]);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (!isAuthenticated) {
    return null; 
  }

  return (
    <Drawer.Navigator initialRouteName="Home">
      {userRole === 'STUDENT' ? (
        <Drawer.Screen name="Home" component={BottomTabNavigatorStudent} options={{ headerShown: false }} />
      ) : (
        <Drawer.Screen name="Home" component={BottomTabNavigatorCoordinator} options={{ headerShown: false }} />
      )}
    </Drawer.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="DrawerNavigator">
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
      <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default AppNavigator;