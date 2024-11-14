import React from 'react';
import { View, TextInput, Button, Alert, Dimensions, TouchableOpacity, Text } from 'react-native';

const StudentLogin = ({ 
  handleLogin, 
  email, 
  setEmail, 
  password, 
  setPassword 
}) => (
  <View style={styles.loginContainer}>
    <TextInput
      style={styles.input}
      value={email}
      onChangeText={setEmail}
      placeholder="Email"
    />
    <TextInput
      style={styles.input}
      value={password}
      onChangeText={setPassword}
      placeholder="Contraseña"
      secureTextEntry
    />
    <TouchableOpacity style={styles.button} onPress={handleLogin}>
      <Text style={styles.buttonText}>Iniciar sesión</Text>
    </TouchableOpacity>
  </View>
);

const styles = {
  loginContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    width: '100%', 
    color:'white'
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    width: '100%',
    color:'white'
  },
  button: {
    backgroundColor: '#28eb30',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
};

export default StudentLogin;