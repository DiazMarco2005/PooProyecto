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

export default CampoTexto;