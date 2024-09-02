import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const ActivitiesScreen = () => {
 
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Lista de actividades</Text>
      <View style={styles.container1}>
    
      <TouchableOpacity 
        style={styles.button}
      >
        <Text style={styles.buttonText}>Actividades de hoy</Text>
      </TouchableOpacity>
     
      <TouchableOpacity 
        style={styles.button}
      >
        <Text style={styles.buttonText}>Actividades de esta semana</Text>
      </TouchableOpacity>
 
      <TouchableOpacity 
        style={styles.button}
      >
        <Text style={styles.buttonText}>Tours</Text>
      </TouchableOpacity>
   
      <TouchableOpacity 
        style={styles.button}
      >
        <Text style={styles.buttonText}>Actividades de mi carrera</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D9D9D9',
    padding: 30,
    justifyContent: 'center',
  },
  
  container1: {
    flex: 10,
    backgroundColor: '#538A46',
    padding: 10,
    justifyContent: 'up',
  },

  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
    alignSelf: 'center',
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#32CD32',
    padding: 20,
    borderRadius: 20,
    marginBottom: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
  },

});

export default ActivitiesScreen;


 {/* Cambios a realizar: crear componente boton, insertar imagenes y rutas de navegación */}