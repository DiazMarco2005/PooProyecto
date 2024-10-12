import api from '../../configs/api';
import { Alert } from 'react-native';

const handleRegister = async ({
  index, 
  name, 
  email, 
  password, 
  year, 
  major, 
  position, 
  navigation 
}) => {
  const registerUrl = index === 0
    ? '/api/auth/register/student/'
    : '/api/auth/register/coordinator/';

  const userData = index === 0
    ? { name, email, password, major, year: parseInt(year, 10) }
    : { name, email, password, position };


  try {
    await api.post(registerUrl, userData);
    navigation();
  } catch (error) {
    Alert.alert('Error en el registro', 'No se pudo crear la cuenta');
  }
};

export default handleRegister;