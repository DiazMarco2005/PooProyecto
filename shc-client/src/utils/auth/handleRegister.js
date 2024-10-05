import axios from 'axios';
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
    ? 'http://localhost:8080/api/auth/register/student/'
    : 'http://localhost:8080/api/auth/register/coordinator/';

  const userData = index === 0
    ? { name, email, password, major, year: parseInt(year, 10) }
    : { name, email, password, position };

  console.log(registerUrl);
  console.log(`Index ${index}, Data ${userData}`)
  try {
    await axios.post(registerUrl, userData);
    Alert.alert('Registro exitoso', 'Cuenta creada con éxito');

    navigation();
  } catch (error) {
    Alert.alert('Error en el registro', 'No se pudo crear la cuenta');
  }
};

export default handleRegister;