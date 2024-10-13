import CampoTexto from "../../components/CampodeTexto";
import React, { useState, useEffect } from "react";
import { View, Button, StyleSheet, Text } from "react-native";

const NewActivityScreen = () => {
  const [date, setDate] = useState(" ");
  const [description, setDescription] = useState(" ");
  const [location, setLocation] = useState(" ");
  const [startTime, setStartTime] = useState(" ");
  const [endTime, setEndTime] = useState(" ");
  const [multiplier, setMultiplier] = useState(0);
  const [maxCapacity, setMaxCapacity] = useState(0);
  const [availableCapacity, setAvailableCapacity] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Evento 1</Text>

      <Text style={styles.subtitle}>Marcela Castillo</Text>
      <Text style={styles.date}>Publicado el {publishedDate}</Text>

      <CampoTexto
        label="Fecha"
        value={date}
        placeholder="dd/mm/AAAA"
        onChangeText={(value) => setDate(value)}
      />

      <CampoTexto
        label="Descripción"
        value={description}
        placeholder="Breve descripción del evento"
        onChangeText={(value) => setDescription(value)}
        multiline={true}
      />

      <CampoTexto
        label="Lugar"
        value={location}
        placeholder="Nombre del lugar"
        onChangeText={(value) => setLocation(value)}
      />

      <View style={styles.timeContainer}>
        <CampoTexto
          label="Horario"
          value={startTime}
          placeholder="12:00 p.m."
          onChangeText={(value) => setStartTime(value)}
          style={styles.timeInput}
        />
        <CampoTexto
          label=""
          value={endTime}
          placeholder="01:00 p.m."
          onChangeText={(value) => setEndTime(value)}
          style={styles.timeInput}
        />
      </View>

      <CampoTexto
        label="Multiplicador"
        value={multiplier.toString()}
        placeholder="2"
        keyboardType="numeric"
        onChangeText={(value) => setMultiplier(parseInt(value))}
      />

      <CampoTexto
        label="Cupo Máximo"
        value={maxCapacity.toString()}
        placeholder="4"
        keyboardType="numeric"
        onChangeText={(value) => setMaxCapacity(parseInt(value))}
      />

      <CampoTexto
        label="Cupo Disponible"
        value={availableCapacity.toString()}
        placeholder="2"
        keyboardType="numeric"
        onChangeText={(value) => setAvailableCapacity(parseInt(value))}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      padding: 10,
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
    },
    title: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 10,
    },
    subtitle: {
      fontSize: 18,
      marginBottom: 5,
    },
    date: {
      fontSize: 14,
      color: "gray",
      marginBottom: 10,
    },
    timeContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      width: "100%",
    },
    timeInput: {
      flex: 1,
      marginHorizontal: 5,
    },
    input: {
      backgroundColor: "#f0f0f0",
      borderRadius: 5,
      padding: 10,
      fontSize: 16,
      marginBottom: 15,
      width: "100%",
    },
    description: {
      height: 100,
      textAlignVertical: "top",
    },
  });

export default NewActivityScreen;