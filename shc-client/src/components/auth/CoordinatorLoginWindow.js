import React from 'react';
import { View, TextInput, Button, Alert, Dimensions } from 'react-native';

const CoordinatorLogin = ({ handleLogin, email, setEmail, password, setPassword }) => (
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
        <Button title="Iniciar sesión" onPress={handleLogin} />
    </View>
);

const styles = {
    loginContainer: {
      flex: 1,
      justifyContent: 'center',
      padding: 20,
      width: '100%', 
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

export default CoordinatorLogin;