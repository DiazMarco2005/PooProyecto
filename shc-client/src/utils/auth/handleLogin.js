import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

const handleLogin = async (index, email, password, navigation) => {
  const loginUrl = index === 0
    ? 'http://localhost:8080/api/auth/login/student/'
    : 'http://localhost:8080/api/auth/login/coordinator/';

  console.log(loginUrl);
  console.log(`Index ${index}, Mail ${email}, Password ${password}`)
  try {
    const response = await axios.post(loginUrl, { email, password });
    const token = response.data;
    console.log(response.data)
    await AsyncStorage.setItem('token', token);

    navigation();
  } catch (error) {
    Alert.alert('Login Failed', 'Invalid credentials');
  }
};

export default handleLogin;