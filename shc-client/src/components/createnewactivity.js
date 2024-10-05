import React, {useState} from "react"
import {Text, View, Button, TextIntput, StyleSheet} from "react-native"

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

      {/* Botón para publicar el evento */}
      <Button title="Publicar" onPress={() => onPublicar('submit')} color="#4CAF50" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 4,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
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
  description: {
    height: 100,
    textAlignVertical: 'top',
  },
});

export default newEvent;