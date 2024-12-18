import React, { useState } from "react";
import { Text, View, Button, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";  

const CampoTexto = ({ label, value, placeholder, onChangeText, multiline = false, keyboardType = "default" }) => {
  return (
    <View style={styles.fieldContainer}>
      <Text style={styles.label}>{label}:</Text>
      <TextInput
        style={[styles.input, multiline && styles.multiline]}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        multiline={multiline}
        keyboardType={keyboardType}
      />
    </View>
    
  );
};

const NuevoEvento = ({
  fecha,
  horaInicio,
  horaFin,
  encargado,
  descripcion,
  cupoMaximo,
  lugar,
  multiplicador,
  fechaPublicacion,
  departamento,
  onPublicar
}) => {

  return (
    <View style={styles.container}>
      {/* Logo UVG */}
      <View style={styles.logoContainer}>
        <Image
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/e/ef/Logo-uvg-horizontal.jpg' }} // Logo de UVG
          style={styles.logo}
        />
      </View>

      {/* Reutilización del componente CampoTexto para cada campo */}
      <CampoTexto
        label="Fecha"
        value={fecha}
        placeholder="dd/mm/AA"
        onChangeText={(value) => onPublicar('fecha', value)}
      />
      <CampoTexto
        label="Hora de inicio"
        value={horaInicio}
        placeholder="23:59"
        onChangeText={(value) => onPublicar('horaInicio', value)}
      />
      <CampoTexto
        label="Hora de finalización"
        value={horaFin}
        placeholder="23:59"
        onChangeText={(value) => onPublicar('horaFin', value)}
      />
      <CampoTexto
        label="Encargado"
        value={encargado}
        placeholder="Nombre del Encargado"
        onChangeText={(value) => onPublicar('encargado', value)}
      />
      <CampoTexto
        label="Descripción"
        value={descripcion}
        placeholder="Descripción breve..."
        onChangeText={(value) => onPublicar('descripcion', value)}
        multiline={true} 
      />
      <CampoTexto
        label="Cupo máximo"
        value={cupoMaximo}
        placeholder="####"
        keyboardType="numeric" 
        onChangeText={(value) => onPublicar('cupoMaximo', value)}
      />
      <CampoTexto
        label="Lugar"
        value={lugar}
        placeholder="CIT-350"
        onChangeText={(value) => onPublicar('lugar', value)}
      />
      <CampoTexto
        label="Multiplicador"
        value={multiplicador}
        placeholder="99999"
        keyboardType="numeric" 
        onChangeText={(value) => onPublicar('multiplicador', value)}
      />
      <CampoTexto
        label="Fecha de publicación"
        value={fechaPublicacion}
        placeholder="dd/mm/yyyy"
        onChangeText={(value) => onPublicar('fechaPublicacion', value)}
      />
      <CampoTexto
        label="Departamento"
        value={departamento}
        placeholder="Departamento"
        onChangeText={(value) => onPublicar('departamento', value)}
      />

      {/* Botones de Guardar y Cancelar */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.saveButton]} onPress={() => onPublicar('guardar')}>
          <FontAwesome name="floppy-o" size={24} color="white" />
          <Text style={styles.buttonText}>Guardar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.cancelButton]} onPress={() => onPublicar('cancelar')}>
          <FontAwesome name="trash-o" size={24} color="white" />
          <Text style={styles.buttonText}>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Estilos actualizados
const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "flex-start",
  },
  label: {
    color: '#4CAF50',
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#dcedc8',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    marginBottom: 15,
    width: '100%',
  },
  multiline: {
    height: 100,
    textAlignVertical: 'top',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    width: '40%',
    justifyContent: 'center',
  },
  saveButton: {
    backgroundColor: '#4CAF50',
  },
  cancelButton: {
    backgroundColor: '#f44336',
  },
  buttonText: {
    color: 'white',
    marginLeft: 10,
    fontSize: 16,
  },
  logo: {
    width: 150,
    height: 50,
    marginBottom: 10,
  },
});

export default NuevoEvento;
