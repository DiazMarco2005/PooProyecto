import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const EventInput = ({ label, value, onChangeText, placeholder, kbtype, labelPaddingHorizontal }) => {
  return (
    <View style={styles.container1}>
      <Text style={styles.label}>
        {label}
      </Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        keyboardType={kbtype ?? 'default'}
      />
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
    backgroundColor: '#AFD38B',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderColor: '#000',
    borderWidth: 1,
    whiteSpace: 'nowrap', 
  },
  input: {
    borderWidth: 1,
    borderColor: '#000',
    paddingVertical: 9.5,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    fontSize: 20,
 // Permite que el input use el espacio restante
  },
});

export default EventInput;