import { View, Text, ScrollView, StyleSheet } from "react-native-web";
import { useState, useEffect } from "react";
import api from "../../configs/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import EventButton from "./../../components/buttons/eventButton.js";
import { useNavigation } from "@react-navigation/native";

const HomeStudentScreen = () => {
  const navigation = useNavigation();
  const [items, setItems] = useState([]);
  const [currentUser, setCurrentUser] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = await AsyncStorage.getItem("token");
        const email = await AsyncStorage.getItem("email");
        const response = await api.get(`/api/activities/`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        const student = await api.get(`/api/students/email/${email}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const currentUserId = student.data.id; 
        setCurrentUser(currentUserId)
        setItems(Object.values(response.data).filter(item=>!item.complete && item.students.indexOf(currentUserId)===-1));
      } catch (error) {}
    };
    fetchData();
  }, []);

  const handleButtonPres = async (id) => {
    try {
      const token = await AsyncStorage.getItem("token");
      const response = await api.post(
        `/api/activities/${id}/addStudent/${currentUser}`,
        {
          headers: { Authorization: `Bearer ${token}` },
          data: {},
        }
      );
    } catch {
      console.log("user already regist on activity");
    }
  };

  const getEventBackgroundColor = (index) => {
    const colors = ["#C1846D", "#9F3617", "#9F3617"];
    return colors[index % colors.length];
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Actividades</Text>
        <View style={styles.horizontalLine} /> {/* Horizontal line */}
        {items.map((item, index) => (
          <View
            key={item.id}
            style={[
              styles.eventContainer,
              { backgroundColor: getEventBackgroundColor(index) },
            ]}
          >
            <View>
              <Text style={styles.eventTittle}>{item.name}</Text>
              <View style={styles.eventLine}></View>
              <Text style={styles.eventText}>{item.date}</Text>
              <Text style={styles.eventText}>
                {item.startTime}-{item.endTime}
              </Text>
              <Text style={styles.eventText}>{item.location}</Text>
              <Text style={styles.eventText}>
                Coordinador: {item.coordinator}
              </Text>
            </View>
            <View style={styles.bottonContainer}>
              <EventButton
                text={"Unirse"}
                color="#1E1E1E"
                handleButtonPres={() => handleButtonPres(item.id)}
              />
              <EventButton
                text={"Ver"}
                color="#1E1E1E"
                handleButtonPres={() =>
                  navigation.navigate("Activities", { id: item.id })
                }
              />
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: "#1E1E1E",
    alignItems: "center",
    paddingVertical: 20,
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#1E1E1E",
    minWidth: "50%",
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#FFFFFF",
    textAlign: "center",
  },
  horizontalLine: {
    height: 2,
    backgroundColor: "#FFF",
    alignSelf: "stretch",
    marginVertical: 10,
  },
  eventContainer: {
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minWidth: "30%",
  },
  eventTittle: {
    fontSize: 24,
    fontWeight: "bold",
    padding: 10,
    color: "#FFFFFF",
    textAlign: "center",
  },
  eventText: {
    fontSize: 16,
    marginVertical: 2,
    color: "#FFFFFF",
    textAlign: "center",
  },
  background: {
    backgroundColor: "#1E1E1E",
    alignItems: "center",
  },
  eventButton: {
    padding: 10,
    backgroundColor: "#1E1E1E",
    minWidth: "30%",
  },
  bottonContainer: {
    minWidth: "100%",
    alignItems: "center",
  },  eventLine: {
    height: 2,
    backgroundColor: "#000", // Black color for the line
    alignSelf: "stretch",
    marginVertical: 10,
  },
});

export default HomeStudentScreen;
