import EventButton from "../../components/eventBotton.js";
import ImageButton from "../../components/imageBotton.js";
import api from "../../configs/api.js";

import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
// Agrega la fuente Inter
import { useFonts, Inter_400Regular } from '@expo-google-fonts/inter';
import AppLoading from 'expo-app-loading';

const ProfileScreenCoord = () => {
  // Cargar la fuente Inter
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
  });
  let name= api.get('/api/coordinator/'+id)
    name=name[name]
  if (!fontsLoaded) {
    return <AppLoading />;
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
      <Text style={styles.name}></Text>
      <Text style={styles.role}>Coordinador</Text>

      {/* Sección de eventos */}
      <Text style={styles.eventsTitle}>Mis eventos:</Text>
      <ScrollView>
        <Image source={{ uri: 'https://via.placeholder.com/300x150' }} style={styles.eventImage} />
        <Text style={styles.eventTitle}>Evento 1</Text>

        <Image source={{ uri: 'https://via.placeholder.com/300x150' }} style={styles.eventImage} />
        <Text style={styles.eventTitle}>Evento 2</Text>

        <Image source={{ uri: 'https://via.placeholder.com/300x150' }} style={styles.eventImage} />
        <Text style={styles.eventTitle}>Evento 3</Text>
      </ScrollView>

      <ImageButton/>
      <TouchableOpacity style={styles.addButton}>
        <EventButton/>
        <Text style={styles.addButtonText}>Agregar nuevo evento</Text>
      </TouchableOpacity>

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
    fontSize: 18,
    fontFamily: 'Inter_400Regular',
    color: '#fff',
    textAlign: 'center',
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
    marginBottom: 10,
  },
  eventTitle: {
    fontSize: 16,
    fontFamily: 'Inter_400Regular',
    color: '#fff',
    marginBottom: 20,
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


