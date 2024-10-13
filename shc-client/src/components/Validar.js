
import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const Validarhorasbeca = () => {
  return (
    <View style={styles.container}>
      {/* Título principal */}
      <Text style={styles.title}>Validación de horas beca</Text>

      {/* Contenedor del evento */}
      <View style={styles.eventContainer}>
        <Text style={styles.eventTitle}>Evento 1</Text>

        {/* Contenedor del QR */}
        <View style={styles.qrPlaceholder}>
          <Image
            source={{ uri: "https://i.imgur.com/5qr3BQZ.png" }} 
            style={styles.qrImage}
          />
        </View>
      </View>

      {/* Logo UVG */}
      <Image
        source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Logo-uvg-horizontal.jpg" }}
        style={styles.logo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1d1d1d", 
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 40,
  },
  eventContainer: {
    backgroundColor: "#333",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    marginVertical: 20,
  },
  eventTitle: {
    backgroundColor: "#c6a18f", 
    padding: 10,
    borderRadius: 5,
    color: "#1d1d1d", 
    fontWeight: "bold",
    marginBottom: 20,
  },
  qrPlaceholder: {
    width: 200,
    height: 200,
    backgroundColor: "#666", 
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  qrImage: {
    width: 180,
    height: 180, 
  },
  logo: {
    width: 150,
    height: 50,
    marginBottom: 10,
  },
});
export default Validarhorasbeca;