import { View, Text, ScrollView } from "react-native-web";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import EventButton from "../../components/buttons/eventButton.js";
import api from "./../../configs/api.js";

const ProfileScreen = () => {
    const navigation = useNavigation();
    const [name, setName] = useState('');
    const [aboutme, setAboutme] = useState('');
    const [completeHours, setCompleteHours] = useState(0);
    const [hours, setHours] = useState(0);
    const [activities, setActivities] = useState([]);

    useEffect(()=>{
        const fetchData = async () => { // ds
            try {
                const token = await AsyncStorage.getItem('token');
                const email = await AsyncStorage.getItem('email');
                const student = await api.get(`/api/students/email/${email}`, {
                  headers: { Authorization: `Bearer ${token}` },
                });
                const response = await api.get(`/api/activities/by/student/${student.data.id}`, {
                  headers: { Authorization: `Bearer ${token}` },
                });

                setName(student.data.name);
                setAboutme(student.data.description);
                setCompleteHours(student.data.scholarshipHours);
                setHours(student.data.completedScholarshipHours);
                setActivities(response.data);
              } catch (error) {
                console.log('Error al cargar datos:', error);
            }
        }

        fetchData();
    }, []);

    return (
        <View>
            <Text>{name}</Text>
            <Text>{aboutme}</Text>
            <Text>{completeHours}</Text>
            <Text>{hours}</Text>
            <ScrollView>
                {
                    activities.map(item=>(
                        <View key={item.id}>
                            <Text>{item.name}</Text>
                            <Text>{item.date}</Text>
                            <Text>{item.startTime}-{item.endTime}</Text>
                            <Text>{item.location}</Text>
                            <Text>Coordinador: {item.coordinator}</Text>
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

export default ProfileScreen;