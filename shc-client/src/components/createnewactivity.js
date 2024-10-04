import React, {useState} from "react"
import {Text, View, Button, TextIntput, StyleSheet} from "react-native"

const NewEvent = ({
   date, 
   startTime, 
   endTime, 
   coordinator,
   description,
   maxParticipants,
   place,
   multiplier,
   publishedDate,
   department,
   publish
}) => {
    return (
        <View style = {styles.container}>
        {/* date */}
        <Text style = {styles.label}>Date:</Text>
        <TextInput
        style={styles.input}
        placeholder="dd/mm/AA"
        value={date}
        onChangeText={(value) => publish('Fecha', value)}
      />
        {/* startTime */}
        <Text style = {styles.label}>Start Time:</Text>
        <TextInput
        style={styles.input}
        placeholder="23:59"
        value={startTime}
        onChangeText={(value) => publish('Hora de inicio', value)}
      />
      {/* endTime */}
      <Text style = {styles.label}>end Time:</Text>
        <TextInput
        style={styles.input}
        placeholder="23:59"
        value={endTime}
        onChangeText={(value) => publish('Hora de finalizacion', value)}
      />
      {/* coordinator */}
      <Text style = {styles.label}>Coordinator:</Text>
        <TextInput
        style={styles.input}
        placeholder="######"
        value={coordinator}
        onChangeText={(value) => publish('Coordinador', value)}
      />
      {/* description */}
      <Text style = {styles.label}>Descripcion:</Text>
        <TextInput
        style={styles.input}
        placeholder="Descripcion breve de la actividad...."
        value={description}
        onChangeText={(value) => publish('Descripcion', value)}
      />
      {/* maxParticipants */}
      <Text style = {styles.label}>max maxParticipants:</Text>
        <TextInput
        style={styles.input}
        placeholder="#####"
        value={maxParticipants}
        onChangeText={(value) => publish('Maximo de personas', value)}
      />
      {/* place */}
      <Text style = {styles.label}>Place:</Text>
        <TextInput
        style={styles.input}
        placeholder="######"
        value={place}
        onChangeText={(value) => publish('Lugar', value)}
      />
      {/* multiplier */}
      <Text style = {styles.label}>multiplier:</Text>
        <TextInput
        style={styles.input}
        placeholder="9999"
        value={multiplier}
        onChangeText={(value) => publish('Coordinator', value)}
      />
      {/* published date */}
      <Text style = {styles.label}>publish Date:</Text>
        <TextInput
        style={styles.input}
        placeholder="dd/mm/AA"
        value={publishedDate}
        onChangeText={(value) => publish('Fecha a publicar', value)}
      />
      {/* department */}
      <Text style = {styles.label}>Department:</Text>
        <TextInput
        style={styles.input}
        placeholder="######"
        value={department}
        onChangeText={(value) => publish('Coordinator', value)}
      /> 
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

export default NewEvent;