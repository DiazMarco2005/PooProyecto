import React, { useState } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { Link } from '@react-navigation/native';
import { TabView, TabBar } from 'react-native-tab-view';
import handleRegister from '../../utils/auth/handleRegister.js';
import StudentRegister from '../../components/auth/StudentRegisterWindow.js'
import CoordinatorRegister from '../../components/auth/CoordinatorRegisterWindow.js';

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [major, setMajor] = useState('');
  const [year, setYear] = useState('');
  const [position, setPosition] = useState('');
  const [index, setIndex] = useState(0);
  const image = {uri: 'https://res.cloudinary.com/uvggt/image/upload/f_auto/v1633478459/2021/Octubre/EDGE/CIT-EDGE-nota.jpg'};

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
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          renderTabBar={(props) => (
            <TabBar
              {...props}
              indicatorStyle={{ backgroundColor: '#28eb30' }}
              style={{ backgroundColor: 'black' }}
              labelStyle={{ color: 'white', fontSize: 16, textTransform: 'capitalize' }}
            />
          )}
          />
      </View>
      <Text>O inicia sesión {' '}
        <Link style={styles.link} to={{ screen: 'Login', params: {} }}>
          aquí
        </Link>
      </Text>
    </View>
    </ImageBackground>
  );
};

const styles = {
  link: {
    color: '#2196f3',
    textDecorationLine: 'underline',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(243, 243, 243, 0.8)',
    paddingHorizontal: 20,
  },
  tabContainer: {
    width: '90%', 
    height: '60%',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    overflow: 'hidden',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 6,
    backgroundColor:'black',
    color:'white'
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  tabBarStyle: {
    backgroundColor: '#white',
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  tabLabelStyle: {
    color: 'white',
    fontSize: 16,
    textTransform: 'capitalize',
    fontWeight: '600',
  },
  indicatorStyle: {
    backgroundColor: 'green',
  },
  text: {
    color: 'white',
    fontSize: 14,
    marginTop: 20,
    textAlign: 'center',
  },
};

export default RegisterScreen;
