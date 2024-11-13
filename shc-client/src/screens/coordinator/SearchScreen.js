import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
//Estado que maneja el texto de búsqueda:
const SearchScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [recentItems, setRecentItems] = useState([
    'Name 1 com',
    'Name 2 com',
    'Name 3 com',
  ]);

   // Función para manejar el cambio en el campo de búsqueda:
  const handleSearch = (text) => {
    setSearchText(text);
  };

 // Función para manejar la selección de un ítem reciente:
  const handleRecentPress = (item) => {
    setSearchText(item);// Actualiza el texto de búsqueda con el ítem seleccionado
  };

  return (
    <View style={styles.container}>
      {/* Barra de Búsqueda */}
      <View style={styles.searchContainer}>
        <Image
          source={require('./assets/ActImagen2.png')} // Imagen en la parte de la barra de búsqueda
          style={styles.searchImage}
        />
        <TextInput
                     style={[styles.searchInput, { fontSize: 40, fontWeight: 'bold' }]}
          placeholder="Nombre..."
          placeholderTextColor="#000"
          value={searchText}//Muestra el texto de búsqueda en el campo.
          onChangeText={handleSearch}//Llama a handleSearch al escribir.
        />
      </View>

      {/* Título de Recientes */}
      <Text style={styles.recentsTitle}>Recientes:</Text>

      {/* Lista de Recientes */}
      <View style={styles.recentsContainer}>
        {recentItems.map((item, index) => (
          <TouchableOpacity
            key={index}//Clave única para cada ítem.
            style={styles.recentItem}
            onPress={() => handleRecentPress(item)}
          >
            <Text style={styles.recentText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Logo UVG */}
      <View style={styles.footer}>
        <Text style={styles.logoText}>UVG</Text>
        <Text style={styles.logoSubText}>Universidad del Valle de Guatemala</Text>
      </View>
    </View>
  );
};

//Estilos de los componentes
const styles = StyleSheet.create({
  container: {
    flex: 1,//Ocupa todo el espacio disponible.
    backgroundColor: '#D3D3D3',
    padding: 20,
  },

  searchContainer: {
    flexDirection: 'row', // Coloca los elementos en línea horizontal.
    alignItems: 'center', // Alinea verticalmente al centro.
    marginBottom: 20,
    position: 'relative', // Asegura que el TextInput esté sobre la imagen
    marginTop: 40,
    borderBottomWidth: 2, // Borde inferior para dar estilo a la barra de búsqueda.
    borderBottomColor: '#000',
  },

  //Ajuestes de la imagen de búsqueda:
  searchImage: {
    width: 40, // Ajusta el ancho de la imagen.
    height: 40, // Ajusta el alto de la imagen.
    marginRight: 10, // Espacio entre la imagen y el TextInput.
  },

  searchInputOverlay: {
    flex: 1,
    fontSize: 24, // Ajusta el tamaño de letra para que sea consistente con "Recientes".
    fontWeight: 'bold',
    marginLeft: 10, // Ajusta para dar espacio al ícono de búsqueda.
    marginRight: 10,
    zIndex: 1, // Asegura que el TextInput esté sobre la imagen.
  },

  //Estilo para el título "Recientes":
  recentsTitle: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  //Contenedor de los ítems recientes:
  recentsContainer: {
    marginBottom: 20,
  },

  //Estilo de cada ítem reciente:
  recentItem: {
    backgroundColor: '#888', //Color del fondo gris.
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 40,//Bordes redondeados.
    marginBottom: 15,//Espacio entre los respectivos ítems.
    alignItems: 'center',
    alignItems: 'flex-start', // Alinea el texto a la izquierda.
    marginLeft: 0, // Elimina cualquier margen izquierdo.
    width: '90%', // Ajusta el ancho para que esté más cerca del borde izquierdo.
  },

  //Estilo del texto de cada ítem:
  recentText: {
    color: '#fff',
    fontSize: 36,
    fontWeight: 'bold',
  },
  footer: {
    alignItems: 'center',
    marginTop: 'auto',//Mueve el pie de página al final de la pantalla.
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#006400',
  },
  logoSubText: {
    fontSize: 14,
    color: '#006400',
  },


});

export default SearchScreen;

