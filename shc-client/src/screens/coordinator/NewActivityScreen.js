import React, { useState } from 'react'; 
import { View, Text, TextInput, StyleSheet, ScrollView } from 'react-native';
import EventInput from '../../components/eventComponent.js';
import { TouchableOpacity } from 'react-native';
import api from '../../configs/api.js'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const NewActivityScreen = () => {
  const navigation = useNavigation();
  const [title, setTitle] = useState('Nuevo evento');
  const [date, setDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [description, setDescription] = useState('');
  const [maxCapacity, setMaxCapacity] = useState('');
  const [location, setLocation] = useState('');
  const [multiplier, setMultiplier] = useState(0);
  const [scholarshipHoursOffered, setScholarshipHoursOffered] = useState(0);
  const [department, setDepartment] = useState('');


  const handleButtonPress = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      const coordMail = await AsyncStorage.getItem('email');
      const response =await api.post('/api/activities/', {
          "name": title,
          "startTime": startTime,
          "endTime": endTime,
          "multiplier": multiplier,
          "scholarshipHoursOffered": scholarshipHoursOffered,
          "coordinator": coordMail,
          "location": location,
          "maxCapacity": maxCapacity,
          "department": department,
          "description": description,
          "date": date,
          "complete" : false
      }, {
        headers: { 
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
      });
    } catch {}

    navigation.navigate('ProfileCoord');
  };

  return (
    <ScrollView contentContainerStyle={styles.container1}>
      {/* Título editable con un cuadro */}

      <TextInput
        style={styles.title}
        value={title}
        onChangeText={setTitle} // Permite editar el título
        placeholder="Editar título"
      />

      <View style={styles.container2}>
        {/* Componente para la Fecha */}
        <View style={styles.inputGroup}>
          <EventInput
            label="Fecha"
            placeholder="dd/mm/AA"
            value={date}
            onChangeText={setDate}
          />
        </View>

        {/* Componente para la hora de inicio */}
        <View>
          <EventInput
            label="Hora de inicio"
            placeholder="00:00"
            value={startTime}
            onChangeText={setStartTime}
          />
        </View>

        {/* Componente para la hora de finalización */}
        <View>
          <EventInput
            label="Hora de finalización"
            placeholder="00:00"
            value={endTime}
            onChangeText={setEndTime}
          />
        </View>

        {/* Componente para la Descripción */}
        <View style={styles.container3}>
        <Text style={styles.label}>Descripción</Text>
        <TextInput
          style={styles.textArea}
          placeholder="Agrega una breve descripción"
          value={description}
          onChangeText={setDescription}
          multiline={true}          // Permite múltiples líneas de texto
          numberOfLines={4}         // Número de líneas visibles antes de desplazarse
        />
      </View>

        {/* Componente para el cupo máximo */}
        <View>
          <EventInput
            label="Cupo máximo"
            placeholder="0"
            value={maxCapacity}
            onChangeText={setMaxCapacity}
            kbtype={'numeric'}
          />
        </View>

        {/* Componente para el cupo máximo */}
        <View>
          <EventInput
            label="Horas beca ofrecidas"
            placeholder="0"
            value={scholarshipHoursOffered}
            onChangeText={setScholarshipHoursOffered}
            kbtype={'numeric'}
          />
        </View>

        {/* Componente para las horas beca a dar */}
        <View>
          <EventInput
            label="Horas beca"
            placeholder="0"
            value={scholarshipHoursOffered}
            onChangeText={setScholarshipHoursOffered}
          />
        </View>


        {/* Componente para el lugar */}
        <View>
          <EventInput
            label="Lugar"
            placeholder="Lugar"
            value={location}
            onChangeText={setLocation}
          />
        </View>

        {/* Componente para el multiplicador */}
        <View>
          <EventInput
            label="Multiplicador"
            placeholder="0"
            value={multiplier}
            onChangeText={setMultiplier}
            kbtype={'numeric'}
          />
        </View>

              {/* Componente para eldepartamento*/}
        <View>
          <EventInput
            label="Departamento"
            placeholder="departamento"
            value={department}
            onChangeText={setDepartment}
          />
        </View>

      </View>
      {/* Botón al final del formulario */}
      <View style={styles.buttonContainer}>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#2E4C12' }]}
          onPress={handleButtonPress} // Ejecuta la navegación al presionar el botón
        >
          <Text style={styles.text}>{'Crear evento'}</Text>
        </TouchableOpacity>
      </View>

    </ScrollView>

    
  );
};

// Estilos del componente
const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    color: '#fff',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderColor: '#fff',    // Color del borde del cuadro
    borderWidth: 2,         // Grosor del borde
    borderRadius: 10,       // Bordes redondeados
    backgroundColor: '#000', // Fondo del cuadro
    textAlign: 'center',    // Centra el texto horizontalmente
    width: '100%',
    marginBottom: 10,
    marginTop: 40,          // Espacio superior agregado
  },
  container1: {
    backgroundColor: '#000',
    alignItems: 'center',   // Centra los elementos dentro del contenedor
    padding: 10,
  },
  container2: {
    flexGrow: 1,
    padding: 30,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
  },
  container3: {
    marginBottom: 5,
  },

    label: {
    fontSize: 20,
    color: '#000',
    backgroundColor: '#AFD38B',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderColor: '#000',
    borderWidth: 1,
    whiteSpace: 'nowrap',
  },

  textArea: {
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
    backgroundColor: '#fff',
    fontSize: 20,
    height: 200,
  },

    buttonContainer: {
    marginTop: 20,     // Espacio antes del botón
    alignItems: 'center',
  },

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

export default NewActivityScreen;
