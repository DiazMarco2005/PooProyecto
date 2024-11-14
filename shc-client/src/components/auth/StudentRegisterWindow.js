import React from 'react';
import { TextInput, Button, Alert, ScrollView, Text, TouchableOpacity } from 'react-native';

const StudentRegister = ({ 
    handleRegister, 
    name, 
    setName, 
    email, 
    setEmail, 
    password, 
    setPassword, 
    major, 
    setMajor, 
    year, 
    setYear 
}) => (
    
    <ScrollView contentContainerStyle={styles.scrollContainer}>
        
        <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
            placeholder="Nombre"
        />
        
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
        
        <TextInput
            style={styles.input}
            value={major}
            onChangeText={setMajor}
            placeholder="Carrera"
        />
        
        <TextInput
            style={styles.input}
            value={year}
            onChangeText={setYear}
            placeholder="Año de estudios"
            keyboardType="numeric"
        />
        
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
            <Text style={styles.buttonText}>Registrarse</Text>
        </TouchableOpacity>
    </ScrollView>
);

const styles = {
    scrollContainer: {
        paddingVertical: 20,
        paddingHorizontal: 20,
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

export default StudentRegister;