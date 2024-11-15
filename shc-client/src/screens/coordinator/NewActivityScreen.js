import React, { useState } from 'react'; 
import { View, Text, TextInput, StyleSheet, ScrollView, Switch } from 'react-native';
import EventInput from '../../components/eventComponent.js';
import { TouchableOpacity } from 'react-native';
import api from '../../configs/api.js'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import EventButton from '../../components/buttons/eventButton.js';

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
    <ScrollView contentContainerStyle={styles.container}>
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
            placeholder="AAAA-MM-DD"
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
            date={true}
          />
        </View>

        {/* Componente para la hora de finalización */}
        <View>
          <EventInput
            label="Hora de finalización"
            placeholder="00:00"
            value={endTime}
            onChangeText={setEndTime}
            date={true}
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
      <EventButton text={"Crear actividad"} handleButtonPres={handleButtonPress}/>
    </ScrollView>

    
  );
};

// Estilos del componente
const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#F7F7F7",
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 20,
    borderBottomWidth: 1,
    borderColor: "#E0E0E0",
    padding: 5,
    width: "100%",
  },
  formSection: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 10,
  },
  textArea: {
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 8,
    padding: 10,
    backgroundColor: "#FFF",
    minHeight: 100,
    fontSize: 16,
    marginBottom: 20,
    width: "100%",
  },
  input: {
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 8,
    padding: 10,
    backgroundColor: "#FFF",
    fontSize: 16,
    marginBottom: 10,
    width: "100%",
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  studentList: {
    marginBottom: 20,
  },
  studentItem: {
    padding: 10,
    backgroundColor: "#EFEFEF",
    borderRadius: 5,
    marginBottom: 10,
  },
  noStudentsText: {
    fontSize: 14,
    color: "#888",
  },
  buttonContainer: {
    flexDirection: "column",
    alignItems: "stretch",
  },
  button: {
    marginBottom: 10,
  },
});

export default NewActivityScreen;
