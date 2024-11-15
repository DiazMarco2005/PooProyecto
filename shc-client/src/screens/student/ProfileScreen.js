import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Dimensions, StyleSheet, ScrollView, Text, View } from "react-native";
import EventButton from "../../components/buttons/eventButton.js";
import Gauge from "../../components/gauge.js";
import api from "./../../configs/api.js";
import { useRoute } from '@react-navigation/native';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  let { role = "Std", param_email = "" } = route.params || {};
  const [name, setName] = useState("");
  const [aboutme, setAboutme] = useState("");
  const [completeHours, setCompleteHours] = useState(0);
  const [hours, setHours] = useState(0);
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = await AsyncStorage.getItem("token");
        let email = await AsyncStorage.getItem("email");
        if (role === "Cord") {
          email = param_email;
        }
        const student = await api.get(`/api/students/email/${email}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const response = await api.get(
          `/api/activities/by/student/${student.data.id}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        setName(student.data.name);
        setAboutme(student.data.aboutMe);
        setCompleteHours(student.data.scholarshipHours);
        setHours(student.data.completedScholarshipHours);
        const filteredActivities = Object.values(response.data).filter(activity => !activity.complete);
        setActivities(filteredActivities);
      } catch (error) {
        console.log("Error al cargar datos:", error);
      }
    };

    fetchData();
  }, []);

  let percentage = parseInt((hours / completeHours) * 100);
  let hoursRemaining = parseInt(completeHours - hours);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.footerSubtext}>
          Estudiante
        </Text>
      </View>

      <View style={styles.aboutSection}>
        <Text style={styles.aboutTitle}>Sobre mí:</Text>
        <Text style={styles.aboutText}>{aboutme}</Text>
      </View>

      <View style={styles.progressSection}>
        <Text style={styles.hoursRemaining}>
          {hoursRemaining} horas restantes
        </Text>
        <Gauge percentage={percentage}></Gauge>
      </View>

      <View style={styles.activitiesSection}>
        <Text style={styles.activitiesTitle}>Últimas Actividades</Text>
        {activities && activities.length > 0 ? (
          activities.map((item) => (
            <View key={item.id} style={styles.activity}>
              <Text style={styles.activityName}>{item.name}</Text>
              <Text style={{ color:"white" }}>{item.date}</Text>
              <Text style={{ color:"white" }}>
                {item.startTime} - {item.endTime}
              </Text>
              <Text style={{ color:"white" }}>{item.location}</Text>
              <Text style={{ color:"white" }}>Coordinador: {item.coordinator}</Text>
              <EventButton
                text="Ver"
                handleButtonPres={() =>
                  navigation.navigate(role === "Cord" ? "ActivitiesCoord" : "Activities", { id: item.id })
                }
              />
            </View>
          ))
        ) : (
          <Text style={styles.noActivitiesText}>No hay actividades</Text>
        )}
      </View>

      <View style={styles.logOut}>
        {role === "Cord" ? null :
          <EventButton
            text="Cerrar sesión"
            handleButtonPres={async () => {
              try {
                await AsyncStorage.removeItem("token");
                navigation.navigate("Login");
              } catch (error) {
                console.error("Error al cerrar sesión:", error);
              }
            }}
          />
        }
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>UVG</Text>
        <Text style={styles.footerSubtext}>
          UNIVERSIDAD DEL VALLE DE GUATEMALA
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2C2C2C",
    padding: 20,
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#28eb30",
  },
  aboutSection: {
    backgroundColor: "#3A3A3A",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  aboutTitle: {
    fontWeight: "bold",
    color: "#28eb30",
    marginBottom: 5,
  },
  aboutText: {
    color: "#CCCCCC",
  },
  progressSection: {
    alignItems: "center",
    backgroundColor: "#3A3A3A",
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  hoursRemaining: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#28eb30",
    marginBottom: 10,
  },
  activitiesSection: {
    backgroundColor: "#3A3A3A",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  activitiesTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#28eb30",
    marginBottom: 10,
  },
  activity: {
    backgroundColor: "#4A4A4A",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  activityName: {
    fontSize: 16,
    color: "#28eb30",
    marginBottom: 5,
  },
  noActivitiesText: {
    color: "#CCCCCC",
    fontStyle: "italic",
    textAlign: "center",
    marginTop: 10,
  },
  logOut: {
    alignItems: "center",
    marginBottom: 20,
  },
  footer: {
    alignItems: "center",
    padding: 20,
  },
  footerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#28eb30",
  },
  footerSubtext: {
    fontSize: 12,
    color: "#CCCCCC",
  },
});

export default ProfileScreen;