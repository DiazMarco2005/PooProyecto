import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

const AppHeader = ({ title, onMenuPress, menuIconName = 'menu', titleStyle, headerStyle }) => {
//El nombre del icono se le agrega despues este es momentaneo para ver como se ve
    return (
    <View style={[styles.header, headerStyle]}>
      <TouchableOpacity onPress={onMenuPress} style={styles.menuButton}>
        <Ionicons name={menuIconName} size={24} color="black" />
      </TouchableOpacity>
      <Text style={[styles.title, titleStyle]}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    height: 60,
    backgroundColor: '#f8f8f8',
    elevation: 2, // Adds a shadow for Android
    shadowColor: '#000', // Adds a shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  menuButton: {
    padding: 10,
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AppHeader;
