import { View, Text } from "react-native-web";
import { useState, useEffect } from "react";
import api from "../../configs/api";
import AsyncStorage from "@react-native-async-storage/async-storage";

const HomeStudentScreen = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = await AsyncStorage.getItem('token');

                const response = await api.get(`/api/activities/`, {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setItems(response.data);

                // post /api/activities/{activityId}/addStudent/{studentId}
            } catch (error) {}
        };
      
        fetchData();
    }, []);

    return (
        <View>
            <Text>Actividades</Text>
            {
                items.map(item=>(
                    <View key={item.id}>
                        <Text>{item.name}</Text>
                        <Text>{item.date}</Text>
                        <Text>{item.startTime}-{item.endTime}</Text>
                        <Text>{item.location}</Text>
                        <Text>Coordinador: {item.coordinator}</Text>
                    </View>            
                ))
            }
        </View>
    )
}

export default HomeStudentScreen;