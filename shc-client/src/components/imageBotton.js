import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Para obtener la navegación en el botón

const ImageButton = ({ title, id, backgroundImage, style, textStyle,  }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity 
      onPress={() => navigation.navigate('ActivitiesCoord', {id : id})} 
      style={[styles.button, style]}
    >
      <ImageBackground 
        source={backgroundImage} 
        style={styles.imageBackground} 
        imageStyle={styles.image}
      >
        <Text style={[styles.text, textStyle]}>{title}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    overflow: 'shown',
  },
  imageBackground: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  image: {
    borderRadius: 5,
  },
  text: {
    color: '#fff',
    fontSize: 16,
  },
});

export default ImageButton;
