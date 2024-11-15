import EventButton from "../../components/buttons/eventButton.js";
import ImageButton from "../../components/imageBotton.js";
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from "../../configs/api.js";
import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import { useFonts, Inter_400Regular } from '@expo-google-fonts/inter';
import { useNavigation } from '@react-navigation/native';

const ProfileScreenCoord = () => {
  // Imágenes
  const img1 = require('../../assets/images/UVG2.jpg');
  const img2 = require('../../assets/images/CITWEB-22.png');
  const img3 = require('../../assets/images/images.jpeg');
  const images = [img1, img2, img3]; // Array de imágenes

  // Obtener el objeto navigation para ser reutilizado
  const navigation = useNavigation();

  // Función reutilizable para navegar
  const navigateToActivity ='NewActivityCoord';

  const [name, setName] = useState("");
  const [activities, setActivities] = useState([]); // Estado para guardar actividades
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
  });

  useEffect(() => {
    const fetchCoordinatorData = async () => {
      try {
        const email = await AsyncStorage.getItem('email');//Cache jalar en ve de aguardar
        const token = await AsyncStorage.getItem('token');

        // Obtener datos del coordinador
        let response = await api.get('/api/coordinators/email/' + email, { //método para buscar el api /students/nombre ejemplo
          headers: { Authorization: `Bearer ${token}` }
        });// textual
        setName(response.data.name);

        // Obtener actividades del coordinador
        let activityResponse = await api.get('/api/activities/coordinator-name/' + email, { 
          headers: { Authorization: `Bearer ${token}` }
        });

        const filteredActivities=Object.values(activityResponse.data).filter(activity=>!activity.complete)
        setActivities(filteredActivities); 
      } catch (error) {
        console.error('Error fetching coordinator data:', error);
      }
    };

    fetchCoordinatorData();
  }, []);

  if (!fontsLoaded) {
    return null;  // Return null instead of using deprecated AppLoading
  }

  return (
    <View style={styles.container}>

      <View style={styles.profileContainer}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.role}>Coordinador</Text>
      </View>

      {/* Mostrar actividades dinámicamente */}
      <ScrollView>
      <Text style={styles.eventsTitle}>Mis eventos:</Text>
        {activities.length > 0 ? (
          activities.map((activity, index) => {
            return (
              <View key={activity.id}>
                <ImageButton title={activity.name} id={activity.id} backgroundImage={images[index % images.length]} />
              </View>
            )
          })
        ) : (
          <Text style={styles.noEventsText}>No hay más eventos disponibles.</Text>
        )}
      </ScrollView>
      {/* Botones */}
      <EventButton text="Agregar un nuevo evento" handleButtonPres={()=>navigation.navigate(navigateToActivity)}/>
      <EventButton text="Cerrar sesión" handleButtonPres={()=>{
        AsyncStorage.removeItem("token");
        AsyncStorage.removeItem("email");
        navigation.navigate("Login")
      }}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2a2b2b',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  name: {
    fontSize: 32,
    fontFamily: 'Inter_400Regular',
    color: '#ffffff',
    backgroundColor: '#2E8B57',
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 10,
    textAlign: 'center',
  },
  role: {
    fontSize: 18,
    fontFamily: 'Inter_400Regular',
    color: '#cfcfcf',
    marginVertical: 5,
  },
  eventsTitle: {
    fontSize: 20,
    fontFamily: 'Inter_400Regular',
    color: '#cfcfcf',
    marginBottom: 15,
    textAlign: 'left',
  },
  addButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 8,
    marginVertical: 10,
    alignSelf: 'center',
  },
  addButtonText: {
    fontSize: 18,
    color: '#fff',
    fontFamily: 'Inter_400Regular',
  },
  noEventsText: {
    fontSize: 16,
    color: '#cfcfcf',
    textAlign: 'center',
    marginVertical: 30,
  },
});

export default ProfileScreenCoord;
