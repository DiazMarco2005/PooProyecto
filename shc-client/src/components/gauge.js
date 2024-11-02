import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

const Gauge = ({ percentage }) => {
    const radius = 80; // Radio del círculo
    const strokeWidth = 15; // Grosor del círculo
    const circumference = 2 * Math.PI * radius; // Circunferencia completa del círculo
    const fillLength = circumference * (percentage / 100); // Longitud del arco a llenar
    const center = radius + strokeWidth; // Centro del gráfico

    return (
        <View style={styles.container}>
            <Svg width={center * 2} height={center * 2}>
                {/* Fondo del círculo (gris) */}
                <Circle
                    cx={center}
                    cy={center}
                    r={radius}
                    stroke="#e0e0e0"
                    strokeWidth={strokeWidth}
                    fill="none"
                />
                {/* Arco de progreso */}
                <Circle
                    cx={center}
                    cy={center}
                    r={radius}
                    stroke="#4CAF50"
                    strokeWidth={strokeWidth}
                    fill="none"
                    strokeDasharray={`${fillLength}, ${circumference}`}
                    strokeLinecap="round"
                    rotation="-90"
                    origin={`${center}, ${center}`}
                />
            </Svg>
            {/* Texto para el porcentaje en el centro */}
            <View style={styles.textContainer}>
                <Text style={styles.percentageText}>{percentage}%</Text>
                <Text style={styles.completedText}>Completado</Text>
            </View>
        </View>
    );
};

export default Gauge;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    textContainer: {
        position: 'absolute',
        alignItems: 'center',
    },
    percentageText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#4CAF50',
    },
    completedText: {
        fontSize: 20,
        color: '#FFF',
        fontWeight:'bold',
    },
});
