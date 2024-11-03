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
    { key: 'student', title: 'Student' },
    { key: 'coordinator', title: 'Coordinator' },
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
      <Text>O crea una cuenta
        <Link to={{ screen: 'Register', params: {} }}>
          aquí
        </Link>
      </Text>
    </View>
    </ImageBackground>
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
    height: '50%', 
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000',
    overflow: 'hidden',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  }
};

export default LoginScreen;
