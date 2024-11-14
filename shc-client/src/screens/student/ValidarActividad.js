import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const ScholarshipHoursScreen = () => {
  const [hoursCompleted, setHoursCompleted] = useState(4);
  const [eventName, setEventName] = useState("EVENTO 1");
  const [eventStatus, setEventStatus] = useState("Finalizado");

  return (
    <View style={styles.container}>
      {/* Menu */}
      <Image 
        source={require('./../../assets/images/Menu.png')} // 
        style={styles.menuImage} 
      />

      <View style={styles.titleContainer}>
            {/*Título de pantalla*/}
        <View style={styles.titleWrapper}>
          <Text style={styles.titleLine1}>Valida tus horas</Text>
          <Text style={styles.titleLine2}>beca</Text>
        </View>
        <View style={styles.underline} />
      </View>
{/*TValidación*/}
      <View style={styles.contentWrapper}>
        <Text style={styles.validationMessage}>Tus horas beca fueron validadas exitosamente</Text>

{/*Horas Completadas*/}
        <View style={styles.hoursContainer}>
          <View style={styles.hoursNumberContainer}>
            <Text style={styles.hoursText}>{hoursCompleted}</Text>
          </View>
          <View style={styles.hoursLabelContainer}>
            <Text style={styles.hoursLabel}>Horas Beca</Text>
            <Text style={styles.hoursLabelSubtext}>completadas</Text>
          </View>
        </View>

{/*Información del Evento*/}
        <View style={styles.eventContainer}>
          <View style={styles.eventUnderlineContainer}>
            <Text style={styles.eventName}>{eventName}</Text>
            <View style={styles.eventUnderline} />
          </View>
          <TouchableOpacity style={styles.eventStatusButton}>
            <Text style={styles.eventStatusText}>{eventStatus}</Text>
          </TouchableOpacity>
        </View>

{/*Logo UVG*/}
        <View style={styles.logoContainer}>
          <Image source={require('./../../assets/images/UVG.jpg')} style={styles.logoImage} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1d1d1b',
    position: 'relative', 
  },
  menuImage: {
    position: 'absolute', 
    top: 0, 
    left: 30,
    width: 40, 
    height: 115, 
    resizeMode: 'contain', 
  },
  titleContainer: {
    paddingTop: 30,
    alignItems: 'center',
    marginBottom: 40,
    marginTop: 50,
    position: 'relative',
  },
  titleWrapper: {
    alignItems: 'center',
  },
  titleLine1: {
    fontWeight: 'bold',
    color: '#f0fff0',
    fontSize: 36,
    lineHeight: 40,
    letterSpacing: 2,
  },
  titleLine2: {
    fontWeight: 'bold',
    color: '#f0fff0',
    fontSize: 36,
  },
  underline: {
    width: '60%',
    height: 2,
    backgroundColor: '#f0fff0',
    marginTop: 5,
  },
  logoContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 40,
    alignItems: 'center',
    padding: 0,
    marginTop: 20,
    width: '100%', 
    height: 300,
  },
  logoImage: {
    width: 300,
    resizeMode: 'contain',
  },
  contentWrapper: {
    backgroundColor: '#808080',
    padding: 5,
    borderRadius: 50,
    alignItems: 'center',
    width: '100%',
    alignSelf: 'stretch',
    marginBottom: 20,
    height: 700,
  },
  validationMessage: {
    fontSize: 20,
    color: '#f0fff0',
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 10,
    width: '60%',
    paddingTop: 20,
  },
  hoursContainer: {
    backgroundColor: '#F5F5F5',
    padding: 15,
    borderRadius: 45,
    alignItems: 'center',
    marginBottom: 10,
    borderColor: '#53bd39',
    borderWidth: 3,
    width: '100%',
    height: 250,
  },
  hoursNumberContainer: {
    backgroundColor: '#53bd39',
    borderRadius: 4,
    paddingHorizontal: 70,
    borderColor: '#000',
    borderWidth: 1.5,
  },
  hoursText: {
    fontSize: 100,
    fontWeight: 'bold',
    color: '#000',
  },
  hoursLabelContainer: {
    alignItems: 'center',
    borderBottomWidth: 8,
    borderBottomColor: '#53bd39',
    paddingBottom: 1,
    marginTop: 5,
  },
  hoursLabel: {
    fontSize: 45,
    fontWeight: 'bold',
    color: '#000',
  },
  hoursLabelSubtext: {
    fontSize: 45,
    fontWeight: 'bold',
    color: '#000',
  },
  eventContainer: {
    backgroundColor: '#F5F5F5',
    padding: 20,
    borderRadius: 40,
    alignItems: 'center',
    borderColor: '#c1846d',
    borderWidth: 3,
    width: '100%',
  },
  eventName: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#000',
  },
  eventUnderlineContainer: {
    position: 'relative',
    alignItems: 'center',
    marginBottom: 10,
  },
  eventUnderline: {
    position: 'absolute',
    left: '-10%',
    right: '-10%',
    bottom: -2,
    height: 8,
    backgroundColor: '#c1846d',
  },
  eventStatusButton: {
    backgroundColor: '#c1846d',
    borderRadius: 9,
    padding: 10,
    marginTop: 25,
    width: '60%',
    alignItems: 'center',
    borderColor: '#000',
    borderWidth: 1.5,
  },
  eventStatusText: {
    color: '#000',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default ScholarshipHoursScreen;
