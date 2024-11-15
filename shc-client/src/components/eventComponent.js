import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const EventInput = ({ label, value, onChangeText, placeholder, kbtype, editable, date }) => {
  const formatTime = (time) => {
    let parts = time.split(':');
    if (parts.length === 2) {
      return `${parts[0].padStart(2, '0')}:${parts[1].padStart(2, '0')}:00`;
    }
    if (parts.length === 3) {
      return `${parts[0].padStart(2, '0')}:${parts[1].padStart(2, '0')}:${parts[2].padStart(2, '0')}`;
    }
    return '';
  };
  
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        keyboardType={kbtype ?? 'default'}
        editable={editable ?? true}
        onSubmitEditing={() => {
          if (date){
            const formattedTime = formatTime(value);
            if (formattedTime) {
              onChangeText(formattedTime);
            }
          }
        }}
        onBlur={() => {
          if (date){
            const formattedTime = formatTime(value);
            if (formattedTime) {
              onChangeText(formattedTime);
            }
          }
        }}
      />
      <Text style={styles.label}>
        {label}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    borderRadius: 8,
    overflow: 'hidden',
    borderColor: '#3E7C17',
    borderWidth: 2,
  },
  label: {
    fontSize: 14,
    color: '#3E7C17',
    backgroundColor: '#E5F4D6',
    textAlign: 'center',
    paddingVertical: 4,
  },
  input: {
    borderWidth: 0,
    paddingVertical: 12,
    paddingHorizontal: 15,
    backgroundColor: '#FFFFFF',
    fontSize: 16,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
});

export default EventInput;
