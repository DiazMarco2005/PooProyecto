import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const NewEventForm = () => {
  // Definir los estados para almacenar los datos de los campos
  //Almacenaran información
  //Arreglar, todavia no esta terminado
  const [date, setDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [manager, setManager] = useState('');
  const [description, setDescription] = useState('');
  const [maxCapacity, setMaxCapacity] = useState('');
  const [location, setLocation] = useState('');
  const [multiplier, setMultiplier] = useState('');
  const [publishDate, setPublishDate] = useState('');
  const [department, setDepartment] = useState('');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Nuevo evento</Text>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Fecha:</Text>
        <TextInput
          style={styles.input}
          placeholder="dd/mm/AA"
          value={date}
          onChangeText={setDate}
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Hora de inicio</Text>
        <TextInput
          style={styles.input}
          placeholder="23:59"
          value={startTime}
          onChangeText={setStartTime}
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Hora de finalización</Text>
        <TextInput
          style={styles.input}
          placeholder="23:59"
          value={endTime}
          onChangeText={setEndTime}
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Encargado</Text>
        <TextInput
          style={styles.input}
          placeholder="Nombre del Encargado"
          value={manager}
          onChangeText={setManager}
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Descripción</Text>
        <TextInput
          style={styles.textArea}
          placeholder="Descripción breve...."
          value={description}
          onChangeText={setDescription}
          multiline={true}
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Cupo máximo</Text>
        <TextInput
          style={styles.input}
          placeholder="####"
          value={maxCapacity}
          onChangeText={setMaxCapacity}
          keyboardType="numeric"
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Lugar</Text>
        <TextInput
          style={styles.input}
          placeholder="CIT-350"
          value={location}
          onChangeText={setLocation}
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Multiplicador</Text>
        <TextInput
          style={styles.input}
          placeholder="99999"
          value={multiplier}
          onChangeText={setMultiplier}
          keyboardType="numeric"
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Fecha de publicación</Text>
        <TextInput
          style={styles.input}
          placeholder="dd/mm/yyyy"
          value={publishDate}
          onChangeText={setPublishDate}
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Departamento</Text>
        <TextInput
          style={styles.input}
          placeholder="Nombre del departamento"
          value={department}
          onChangeText={setDepartment}
        />
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Publicar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

//arreglar tamaño y vista 
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#000',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  inputGroup: {
    width: '100%',
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    color: '#000',
    backgroundColor: '#B8E986', // Color verde claro para las etiquetas
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#B8E986', // Color verde claro para los bordes de entrada
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#fff',
    fontSize: 16,
  },
  textArea: {
    borderWidth: 1,
    borderColor: '#B8E986',
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#fff',
    fontSize: 16,
    height: 100, // Altura para área de texto
  },
  button: {
    backgroundColor: '#4CAF50', // Color verde oscuro para el botón
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default NewEventForm;
