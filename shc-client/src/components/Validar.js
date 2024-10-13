/* Hola mundo */
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

export default Validarhorasbeca;