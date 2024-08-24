import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import MyCalendar from "./components/calendar.js";

export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <MyCalendar start="10:30:00" duration="10:00" description="hola"></MyCalendar>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
