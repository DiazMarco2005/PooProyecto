import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Link } from '@react-navigation/native';
import { TabView, TabBar } from 'react-native-tab-view';
import handleRegister from '../../utils/auth/handleRegister.js';
import StudentRegister from '../../components/auth/StudentRegisterWindow.js'
import CoordinatorRegister from '../../components/auth/CoordinatorRegisterWindow.js'

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [major, setMajor] = useState('');
  const [year, setYear] = useState('');
  const [position, setPosition] = useState('');
  const [index, setIndex] = useState(0);

  const routes = [
    { key: 'student', title: 'Estudiante' },
    { key: 'coordinator', title: 'Coordinador' },
  ];

  const handleRegisterSuccess = () => {
    navigation.replace('Login');
  };

  const renderScene = ({ route }) => {
    if (route.key === 'student') {
      return (
        <StudentRegister
          handleRegister={() =>
            handleRegister(
              {
                index : index, 
                name : name, 
                email : email, 
                password : password, 
                year : year, 
                major : major, 
                navigation : handleRegisterSuccess
              })
          }
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          major={major}
          setMajor={setMajor}
          year={year}
          setYear={setYear}
        />
      );
    } else if (route.key === 'coordinator') {
      return (
        <CoordinatorRegister
          handleRegister={() =>
            handleRegister({
              index : index, 
              name : name, 
              email : email, 
              password : password, 
              position : position, 
              navigation : handleRegisterSuccess
            })
          }
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          position={position}
          setPosition={setPosition}
        />
      );
    }
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          renderTabBar={(props) => (
            <TabBar
              {...props}
              indicatorStyle={{ backgroundColor: 'green' }}
              style={{ backgroundColor: 'white' }}
              labelStyle={{ color: 'black', fontSize: 16, textTransform: 'capitalize' }}
            />
          )}
          />
      </View>
      <Text>O inicia sesión
        <Link to={{ screen: 'Login', params: {} }}>
          aquí
        </Link>
      </Text>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f3f3f3',
  },
  tabContainer: {
    width: '80%',
    height: '60%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000',
    overflow: 'hidden',
  },
};

export default RegisterScreen;
