import { View, Text, ScrollView } from "react-native-web";
import { useState, useEffect } from "react";
import api from "../../configs/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import EventButton from "./../../components/buttons/eventButton.js";
import { useNavigation } from '@react-navigation/native';

const HomeStudentScreen = () => {
    const navigation = useNavigation();
    const [items, setItems] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = await AsyncStorage.getItem('token');

                const response = await api.get(`/api/activities/`, {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setItems(response.data);
            } catch (error) {}
        };
      
        fetchData();
    }, []);

    const handleButtonPress = async (id) => {
        try {
            const token = await AsyncStorage.getItem('token');
            const email = await AsyncStorage.getItem('email');
            const student = await api.get(`/api/students/email/${email}`, {
              headers: { Authorization: `Bearer ${token}` },
            });

            const response = await api.post(`/api/activities/${id}/addStudent/${student.id}/`, {
                headers: { Authorization: `Bearer ${token}` },
                data:{}
            });

        } catch {
            console.log("user already regist on activity")
        }
    };

    return (
        <View>
            <Text>Actividades</Text>
            <ScrollView>
                {
                    items.map(item=>(
                        <View key={item.id}>
                            <Text>{item.name}</Text>
                            <Text>{item.date}</Text>
                            <Text>{item.startTime}-{item.endTime}</Text>
                            <Text>{item.location}</Text>
                            <Text>Coordinador: {item.coordinator}</Text>
                            <EventButton
                                text={"Unirse"}
                                handleButtonPres={()=>handleButtonPress(item.id)}
                            />
                            <EventButton
                                text={"Ver"}
                                handleButtonPres={()=>navigation.navigate('Activities', {id : item.id})}
                            />
                        </View>            
                    ))
                }
            </ScrollView>
        </View>
    )
}

export default HomeStudentScreen;