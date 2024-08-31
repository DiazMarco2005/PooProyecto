import React from "react";
import { StyleSheet, View } from "react-native";
import WeeklyCalendar from "react-native-weekly-calendar";
///Incorporacion de componente calendario falta css
const MyCalendar = ({start, duration, description}) => {
  const sampleEvents = [
    { start: start, duration: duration, note: description },
  ];

  return (
    <View style={styles.container}>
      <WeeklyCalendar
        events={sampleEvents}
        themeColor={"green"}
        style={{ height: 1000 }}
        titleStyle={{ color: "green" }}
        dayLabelStyle={{ color: "green" }}

      />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
    padding: 10,
    flex: 4,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default MyCalendar;
