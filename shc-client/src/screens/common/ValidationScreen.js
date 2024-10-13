import React from 'react';
import { View, Text } from 'react-native';

const BecaValidationScreen = () => {
  const horasCompletadas = 4; 
  const evento = " "; 
  const estadoEvento = " "; 
  
  return (
    <View style={styles.container}>
      {/* Título */}
      <Text style={styles.title}>Valida tus horas beca</Text>
      
      {/* Mensaje de éxito */}
      <View style={styles.messageContainer}>
        <Text style={styles.successMessage}>Tus horas beca fueron</Text>
        <Text style={styles.successMessage}>validadas exitosamente</Text>
      </View>

      {/* Horas beca completadas */}
      <View style={styles.hoursContainer}>
        <Text style={styles.hoursText}>{horasCompletadas}</Text>
        <Text style={styles.hoursLabel}>Horas beca completadas</Text>
      </View>

      {/* Información del evento */}
      <View style={styles.eventContainer}>
        <Text style={styles.eventName}>{evento}</Text>
        <Text style={styles.eventStatus}>{estadoEvento}</Text>
      </View>
    </View>
  );
};
export default BecaValidationScreen;
