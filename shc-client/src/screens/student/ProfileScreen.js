import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Dimensions, StyleSheet, TouchableOpacity } from "react-native";
import { ImageBackground, ScrollView, Text, View } from "react-native-web";
import EventButton from "../../components/buttons/eventButton.js";
import Gauge from "../../components/gauge.js";
import api from "./../../configs/api.js";

const ProfileScreen = () => {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [aboutme, setAboutme] = useState("");
  const [completeHours, setCompleteHours] = useState(0);
  const [hours, setHours] = useState(0);
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = await AsyncStorage.getItem("token");
        const email = await AsyncStorage.getItem("email");
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
        setAboutme(student.data.description);
        setCompleteHours(student.data.scholarshipHours);
        setHours(student.data.completedScholarshipHours);
        setActivities(response.data);
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
        <ImageBackground
          resizeMode="cover"
          source={require("../../assets/images/placeholder.png")}
          style={styles.profileImage}
        />
        <Text style={styles.name}>{name}</Text>
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
              <Text style={styles.activityHours}>{item.duration} horas</Text>
              <Text>{item.date}</Text>
              <Text>
                {item.startTime} - {item.endTime}
              </Text>
              <Text>{item.location}</Text>
              <Text>Coordinador: {item.coordinator}</Text>
              <EventButton
                text="Ver"
                handleButtonPress={() =>
                  navigation.navigate("Activities", { id: item.id })
                }
              />
            </View>
          ))
        ) : (
          <Text style={styles.noActivitiesText}>No hay actividades</Text>
        )}
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
const screenWidth = Dimensions.get("window").width;
const minSize = 90;
const imageSize = Math.min(Math.max(screenWidth * 0.3, minSize), 200);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#",
    padding: 20,
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
  },
  profileImage: {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
    backgroundColor: "#D0D0D0",
  },

  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333333",
  },
  aboutSection: {
    backgroundColor: "#E0E0E0",
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  aboutTitle: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  aboutText: {
    color: "#666666",
  },
  progressSection: {
    alignItems: "center",
    backgroundColor: "#333333",
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  progressText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#4CAF50",
  },
  hoursRemaining: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000000",
    marginTop: 10,
  },
  activitiesSection: {
    backgroundColor: "#333333",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  activitiesTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 10,
  },
  activity: {
    backgroundColor: "#A3C585",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  activityName: {
    fontSize: 16,
    color: "#333333",
  },
  activityHours: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333333",
  },
  footer: {
    alignItems: "center",
    padding: 20,
  },
  footerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#4CAF50",
  },
  footerSubtext: {
    fontSize: 12,
    color: "#333333",
  },
  noActivitiesText: {
    color: "#666666",
    fontStyle: "italic",
    textAlign: "center",
    marginTop: 10,
  },
});
export default ProfileScreen;
