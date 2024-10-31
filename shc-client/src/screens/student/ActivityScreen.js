import React, { useEffect, useState } from 'react'; 
import { View, Text, TextInput, StyleSheet, ScrollView } from 'react-native';
import EventInput from '../../components/eventComponent.js';
import EventButton from './../../components//buttons/eventButton.js';
import api from '../../configs/api.js';
import { useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const ActivityScreen = () => {
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
            setDescription(response.data.description);
            setDate(response.data.date);
            } catch {}
        }
    
        updateFields();
    }, []);

    return (
      <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
  
  
        <View style={styles.container1}>
  
          <Text style={styles.profileName}>{coordinator}</Text>
  
          <View style={styles.container2}>
  
            <View style={styles.line}>
              <View style={styles.sideBar}></View>
              <Text style={styles.text}>Fecha: {date}</Text>
              </View>
  
            <View style={styles.field}>
              <Text style={styles.label}>Descripción:</Text>
              <View style={styles.sideBar2}></View>
              <TextInput
                style={[styles.input, styles.descriptionInput]}
                editable={editable}
                value={description}
                onChangeText={setDescription}
                multiline={true}
                numberOfLines={4}
                />
            </View>
  
            <View style={styles.row}>
              <View style={styles.column}>
                <Text style={styles.label2}>Lugar:</Text>
                <View style={styles.sideBar3}></View>
                <Text style={styles.label2}>{location}</Text>
              </View>
              
              <View style={styles.column}>
                <Text style={styles.label2}>Horario:</Text>
                <View style={styles.sideBar3}></View>
                <Text style={styles.label2}>{startTime}-{endTime}</Text>
                </View>
            </View>
  
  
            <View style={styles.row}>
              <View style={styles.line}>
              <View style={styles.sideBar}></View>
              <Text style={styles.text}>Multiplicador: </Text>
              <Text style ={[styles.value, styles.label2]}>{multiplier}</Text>
              </View>
            </View>
  
            <View style={styles.row}>
              <View style={styles.line}>
              <View style={styles.sideBar}></View>
              <Text style={styles.text}>Cupo máximo: </Text>
              <Text style ={[styles.value, styles.label2]}>{maxCapacity}</Text>
              </View>
            </View>
  
            <View style={styles.row}>
              <View style={styles.line}>
              <View style={styles.sideBar}></View>
              <Text style={styles.text}>Cupo Disponible: </Text>
              <Text style ={[styles.value, styles.label2]}>{maxCapacity}</Text>
              </View>
            </View>
  
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Unirme a la actividad</Text>
            </TouchableOpacity>
  
          </View>
        </View>
            
      </View>
    );
  }

export default ActivityScreen;

const styles = StyleSheet.create({
  container: {
  backgroundColor: '#010101',
  padding: 10,
  borderRadius: 10,
  margin: 10,
},

  container1: {
  backgroundColor: '#C1846D',
  padding: 9,
  borderRadius: 10,
  margin: 1,
  alignItems: 'right',

},

container2:{
  backgroundColor: '#FFF',
  padding: 8,
  borderRadius: 10,
  margin: 5,

},

line: {
  flexDirection: 'row',
  alignItems: 'center',
},

sideBar: {
  width: 5,   
  height: 20, 
  borderColor:'#000',
  borderWidth: 1,
  backgroundColor: '#C1846D', 
  marginRight: 10, 
},
text: {
  fontSize: 16, // Tamaño del texto
  fontWeight: 'bold', // Negrita para el texto
  marginBottom: 6,
},


title: {
  fontSize: 20,
  fontWeight: 'bold',
  textAlign: 'center',
  marginBottom: 10,
  color:'#fff',
},

profileName: {
  fontSize: 16,
  fontWeight: 'bold',
},

field: {
  marginBottom: 10,
},
label: {
  fontWeight: 'bold',
  marginBottom: 3,
},
  label2: {
  fontWeight: 'bold',
  marginBottom: 1,
  textAlign: 'center',
},
input: {
  borderWidth: 1,
  borderColor: '#ccc',
  borderRadius: 5,
  padding: 10,
  backgroundColor: '#fff',
},
descriptionInput: {
  height: 80,
  textAlignVertical: 'top',
},
row: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginBottom: 10,
},
column: {
  flex: 1,
  marginHorizontal: 5,
  borderColor:'#C1846D',
  borderWidth: 1,
},

sideBar2: {
  width: 90,   
  height: 5, 
  borderColor:'#000',
  backgroundColor: '#C1846D', 
  marginRight: 5, 
  marginBottom: 10,
},

  sideBar3: {
  width: 60,   
  height: 5, 
  borderColor:'#000',
  backgroundColor: '#C1846D', 
  marginRight: 5, 
  marginBottom: 5,
  alignSelf: 'center',

},

value: {
  flex: 1,
  marginHorizontal: 5,
  backgroundColor: '#C1846D',
  paddingHorizontal: 10,

},
button: {
  backgroundColor: '#b22222',
  padding: 15,
  borderRadius: 25,
  alignItems: 'center',
  marginTop: 10,
},
buttonText: {
  color: '#fff',
  fontWeight: 'bold',
  fontSize: 16,
},
});