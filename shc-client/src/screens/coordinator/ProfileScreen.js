import EventButton from "../../components/eventBotton.js";
import ImageButton from "../../components/imageBotton.js";
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from "../../configs/api.js";
import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { useFonts, Inter_400Regular } from '@expo-google-fonts/inter';

const ProfileScreenCoord = () => {
  // Imágenes
  const img1 = require('../../assets/images/UVG2.jpg');
  const img2 = require('../../assets/images/CITWEB-22.png');
  const img3 = require('../../assets/images/images.jpeg');
  const images = [img1, img2, img3]; // Array de imágenes
  const navigateToActivity = () => {
    navigation.navigate('ActivityCoord'); // Adjust the route as necessary
  }
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
        let activityResponse = await api.get('/api/activities/coordinator-name/' + response.data.name, { 
          headers: { Authorization: `Bearer ${token}` }
        });
        setActivities(activityResponse.data); // Guardar las actividades en el estado
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
      <View style={styles.menuContainer}>
        <Text style={styles.menuText}></Text>
      </View>

      {/* Imagen de perfil */}
      <View style={styles.profileImageContainer}>
        <Image 
          source={{ uri: 'https://via.placeholder.com/100' }} 
          style={styles.profileImage} 
        />
      </View>

      {/* Nombre y rol */}
      <View style={styles.profileContainer}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.role}>Coordinador</Text>
      </View>
      {/* Sección de eventos */}
      <Text style={styles.eventsTitle}>Mis eventos:</Text>

      {/* Mostrar actividades dinámicamente */}
      <ScrollView>
        {activities.length > 0 ? (
          activities.map((activity, index) => (
            <View key={activity.id}>
              {/* Rotar imágenes basado en el índice */}
              ///Image source={images[index % images.length]} style={styles.eventImage}
              <ImageButton navigation={navigation} title={activity.name} backgroundImage={images[index % images.length] } path={'../shc-client/src/screens/coordinator/ActivityScreen.js'}/>
            </View>
          ))
        ) : (
          <Text style={styles.noEventsText}>No hay eventos disponibles.</Text>
        )}
      </ScrollView>

      {/* Botones */}
      <EventButton text="Agregar un nuevo evento" color="#4CAF50" onPress={navigateToActivity}/>

      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image 
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Logo_UVG.jpg/1200px-Logo_UVG.jpg' }} 
          style={styles.logo} 
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profileContainer:{
    flex: 1,
    alignItems: 'center',
    minWidth: '200px',

  },
  container: {
    flex: 1,
    backgroundColor: '#000', // Color de fondo negro
    padding: 20,
  },
  menuContainer: {
    alignSelf: 'flex-start',
  },
  menuText: {
    fontSize: 24,
    color: '#fff',
  },
  profileImageContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#ccc',
  },
  name: {
    fontSize: 30,
    fontFamily: 'Inter_400Regular',
    color: '#fff',
    textAlign: 'center',
    backgroundColor:'#2E4C12',
    borderRadius:'20%',
    maxWidth:'800px',
    minWidth:'200px',
    alignItems:'center',
  },
  role: {
    fontSize: 16,
    fontFamily: 'Inter_400Regular',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  eventsTitle: {
    fontSize: 18,
    fontFamily: 'Inter_400Regular',
    color: '#fff',
    marginBottom: 10,
  },
  eventImage: {
    width: '100%',
    height: 150,
    marginBottom: 30,
  },
  eventTitle: {
    fontSize: 16,
    fontFamily: 'Inter_400Regular',
    color: '#fff',
    marginBottom: 20,
  },
  noEventsText: {
    fontSize: 16,
    fontFamily: 'Inter_400Regular',
    color: '#fff',
    textAlign: 'center',
    marginVertical: 20,
  },
  addButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    alignItems: 'center',
    marginTop: 10,
    borderRadius: 5,
  },
  addButtonText: {
    fontSize: 16,
    fontFamily: 'Inter_400Regular',
    color: '#fff',
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  logo: {
    width: 150,
    height: 50,
  },
});

export default ProfileScreenCoord;
