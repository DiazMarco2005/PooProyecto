import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';


const EventInput = ({ label, value, onChangeText, placeholder, editable }) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>
        {label}
      </Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        editable={editable} 
      />
    </View>
  );
};


const PublishEvent = () => {
  const [isEditable, setIsEditable] = useState(false); 
  const [fecha, setFecha] = useState('21-09-24');
  const [horaInicio, setHoraInicio] = useState('10:00 a.m.');
  const [horaFin, setHoraFin] = useState('12:00 p.m.');
  const [descripcion, setDescripcion] = useState('Descripción breve....');
  const [lugar, setLugar] = useState('Nombre de Un lugar');
  const [cupoMaximo, setCupoMaximo] = useState('4');
  const [cupoDisponible, setCupoDisponible] = useState('2');


  const enableEdit = () => {
    setIsEditable(true); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Evento 1</Text>
      
      {/* Inputs de evento */}
      <EventInput
        label="Fecha:"
        value={fecha}
        onChangeText={setFecha}
        placeholder="dd/mm/aa"
        editable={isEditable}
      />
      <EventInput
        label="Hora de inicio:"
        value={horaInicio}
        onChangeText={setHoraInicio}
        placeholder="10:00 a.m."
        editable={isEditable}
      />
      <EventInput
        label="Hora de finalización:"
        value={horaFin}
        onChangeText={setHoraFin}
        placeholder="12:00 p.m."
        editable={isEditable}
      />
      <EventInput
        label="Descripción:"
        value={descripcion}
        onChangeText={setDescripcion}
        placeholder="Descripción breve..."
        editable={isEditable}
      />
      <EventInput
        label="Cupo máximo:"
        value={cupoMaximo}
        onChangeText={setCupoMaximo}
        placeholder="4"
        editable={isEditable}
      />
      <EventInput
        label="Lugar:"
        value={lugar}
        onChangeText={setLugar}
        placeholder="Nombre de un lugar"
        editable={isEditable}
      />
      <EventInput
        label="Cupo disponible:"
        value={cupoDisponible}
        onChangeText={setCupoDisponible}
        placeholder="2"
        editable={isEditable}
      />

      {/* Botones Editar y Eliminar */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.editButton}
          onPress={enableEdit} 
        >
          <Text style={styles.buttonText}>Editar</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => alert('Evento eliminado')} 
        >
          <Text style={styles.buttonText}>Eliminar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  label: {
    fontSize: 18,
    color: '#000',
    backgroundColor: '#AFD38B',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderColor: '#000',
    borderWidth: 1,
    flex: 1,
    textAlign: 'left',
  },
  input: {
    flex: 2,
    borderWidth: 1,
    borderColor: '#000',
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    fontSize: 18,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  editButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteButton: {
    backgroundColor: '#f44336',
    padding: 10,
    borderRadius: 5,
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default PublishEvent;