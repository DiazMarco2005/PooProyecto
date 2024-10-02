import React from 'react';
import { TextInput, Button, Alert, ScrollView } from 'react-native';

const CoordinatorRegister = ({ 
    handleRegister, 
    name, 
    setName, 
    email, 
    setEmail, 
    password, 
    setPassword, 
    position, 
    setPosition 
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
            value={position}
            onChangeText={setPosition}
            placeholder="Posición"
        />
      
        <Button title="Registrarse" onPress={handleRegister} />
    
    </ScrollView>
);

const styles = {
    scrollContainer: {
        paddingVertical: 20,
        paddingHorizontal: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        padding: 10,
        marginBottom: 20,
        width: '100%',
    },
};

export default CoordinatorRegister;