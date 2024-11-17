import React, { useState, useEffect, useRef, useCallback } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ExpandableCalendar, AgendaList, CalendarProvider, WeekCalendar } from 'react-native-calendars';
import moment from 'moment';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../configs/api';

const CalendarScreen = ({ weekView = false }) => {

  const [items, setItems] = useState([]);
  const marked = useRef({});
  const today = moment().format('YYYY-MM-DD');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        const email = await AsyncStorage.getItem('email');
        const student = await api.get(`/api/students/email/${email}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const response = await api.get(`/api/activities/by/student/${student.data.id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
  
        const formattedItems = Object.values(response.data).filter(activity=>!activity.complete).reduce((acc, activity) => {
          const dateKey = activity.date;
          const activityItem = {
            name: activity.name,
            date: activity.date,
            time: `${moment(activity.startTime, 'HH:mm:ss').format('hh:mm A')} - ${moment(activity.endTime, 'HH:mm:ss').format('hh:mm A')}`,
            location: activity.location,
            type: activity.department,
            staff: activity.coordinator,
            description: activity.description,
            scholarshipHours: activity.scholarshipHoursOffered,
            maxCapacity: activity.maxCapacity,
          };
          console.log(dateKey)
          const existingDate = acc.find((section) => section.title === dateKey);
          if (existingDate) {
            existingDate.data.push(activityItem);
          } else {
            acc.push({ title: dateKey, data: [activityItem] });
          }

          marked.current[dateKey] = { marked: true };
          return acc;
        }, []);
        setItems(formattedItems);
      } catch (error) {
        console.log('Error al cargar datos:', error);
      }
        
    };
    
  
    fetchData();
  }, []);

  const renderItem = useCallback(({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemTitle}>{item.name}</Text>
      <Text style={styles.itemTime}>{item.date}</Text>
      <Text style={styles.itemTime}>{item.time}</Text>
      <Text style={styles.itemLocation}>Location: {item.location}</Text>
      <Text style={styles.itemDepartment}>Department: {item.type}</Text>
      <Text style={styles.itemStaff}>Coordinator: {item.staff}</Text>
      <Text style={styles.itemScholarshipHours}>Scholarship Hours: {item.scholarshipHours}</Text>
      <Text style={styles.itemCapacity}>Max Capacity: {item.maxCapacity}</Text>
      {item.description ? <Text style={styles.itemDescription}>{item.description}</Text> : null}
    </View>
  ), []);

  const renderSectionHeader = ({ section }) => {
    if (!section || !section.title) {
      return null;
    }
  
    return (
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionHeaderText}>{moment(section.title).format('dddd, MMMM Do')}</Text>
      </View>
    );
  };
  

  return (
    <CalendarProvider
      date={items.length > 0 && items[0].title ? items[0].title : today}
      showTodayButton
      theme={{ todayButtonTextColor: '#000'}}
    >
      <WeekCalendar firstDay={1} markedDates={marked.current} />
      <AgendaList
        sections={items}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        sectionStyle={styles.section}
      />
    </CalendarProvider>
  );
};

export default CalendarScreen;

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: '#2c2c2c',
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
    borderColor: '#28eb30',
    borderWidth: 1,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#28eb30',
  },
  itemTime: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#e0e0e0',
  },
  itemLocation: {
    fontSize: 14,
    color: '#a5a5a5',
  },
  itemDepartment: {
    fontSize: 14,
    color: '#a5a5a5',
  },
  itemStaff: {
    fontSize: 12,
    color: '#a5a5a5',
  },
  itemScholarshipHours: {
    fontSize: 12,
    color: '#a5a5a5',
  },
  itemCapacity: {
    fontSize: 12,
    color: '#a5a5a5',
  },
  itemDescription: {
    fontSize: 14,
    color: '#a5a5a5',
  },
  sectionHeader: {
    backgroundColor: '#1f1f1f',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#28eb30',
  },
  sectionHeaderText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#28eb30',
  },
  section: {
    backgroundColor: '#1f1f1f',
    color: '#28eb30',
    textTransform: 'capitalize',
  },
});