// TestScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageButton from '../../components/imageBotton';
import EventButton from '../../components/eventBotton';

const TestScreen = ({ navigation }) => {
    const navigateToProfile = () => {
        navigation.navigate('Profile'); // Adjust the route as necessary
      }
    return ( 
    <View style={styles.container}>
        <EventButton text="Hola" color="#C1846D" onPress={navigateToProfile}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
});

export default TestScreen;
