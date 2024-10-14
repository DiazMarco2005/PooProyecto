import React from "react";
import { StyleSheet, View, Image } from "react-native";
import WeeklyCalendar from "react-native-weekly-calendar";

const MyCalendar = ({ start, duration, description }) => {
  const sampleEvents = [
    { start: start, duration: duration, note: description },
  ];

  return (
    <View style={styles.container}>
      {/* Calendario semanal */}
      <WeeklyCalendar
        events={sampleEvents}
        themeColor={"green"}
        style={{ height: 1000 }}
        titleStyle={{ color: "green" }}
        dayLabelStyle={{ color: "green" }}
      />

      {/* Logo UVG */}
      <Image
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Logo-uvg-horizontal.jpg",
        }}
        style={styles.logo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1, 
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between", 
  },
  logo: {
    width: 200,
    height: 60,
    resizeMode: "contain",
  },
});

export default MyCalendar;

