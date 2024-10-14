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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
  },
  messageContainer: {
    marginBottom: 30,
    alignItems: 'center',
  },
  successMessage: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  hoursContainer: {
    width: '80%',
    backgroundColor: '#d29a79',
    borderRadius: 10,
    alignItems: 'center',
    padding: 20,
    marginBottom: 30,
  },
  hoursText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
  },
  hoursLabel: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
    marginTop: 10,
  },
  eventContainer: {
    width: '80%',
    backgroundColor: '#fff',
    borderColor: '#d29a79',
    borderWidth: 2,
    borderRadius: 10,
    alignItems: 'center',
    padding: 15,
    marginBottom: 20,
  },
  eventName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    marginBottom: 10,
  },
  eventStatus: {
    fontSize: 16,
    fontWeight: '600',
    color: '#8A4A32',
  },
});
export default BecaValidationScreen;
