import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const EventButton = ({ text, handleButtonPres, color }) => {
    return (
        <TouchableOpacity
            style={[styles.button, { backgroundColor: color || '#2E4C12' }]}
            onPress={handleButtonPres}
        >
            <Text style={styles.text}>
                {text}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
      padding: 10,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 4,
      margin: "auto",
      marginBottom:10,
      maxWidth: '90%',
      minWidth: '70%',
    },
    text: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
      textShadowColor: '#000',
      textShadowOffset: { width: 1, height: 1 },
      textShadowRadius: 5,
    },
});

export default EventButton;
