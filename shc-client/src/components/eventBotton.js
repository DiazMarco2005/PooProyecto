import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Para obtener la navegación en el botón

const EventButton = ({ text, color, navigateTo }) => {
  const navigation = useNavigation(); // Obtener el objeto de navegación

  // Función para manejar la navegación, recibe un destino de ruta
  const handlePress = () => {
    if (navigateTo!= null) {
      console.log("llego hasta aca")
      navigation.navigate(navigateTo);

    } else {
      console.warn('No route specified for navigation');
    }
  };

  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: color }]}
      onPress={handlePress} // Ejecuta la navegación al presionar el botón
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 4, // Para sombra en Android
  },
  text: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
});

export default EventButton;
