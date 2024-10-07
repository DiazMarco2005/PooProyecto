import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';

const EventCard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Evento 1</Text>
      <View style={styles.container1}>
        <Image style={styles.profileImage} source={{uri: 'https://example.com/profile.    jpg'}} />
    
        <View >
            <Text style={styles.profileName}>Marcela Castillo</Text>
            <Text style={styles.profileDate}>Publicado el 21-09-2024</Text>
          </View>

          <View sytle={styles.container}>
                  <View sytle={styles.container}>
          <View style={styles.line}>
              <View style={styles.sideBar}></View>
              <Text style={styles.text}>Fecha: dd/mm/AAAA</Text>
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Descripción:</Text>
            <TextInput
              style={[styles.input, styles.descriptionInput]}
              placeholder="Breve descripción del evento"
              multiline/>
          </View>

          <View style={styles.row}>
            <View style={styles.column}>
              <Text style={styles.label}>Lugar:</Text>
              <Text style={styles.value}>Nombre del lugar</Text>
            </View>
            <View style={styles.column}>
              <Text style={styles.label}>Horario:</Text>
              <Text style={styles.value}>12:00 p.m. - 01:00 p.m.</Text>
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.column}>
              <Text style={styles.label}>Multiplicador:</Text>
              <Text style={styles.value}>2</Text>
            </View>
            <View style={styles.column}>
              <Text style={styles.label}>Cupo Máximo:</Text>
              <Text style={styles.value}>4</Text>
            </View>
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Cupo Disponible:</Text>
            <Text style={styles.availableSlots}>2</Text>
          </View>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Unirme a la actividad</Text>
          </TouchableOpacity>
        </View>
          </View>


      </View>
          
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
    backgroundColor: '#888',
    padding: 10,
    borderRadius: 10,
    margin: 10,
  },

    container1: {
    backgroundColor: '#F5D3B3',
    padding: 9,
    borderRadius: 10,
    margin: 10,
    alignItems: 'right',
    marginBottom: 10,
  },

  line: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  
  sideBar: {
    width: 5,   
    height: 20, 
    backgroundColor: '#F5D3B3', 
    marginRight: 10, 
  },
  text: {
    fontSize: 16, // Tamaño del texto
    fontWeight: 'bold', // Negrita para el texto
  },


  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color:'#fff',
  },

  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },

  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  profileName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  profileDate: {
    fontSize: 12,
    color: '#888',
  },
  field: {
    marginBottom: 10,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
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
  },
  value: {
    fontSize: 14,
  },
  availableSlots: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#b22222',
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

export default EventCard;