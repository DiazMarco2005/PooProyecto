
import { View, Text, TextInput, Stylesheet } from "react-native-web";
import api from "../../configs/api"; 
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useState, useEffect } from "react";

const HomeCoordinatorScreen = () => {
    const [searchText, setsearchText] = useState(" ");
 
    const handleSearchChange = (text) => {
        setsearchText(text);
            console.log("Busqueda: ", text);
    };
    

    const searchStudent = async () => {
        try {
            const token = await AsyncStorage.getItem('token');
            
            console.log (searchText)
            const response = await api.get(`/api/students/email/${searchText.replace(" ", "")}`, {
                headers: { 
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
            }
        );
        
        console.log(response.data)
        } catch {}
    }

    return (
        <View style={Style.container}>
            <Text style={Style.title}>Coordinador Home</Text>
            <TextInput
            style={Style.searchBar}
            placeholder="Buscar estudiante...."
            value={searchText}
            onSubmitEditing= {searchStudent}
            onChangeText={handleSearchChange}
            />  
            <Text style={Style.searchResult}>Buscando: {searchText}</Text>
        </View>
    );
};

const Style = {
    container: {
        padding: 20,
        backgroundColor: "#2F4F4F",
        flex: 1,
    },
    title: {
        fontSize: 25,
        fontweight: "bold",
        color: "#FFFFFF",
        marginBottom: 10,
    },
    searchBar: {
        height: 40,
        borderColor: "#98FB98",
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        marginBotton: 15,
        backgroundcolor: "#2F4F4F",
        color: "FFFFFF",
    }, 
    searchResult: {
        fontsize: 16,
        color: "#FFFFFF", 
    }
};

export default HomeCoordinatorScreen;