import React, { useState } from 'react';
import { View, Text, ImageBackground} from 'react-native';
import { Link } from '@react-navigation/native';
import { TabView, TabBar } from 'react-native-tab-view';
import handleLogin from '../../utils/auth/handleLogin.js';
import StudentLogin from '../../components/auth/StudentLoginWindow.js';
import CoordinatorLogin from '../../components/auth/CoordinatorLoginWindow.js'

const LoginScreen = ({ navigation }) => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [index, setIndex] = useState(0);

  const routes = [
    { key: 'student', title: 'Estudiante' },
    { key: 'coordinator', title: 'Coordinador' },
  ];

  const image = {uri: 'https://res.cloudinary.com/uvggt/image/upload/f_auto/v1633478459/2021/Octubre/EDGE/CIT-EDGE-nota.jpg'};

  const handleLoginSuccess = () => {
    navigation.replace('DrawerNavigator');
  };
  const renderScene = ({ route }) => {

    let render = null;

    if (route.key === 'student') {
      render =  (
        <StudentLogin
          handleLogin={() => handleLogin(index, email, password, handleLoginSuccess)}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
        />
      );
    }

    if (route.key === 'coordinator') {
      render =  (
        <CoordinatorLogin
          handleLogin={() => handleLogin(index, email, password, handleLoginSuccess)}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
        />
      );
    }

    return render;
  };

  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          renderTabBar={(props) => {
            return (
            <TabBar
              {...props}
              indicatorStyle={{ backgroundColor: '#28eb30' }}
              style={{ backgroundColor: 'black' }}
              labelStyle={{ color: 'white', fontSize: 16, textTransform: 'capitalize', }}
              key={routes[index].key}
            />
          )}}
        />
      </View>
      <Text> Crea una cuenta {" "}
         <Link style={styles.link}to={{ screen: 'Register', params: {} }}>
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

export default LoginScreen;
