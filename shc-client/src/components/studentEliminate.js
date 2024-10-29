import React from 'react';
import { View, Text, Button, ScrollView, StyleSheet } from 'react-native';

const StudentEliminate = ({ label, handlePress}) => {
  return (
    <View style={styles.container1}>
    <ScrollView horizontal={true} style={styles.scrollLabel}>
        <Text style={styles.label}>
          {label}
        </Text>
      </ScrollView>
      <View style={styles.button}>
      <Button
        title={"X"}
        color='#A40E0E'
        onPress={handlePress}
      />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container1: {
    flexDirection: 'row',
    alignItems: 'flex-start', // Alineación de inicio
    marginBottom: 5,
  },
  label: {
    fontSize: 20,
    color: '#000',
    backgroundColor: '#FFF',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderColor: '#000',
    borderWidth: 1,
    whiteSpace: 'nowrap', 
  },
  button: {
    borderWidth: 1,
    borderColor: '#000',
    paddingVertical: 6,
    paddingHorizontal: 5,
    backgroundColor: '#A40E0E',
    fontSize: 20,
 // Permite que el input use el espacio restante
  },
});

export default StudentEliminate;