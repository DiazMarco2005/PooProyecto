// Botones para editar y eliminar en el modo de edicion
import React from 'react';
import { View, StyleSheet } from 'react-native';
import EventButton from './CustomButton';

const EventButtons = ({ onEditPress, onDeletePress, isEditing }) => {
  return (
    <View style={styles.container}>      
      <EventButton
        text={isEditing ? "Guardar" : "Editar"}
        color="#4CAF50" 
        onPress={onEditPress}
      />
      <EventButton
        text="Delete"
        color="#F44336" 
        onPress={onDeletePress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
});

export default EventButtons;