import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import EventButton from "./../../components//buttons/eventButton.js";
import api from "../../configs/api.js";
import { useRoute, useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ActivityScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { id } = route.params;
  const [editable, setEditable] = useState(false);
  const [title, setTitle] = useState("Nuevo evento");
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [description, setDescription] = useState("");
  const [maxCapacity, setMaxCapacity] = useState(0);
  const [coordinator, setCoordinator] = useState("");
  const [location, setLocation] = useState("");
  const [multiplier, setMultiplier] = useState(0);
  const [scholarshipHoursOffered, setScholarshipHoursOffered] = useState(0);
  const [department, setDepartment] = useState("");
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const updateFields = async () => {
      try {
        const token = await AsyncStorage.getItem("token");
        const response = await api.get(`/api/activities/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        setTitle(response.data.name);
        setStartTime(response.data.startTime);
        setEndTime(response.data.endTime);
        setMultiplier(response.data.multiplier);
        setScholarshipHoursOffered(response.data.scholarshipHoursOffered);
        setCoordinator(response.data.coordinator);
        setLocation(response.data.location);
        setMaxCapacity(response.data.maxCapacity);
        setDepartment(response.data.department);
        setDescription(response.data.description);
        setDate(response.data.date);
        setStudents(response.data.students);
      } catch {
        console.log("Error fetching activity data");
      }
    };

    updateFields();
  }, []);

  return (
    <ScrollView style={styles.screen}>
      <Text style={styles.title}>{title}</Text>

      <View style={styles.infoContainer}>
        <Text style={styles.subtitle}>Coordinador: {coordinator}</Text>
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Fecha</Text>
          <Text style={styles.value}>{date}</Text>
        </View>

        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Descripción</Text>
          <TextInput
            style={styles.descriptionInput}
            editable={editable}
            value={description}
            onChangeText={setDescription}
            multiline
            numberOfLines={4}
          />
        </View>

        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Lugar</Text>
          <Text style={styles.value}>{location}</Text>
        </View>

        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Horario</Text>
          <Text style={styles.value}>
            {startTime} - {endTime}
          </Text>
        </View>

        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Multiplicador</Text>
          <Text style={styles.value}>{multiplier}</Text>
        </View>

        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Cupo máximo</Text>
          <Text style={styles.value}>{maxCapacity}</Text>
        </View>

        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Horas beca ofrecidas</Text>
          <Text style={styles.value}>{scholarshipHoursOffered}</Text>
        </View>

        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Cupo Disponible</Text>
          <Text style={styles.value}>
            {students && students.length > 0
              ? maxCapacity - students.length
              : maxCapacity}
          </Text>
        </View>

        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Departamento</Text>
          <Text style={styles.value}>{department}</Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <EventButton
          text="Regresar"
          handleButtonPres={() => navigation.navigate("StudentHome")}
          style={styles.button}
        />
      </View>
    </ScrollView>
  );
};

export default ActivityScreen;

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#f0f0f0",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#28eb30",
    marginBottom: 16,
  },
  infoContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 4,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },
  fieldContainer: {
    marginBottom: 12,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#555",
  },
  value: {
    fontSize: 16,
    color: "#000",
  },
  descriptionInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 8,
    backgroundColor: "#f9f9f9",
    minHeight: 80,
    textAlignVertical: "top",
  },
  buttonContainer: {
    flexDirection: "column",
    alignItems: "stretch",
  },
  button: {
    marginBottom: 10,
  },
});