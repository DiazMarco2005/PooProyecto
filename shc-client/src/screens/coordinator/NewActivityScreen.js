import React, { useState } from 'react'; 
import { View, TextInput, StyleSheet, ScrollView } from 'react-native';
import EventInput from './components/eventComponent';

const NewActivityScreen = () => {
  const [title, setTitle] = useState('Nuevo evento'); // Estado para el título
  const [date, setDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [manager, setManager] = useState('');
  const [description, setDescription] = useState('');
  const [maxCapacity, setMaxCapacity] = useState('');
  const [location, setLocation] = useState('');
  const [multiplier, setMultiplier] = useState('');
  const [department, setDepartment] = useState('');

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

        {/* Componente para el nombre del encargado */}
        <View>
          <EventInput
            label="Encargado"
            placeholder="Nombre"
            value={manager}
            onChangeText={setManager}
          />
        </View>

        {/* Componente para la Descripción */}
        <View style={styles.container3}>
          <TextInput
            style={styles.textArea}
            placeholder="Nombre del departamento"
            value={department}
            onChangeText={setDepartment}
          />
        </View>

        {/* Componente para el cupo máximo */}
        <View>
          <EventInput
            label="Cupo máximo"
            placeholder="0"
            value={maxCapacity}
            onChangeText={setMaxCapacity}
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
          />
        </View>

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
  textArea: {
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
    backgroundColor: '#fff',
    fontSize: 20,
    height: 200,
  },
});

export default NewActivityScreen;