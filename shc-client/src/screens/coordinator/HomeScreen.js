
import { View, Text, TextInput, StyleSheet } from "react-native";
import api from "../../configs/api";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from "react";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ProfileScreen from "../student/ProfileScreen";

const HomeCoordinatorScreen = () => {
    const navigation = useNavigation();
    const [searchText, setSearchText] = useState("");
    const [studentData, setStudentData] = useState(null);
    const [errorMessage, setErrorMessage] = useState("");

    const handleSearchChange = (text) => {
        setSearchText(text);
        setStudentData(null);  
        setErrorMessage(" ");    
    };

    const searchStudent = async () => {
        try {
            const token = await AsyncStorage.getItem('token');

            const response = await api.get(`/api/students/email/${searchText.trim()}`, {
                headers: { 
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
            });

            setStudentData(response.data);
            
            if (response.data==='') {
                setErrorMessage("El estudiante no existe."); 
                setStudentData(null);
            }
        } catch (error) {
            console.error("Error al buscar el estudiante:", error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Coordinador Home</Text>
            <TextInput
                style={styles.searchBar}
                placeholder="Buscar estudiante...."
                value={searchText}
                onSubmitEditing={searchStudent}
                onChangeText={handleSearchChange}
            />
            <Text style={styles.searchResult}>Buscando: {searchText}</Text>

            {studentData ? (
                <View style={styles.studentInfo}>
                    <Text style={styles.infoText}>Nombre: {studentData.name}</Text>
                    <Text style={styles.infoText}>Correo: {studentData.email}</Text>
                    <Text style={styles.infoText}>Carrera: {studentData.major}</Text>
                    <Text style={styles.infoText}>Año: {studentData.year}</Text>
                    <TouchableOpacity
                    onPress={() => navigation.navigate("Profile", {role: "Cord", param_email: studentData.email})}>
                        <Text> Ver </Text>

                    </TouchableOpacity>
                </View>
            ) : (
                
                <Text style={styles.errorMessage}>{errorMessage}</Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: "#2F4F4F",
        flex: 1,
    },
    title: {
        fontSize: 25,
        fontWeight: "bold",
        color: "#FFFFFF",
        marginBottom: 10,
    },
    searchBar: {
        height: 40,
        borderColor: "#98FB98",
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        marginBottom: 15,
        backgroundColor: "#2F4F4F",
        color: "#FFFFFF",
    },
    searchResult: {
        fontSize: 16,
        color: "#FFFFFF", 
    },
    studentInfo: {
        marginTop: 20,
        padding: 10,
        backgroundColor: "#3E8E41",
        borderRadius: 8,
    },
    infoText: {
        color: "#FFFFFF",
        fontSize: 16,
    },
    errorMessage: {
        color: "#FF6347",
        fontSize: 16,
        marginTop: 20,
    },
});

export default HomeCoordinatorScreen;
