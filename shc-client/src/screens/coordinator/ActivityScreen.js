import React, { useEffect, useState } from 'react'; 
import { View, Text, TextInput, StyleSheet, ScrollView } from 'react-native';
import EventInput from '../../components/eventComponent.js';
import EventButton from '../../components/buttons/eventButton.js';
import api from '../../configs/api.js';
import { useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const ActivityScreenCoord = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { id } = route.params;
  const [editable, setEditable] = useState(false); 
  const [title, setTitle] = useState('Nuevo evento');
  const [date, setDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [description, setDescription] = useState('');
  const [maxCapacity, setMaxCapacity] = useState(0);
  const [coordinator, ssetCoordinator] = useState('');
  const [location, setLocation] = useState('');
  const [multiplier, setMultiplier] = useState(0);
  const [scholarshipHoursOffered, setScholarshipHoursOffered] = useState(0);
  const [department, setDepartment] = useState('');
  const [complete, setComplete] = useState(false);
  const [students, setStudents] = useState([]);

  // Acción cuando el botón sea presionado
  const handleButtonPress = async () => {
    try {
        const token = await AsyncStorage.getItem('token');        
        await api.put(`/api/activities/${id}`, {
            "name": title,
            "startTime": startTime,
            "endTime": endTime,
            "multiplier": multiplier,
            "scholarshipHoursOffered": scholarshipHoursOffered,
            "coordinator": coordinator,
            "location": location,
            "maxCapacity": maxCapacity,
            "department": department,
            "description": description,
            "date": date,
            "complete" : complete
        }, {
            headers: { 
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
        }
    );
    } catch {}

    navigation.navigate('ProfileCoord');
  };


  useEffect(() => {
    updateFields = async () => {
        try {
            const token = await AsyncStorage.getItem('token');
              
            const response = await api.get(`/api/activities/${id}`, {
                headers: { 
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
            }
        );

        setTitle(response.data.name);
        setStartTime(response.data.startTime);
        setEndTime(response.data.endTime);
        setMultiplier(response.data.multiplier);
        setScholarshipHoursOffered(response.data.scholarshipHoursOffered);
        ssetCoordinator(response.data.coordinator);
        setLocation(response.data.location);
        setMaxCapacity(response.data.maxCapacity);
        setDepartment(response.data.department);
        setDepartment(response.data.department);
        setDate(response.data.date);
        setComplete(response.complete);
        setStudents(response.data.students);
        } catch {}
    }

    updateFields();
  }, []);
  

  return (
    <ScrollView contentContainerStyle={styles.container1}>
      {/* Título editable con un cuadro */}

      <TextInput
        style={styles.title}
        value={title}
        onChangeText={setTitle} // Permite editar el título
        placeholder="Editar título"
        editable={editable}
      />

      <View style={styles.container2}>
        {/* Componente para la Fecha */}
        <View style={styles.inputGroup}>
          <EventInput
            label="Fecha"
            value={date}
            onChangeText={setDate}
            editable={editable}
          />
        </View>

        {/* Componente para la hora de inicio */}
        <View>
          <EventInput
            label="Hora de inicio"
            value={startTime}
            onChangeText={setStartTime}
            editable={editable}
          />
        </View>

        {/* Componente para la hora de finalización */}
        <View>
          <EventInput
            label="Hora de finalización"
            value={endTime}
            onChangeText={setEndTime}
            editable={editable}
          />
        </View>

        {/* Componente para la Descripción */}
        <View style={styles.container3}>
        <Text style={styles.label}>Descripción</Text>
        <TextInput
          style={styles.textArea}
          value={description}
          onChangeText={setDescription}
          multiline={true}
          numberOfLines={4}
          editable={editable}
        />
      </View>

        {/* Componente para el cupo máximo */}
        <View>
          <EventInput
            label="Cupo máximo"
            value={maxCapacity}
            onChangeText={setMaxCapacity}
            kbtype={'numeric'}
            editable={editable}
          />
        </View>

        {/* Componente para el cupo máximo */}
        <View>
          <EventInput
            label="Horas beca ofrecidas"
            value={scholarshipHoursOffered}
            onChangeText={setScholarshipHoursOffered}
            kbtype={'numeric'}
            editable={editable}
          />
        </View>

        {/* Componente para el lugar */}
        <View>
          <EventInput
            label="Lugar"
            value={location}
            onChangeText={setLocation}
            editable={editable}
          />
        </View>

        {/* Componente para el multiplicador */}
        <View>
          <EventInput
            label="Multiplicador"
            value={multiplier}
            onChangeText={setMultiplier}
            kbtype={'numeric'}
            editable={editable}
          />
        </View>

              {/* Componente para eldepartamento*/}
        <View>
          <EventInput
            label="Departamento"
            value={department}
            onChangeText={setDepartment}
            editable={editable}
          />
        </View>


{/* Mostrar estudiantes dinámicamente */}
<View style={styles.container4}>
<ScrollView >
  <Text style={styles.label}>Estudiantes agregados: </Text>
  {Array.isArray(students) && students.length > 0 ? (
    students.map((student) => (
      <View style={styles.container11} key={student.id} >
        <Text style={styles.label1}>{student.name}</Text>
      </View>
    ))
  ) : (
    <Text style={styles.label}>No hay más estudiantes</Text>
  )}
</ScrollView>
</View>

      </View>
      {/* Botón al final del formulario */}
      <View style={styles.buttonContainer}>
        <EventButton
          text={'Editar'}
          handleButtonPress={()=>setEditable(!editable)}
        />

        <EventButton
          text={'Guardar'}
          handleButtonPress={handleButtonPress}
        />
      </View>
    </ScrollView>
  );
}

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
    switchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 10,
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
    container4: {
      backgroundColor: '#D9D9D9',
      alignItems: 'center',   // Centra los elementos dentro del contenedor
      padding: 10,
    },
    container11: {
      flexDirection: 'row',
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
      marginBottom: 10, 
    },

    label1: {
      fontSize: 20,
      color: '#000',
      backgroundColor: '#FFF',
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
        width:'100%',
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

export default ActivityScreenCoord;