import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { ProgressBar } from 'react-native-paper'; 

const ProfileStatistics =({
    name,
    description,
    progress,
    remainingBecaHours,
    activities,
}) => {
    return (
        <view style ={styles.container}>

            {/* profile section */}
      <View style={styles.profileSection}>
        <View style={styles.profileIcon} />
        <Text style={styles.profileName}>{name}</Text>
      </View>

      {/* section 'about me' */}
      <View style={styles.aboutSection}>
        <Text style={styles.label}>Sobre mí:</Text>
        <TextInput
          style={styles.aboutInput}
          placeholder="#####"
          value={description}
          multiline
          editable={false}
        />
      </View>

    {/* remaining hours */}
    <Text style={styles.remainingHours}>{remainingBecaHours} horas restantes</Text>

    {/* Recent Activities */}
    <View style={styles.activitiesSection}>
        <Text style={styles.activitiesTitle}>Últimas Actividades</Text>
        {activities.map((actividad, index) => (
          <View key={index} style={styles.activityItem}>
            <Text style={styles.activityName}>{actividad.nombre}</Text>
            <Text style={styles.activityHours}>{actividad.horas} horas</Text>
          </View>
        ))}
      </View>
      
    </view>
    );
};