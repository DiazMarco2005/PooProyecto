import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('STUDENT'); // 'STUDENT' o 'COORDINATOR'

  const handleLogin = async () => {
    const loginUrl = role === 'STUDENT'
      ? 'http://localhost:8080/api/auth/login/coordinator/'
      : 'http://localhost:8080/api/auth/login/student/';
    
    try {
      const response = await axios.post(loginUrl, {
        email,
        password,
      });

      const token = response.data.token;
      console.log(token, role, email, password)
      // guardar token
      await AsyncStorage.setItem('token', token);

      navigation.navigate('Profile');
    } catch (error) {
      Alert.alert('Login Failed', 'Invalid credentials');
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Email:</Text>
      <TextInput
        style={{ borderWidth: 1, marginBottom: 12, padding: 8 }}
        value={email}
        onChangeText={setEmail}
        placeholder="Enter email"
      />
      
      <Text>Password:</Text>
      <TextInput
        style={{ borderWidth: 1, marginBottom: 12, padding: 8 }}
        value={password}
        onChangeText={setPassword}
        placeholder="Enter password"
        secureTextEntry
      />

      <Text>Select Role:</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Button title="Student" onPress={() => setRole('student')} />
        <Button title="Coordinator" onPress={() => setRole('coordinator')} />
      </View>

      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;
