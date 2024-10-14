import React from react;
import { View, Text, Image } from "react-native";

const NewActivityScreen = () => {
  return (
    <View style={styles.container}>
      {/* Título principal */}
      <Text style={styles.mainTitle}>Valida tus horas beca</Text>

      {/* Subtítulo */}
      <Text style={styles.subtitle}>Escanea el código QR que te proporcione tu encargado</Text>

      {/* Imagen de ejemplo del código QR */}
      <View style={styles.qrContainer}>
        <Image
          source={{ uri: 'https://via.placeholder.com/250' }} // Aquí va el QR dinámico
          style={styles.qrCode}
        />
      </View>

      {/* Logo UVG */}
      <View style={styles.logoContainer}>
        <Image
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/e/ef/Logo-uvg-horizontal.jpg' }} // Logo UVG
          style={styles.logo}
        />
      </View>
    </View>
  );
};
  
  export default NewActivityScreen;
