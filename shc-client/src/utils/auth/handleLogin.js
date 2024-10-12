import api from '../../configs/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

const handleLogin = async (index, email, password, navigation) => {
  const loginUrl = index === 0
    ? '/api/auth/login/student/'
    : '/api/auth/login/coordinator/';

  try {
    const response = await api.post(loginUrl, { email, password });
    const token = response.data;
    await AsyncStorage.setItem('email', email);
    await AsyncStorage.setItem('token', token);
    navigation();
  } catch (error) {
    Alert.alert('Login Failed', 'Invalid credentials');
  }
};

export default handleLogin;