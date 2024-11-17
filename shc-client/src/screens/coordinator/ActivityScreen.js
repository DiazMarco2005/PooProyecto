import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import EventInput from "../../components/eventComponent.js";
import EventButton from "../../components/buttons/eventButton.js";
import api from "../../configs/api.js";
import { useRoute, useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ActivityScreenCoord = () => {
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
  const [complete, setComplete] = useState(false);
  const [students, setStudents] = useState([]);

  const handleButtonPress = async () => {
    if (!validateFields()) {
      return; // Si la validación falla, no continuar con el guardado
    }

    try {
      const token = await AsyncStorage.getItem("token");
      await api.put(
        `/api/activities/${id}`,
        {
          name: title,
          startTime,
          endTime,
          multiplier,
          scholarshipHoursOffered,
          coordinator,
          location,
          maxCapacity,
          department,
          description,
          date,
          complete,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      navigation.navigate("ProfileCoord");
    } catch (error) {
      console.error(error);
    }
  };

  const handleCompleteButton = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      await api.get(`/api/activities/${id}/complete/`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      navigation.navigate("ProfileCoord");
    } catch (error) {
      console.error(error);
    }
  };

  const updateFields = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      const response = await api.get(`/api/activities/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      setStudents(
        await Promise.all(
          response.data.students?.map(async (student_id) => {
            let student_response = await api.get(
              `/api/students/${student_id}`,
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                  "Content-Type": "application/json",
                },
              }
            );
            return student_response.data;
          }) ?? []
        )
      );

      setTitle(response.data.name);
      setStartTime(response.data.startTime);
      setEndTime(response.data.endTime);
      setMultiplier(response.data.multiplier);
      setScholarshipHoursOffered(response.data.scholarshipHoursOffered);
      setCoordinator(response.data.coordinator);
      setLocation(response.data.location);
      setMaxCapacity(response.data.maxCapacity);
      setDepartment(response.data.department);
      setDate(response.data.date);
      setComplete(response.data.complete);
      setDescription(response.data.description);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    updateFields();
  }, []);

  const validateFields = () => {
    if (!title || !date || !startTime || !endTime || !description || !maxCapacity || !location || !multiplier || !scholarshipHoursOffered || !department) {
      Alert.alert('Error', 'Todos los campos son obligatorios.');
      return false;
    }

    if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
      Alert.alert('Error', 'La fecha debe tener el formato AAAA-MM-DD.');
      return false;
    }

    if (isNaN(maxCapacity) || maxCapacity <= 0) {
      Alert.alert('Error', 'El cupo máximo debe ser un número positivo.');
      return false;
    }

    if (isNaN(scholarshipHoursOffered) || scholarshipHoursOffered <= 0) {
      Alert.alert('Error', 'Las horas de beca ofrecidas deben ser un número positivo.');
      return false;
    }

    if (isNaN(multiplier) || multiplier <= 0) {
      Alert.alert('Error', 'El multiplicador debe ser un número positivo.');
      return false;
    }

    return true;
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TextInput
        style={styles.title}
        value={title}
        onChangeText={setTitle}
        placeholder="Editar título"
        editable={editable}
      />

      <View style={styles.formSection}>
        <EventInput label="Fecha" value={date} onChangeText={setDate} editable={editable} />
        <EventInput label="Hora de inicio" value={startTime} onChangeText={setStartTime} editable={editable} />
        <EventInput label="Hora de finalización" value={endTime} onChangeText={setEndTime} editable={editable} />
      </View>

      <View style={styles.formSection}>
        <Text style={styles.label}>Descripción</Text>
        <TextInput
          style={styles.textArea}
          value={description}
          onChangeText={setDescription}
          multiline={true}
          editable={editable}
        />
      </View>

      <View style={styles.formSection}>
        <EventInput label="Cupo máximo" value={maxCapacity} onChangeText={setMaxCapacity} kbtype="numeric" editable={editable} />
        <EventInput label="Horas beca ofrecidas" value={scholarshipHoursOffered} onChangeText={setScholarshipHoursOffered} kbtype="numeric" editable={editable} />
        <EventInput label="Lugar" value={location} onChangeText={setLocation} editable={editable} />
        <EventInput label="Multiplicador" value={multiplier} onChangeText={setMultiplier} kbtype="numeric" editable={editable} />
        <EventInput label="Departamento" value={department} onChangeText={setDepartment} editable={editable} />
        <EventButton text={"Marcar como completado"} handleButtonPres={editable ? handleCompleteButton : () => {}} />
      </View>

      <View style={styles.studentList}>
        <Text style={styles.label}>Estudiantes agregados:</Text>
        {students.length > 0 ? (
          students.map((student) => (
            <TouchableOpacity
              key={student.id}
              onPress={() => navigation.navigate("Profile", { role: "Cord", param_email: student.email })}
              style={styles.studentItem}
            >
              <Text>{student.name}</Text>
            </TouchableOpacity>
          ))
        ) : (
          <Text style={styles.noStudentsText}>No hay más estudiantes</Text>
        )}
      </View>

      <View style={styles.buttonContainer}>
        <EventButton text="Editar" handleButtonPres={() => setEditable(!editable)} style={styles.button} />
        <EventButton text="Guardar" handleButtonPres={handleButtonPress} style={styles.button} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#F7F7F7",
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 20,
    borderBottomWidth: 1,
    borderColor: "#E0E0E0",
    padding: 5,
    width: "100%",
  },
  formSection: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 10,
  },
  textArea: {
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 8,
    padding: 10,
    backgroundColor: "#FFF",
    minHeight: 100,
    fontSize: 16,
    marginBottom: 20,
    width: "100%",
  },
  input: {
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 8,
    padding: 10,
    backgroundColor: "#FFF",
    fontSize: 16,
    marginBottom: 10,
    width: "100%",
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  studentList: {
    marginBottom: 20,
  },
  studentItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#E0E0E0",
  },
  noStudentsText: {
    fontSize: 16,
    color: "#888",
  },
  buttonContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
  },
  button: {
    width: "48%",
  },
});

export default ActivityScreenCoord;