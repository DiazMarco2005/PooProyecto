import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Agenda } from 'react-native-calendars';
import moment from 'moment';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../configs/api';

const CalendarScreenCoord = () => {
  const [items, setItems] = useState({});
  const [selectedDay, setSelectedDay] = useState('2024-11-09');

  useEffect(() => {
    const fetchData = async () => {
      let response;
      try {
        const token = await AsyncStorage.getItem('token');
        const email = await AsyncStorage.getItem('email');
        const coordinator = await api.get(`/api/coordinators/email/${email}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
  
        response = await api.get(`/api/activities/coordinator-name/${coordinator.data.name}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
  
        const newItems = { ...items };
        response.data.forEach(activity => {
          const dateKey = activity.date;
          if (!newItems[dateKey]) {
            newItems[dateKey] = [];
          }
  
          const activityItem = {
            name: activity.name,
            time: `${moment(activity.startTime, 'HH:mm:ss').format('hh:mm A')} - ${moment(activity.endTime, 'HH:mm:ss').format('hh:mm A')}`,
            type: activity.department,
            staff: activity.coordinator,
            description: activity.description,
          };
  
          newItems[dateKey].push(activityItem);
        });
  
        setItems(newItems);
  
      } catch (error) {
        console.log('Error al cargar datos:', error);
      }
    };
  
    fetchData();
  }, []);

  const moveToPreviousWeek = () => {
    const newDate = moment(selectedDay).subtract(7, 'days').format('YYYY-MM-DD');
    setSelectedDay(newDate);
  };

  const moveToNextWeek = () => {
    const newDate = moment(selectedDay).add(7, 'days').format('YYYY-MM-DD');
    setSelectedDay(newDate);
  };

  const loadItems = (day) => {
    const newItems = { ...items };
    if (!newItems[day.dateString]) {
      newItems[day.dateString] = [];
    }
    setItems(newItems);
    setSelectedDay(day.dateString);
  };

  const renderItem = (item) => {
    return (
      <View style={styles.itemContainer}>
        <Text style={styles.itemTime}>{item.time}</Text>
        <Text style={styles.itemTitle}>{item.name}</Text>
        <Text style={styles.itemDescription}>{item.type}</Text>
        <Text style={styles.itemStaff}>With {item.staff}</Text>
      </View>
    );
  };

  const renderEmptyDate = () => {
    return (
      <View style={styles.emptyDateContainer}>
        <Text style={styles.emptyDateText}>Sin actividades</Text>
      </View>
    );
  };

  const renderDayContent = () => {
    if (items[selectedDay] && items[selectedDay].length > 0) {
      return items[selectedDay].map((item, index) => (
        <View key={index}>
          {renderItem(item)}
        </View>
      ));
    } else {
      return renderEmptyDate();
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.floatingButtonLeft} onPress={moveToPreviousWeek}>
        <Icon name="arrow-back" size={25} color="white" />
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.floatingButtonRight} onPress={moveToNextWeek}>
        <Icon name="arrow-forward" size={25} color="white" />
      </TouchableOpacity>

      <Agenda
        items={items}
        loadItemsForMonth={loadItems}
        selected={selectedDay}
        renderItem={(item) => renderItem(item)}
        renderEmptyDate={() => renderEmptyDate()}
        onDayPress={(day) => loadItems(day)}
        hideKnob={true}
        showOnlySelectedDayItems={true}
        theme={{
          agendaDayTextColor: 'black',
          agendaDayNumColor: 'black',
          agendaTodayColor: '#00adf5',
          agendaKnobColor: '#00adf5',
        }}
      />
      
      <View style={styles.contentContainer}>
        {renderDayContent()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  floatingButtonLeft: {
    position: 'absolute',
    top: 240,
    left: 15,
    backgroundColor: '#00adf5',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  floatingButtonRight: {
    position: 'absolute',
    top: 240,
    right: 15,
    backgroundColor: '#00adf5',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  itemContainer: {
    backgroundColor: '#f0f4f7',
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
  },
  itemTime: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  itemDescription: {
    fontSize: 14,
    color: '#888',
  },
  itemStaff: {
    fontSize: 12,
    color: '#555',
  },
  emptyDateContainer: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyDateText: {
    fontSize: 16,
    color: '#888',
  },
  contentContainer: {
    flex: 1,
    padding: 10,
  },
});

export default CalendarScreenCoord;