import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';


export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <View style={styles.avatarContainer}>
          <Image
            source={{ uri: 'https://via.placeholder.com/100' }} //Para mientras
            style={styles.avatar}
          />
        </View>
        <Text style={styles.name}>Marco Alejandro Díaz Castañeda</Text>
        <View style={styles.aboutContainer}>
          <Text style={styles.aboutText}>Sobre mí:</Text>
          <Text style={styles.placeholderText}>Escribe algo sobre ti...</Text>
        </View>
      </View>


      <View style={styles.progressContainer}>
        <Text style={styles.progressText}>95%</Text>
        <Text style={styles.completionText}>Completado</Text>
        <Text style={styles.remainingText}>5 horas restantes</Text>
      </View>


      <View style={styles.activitiesContainer}>
        <Text style={styles.activitiesTitle}>Últimas Actividades</Text>
        <TouchableOpacity style={styles.activityButton}>
          <Text style={styles.activityText}>Garden</Text>
          <View style={styles.hoursContainer}>
            <Text style={styles.hoursText}>10 horas</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.activityButton}>
          <Text style={styles.activityText}>Tutorías</Text>
          <View style={styles.hoursContainer}>
            <Text style={styles.hoursText}>5 horas</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2D2D2D',
    padding: 20,
  },
  profileContainer: {
    backgroundColor: '#E6E6E6',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
  },
  avatarContainer: {
    backgroundColor: '#A3A3A3',
    borderRadius: 50,
    padding: 10,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  name: {
    marginTop: 10,
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  aboutContainer: {
    marginTop: 10,
    width: '100%',
    backgroundColor: '#C4C4C4',
    borderRadius: 10,
    padding: 10,
  },
  aboutText: {
    color: '#7F7F7F',
  },
  placeholderText: {
    color: '#FFFFFF',
    marginTop: 5,
  },
  progressContainer: {
    marginTop: 20,
    backgroundColor: '#000000',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  progressText: {
    color: '#FFFFFF',
    fontSize: 30,
    fontWeight: 'bold',
  },
  completionText: {
    color: '#FFFFFF',
    fontSize: 16,
    marginTop: 10,
  },
  remainingText: {
    color: '#FFFFFF',
    fontSize: 16,
    marginTop: 5,
  },
  activitiesContainer: {
    marginTop: 20,
    backgroundColor: '#1A1A1A',
    borderRadius: 10,
    padding: 20,
  },
  activitiesTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    marginBottom: 10,
  },
  activityButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#333333',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  activityText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  hoursContainer: {
    backgroundColor: '#28A745',
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  hoursText: {
    color: '#FFFFFF',
  },

});

