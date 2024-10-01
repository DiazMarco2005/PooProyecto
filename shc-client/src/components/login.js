import React, { useState } from 'react';
import { View, Text, TextInput, Button, ImageBackground, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const UVGLogin = ({ backgroundImage, logoImage }) => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // here goes the logic to the bd
    if (email.includes('@uvg.edu.gt & password okey')) {
      navigation.navigate('Home');
    } else {
      alert('Por favor, ingrese un correo válido de UVG.');
    }
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <ImageBackground source={logoImage} style={styles.logo} />
        </View>
        <Text style={styles.title}>Iniciar Sesión:</Text>
        <TextInput 
          style={styles.input} 
          placeholder="example@uvg.edu.gt" 
          keyboardType="email-address" 
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput 
          style={styles.input} 
          placeholder="Contraseña" 
          secureTextEntry 
          value={password}
          onChangeText={setPassword}
        />
        <View style={styles.rememberMeContainer}>
          <Text>Recordarme</Text>
          <TextInput type="checkbox" style={styles.checkbox} />
        </View>
        <Button title="Login" onPress={handleLogin} />

        <Text style={styles.supportText}>¿Tiene algún problema?</Text>
        <Text style={styles.supportInfo}>
          Envíenos un correo electrónico a servicios.tecnologia@uvg.edu.gt o comuníquese al 2364-0336/40, extensión 21551
        </Text>
        <Text style={styles.schedule}>
          Horario de atención Lunes a viernes de 7:00 a 20:00{'\n'}
          Sábado de 7:00 a 15:00
        </Text>
      </View>
    </ImageBackground>
  );
};


const styles = StyleSheet.create({
    background: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
      alignItems: 'center',
    },
    container: {
      width: '80%',
      padding: 20,
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      borderRadius: 10,
    },
    logoContainer: {
      alignItems: 'center',
      marginBottom: 20,
    },
    logo: {
      width: 150,
      height: 50,
      resizeMode: 'contain',
    },
    title: {
      fontSize: 18,
      marginBottom: 10,
    },
    input: {
      height: 40,
      borderColor: '#ccc',
      borderWidth: 1,
      marginBottom: 10,
      paddingHorizontal: 10,
      borderRadius: 5,
    },
    rememberMeContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 20,
    },
    checkbox: {
      marginLeft: 5,
    },
    supportText: {
      marginTop: 20,
      fontSize: 14,
      color: '#777',
    },
    supportInfo: {
      fontSize: 14,
      color: '#777',
      marginBottom: 10,
    },
    schedule: {
      fontSize: 12,
      color: '#777',
    },
  });
export default UVGLogin;


/* 
this is how to configure app.js  with reac-navigation
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import UVGLogin from './path-to-component/UVGLogin';
import HomePage from './path-to-component/HomePage';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={UVGLogin} />
        <Stack.Screen name="Home" component={HomePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

 */