import CampoTexto from "../../components/CampodeTexto";
import React, {useState, useEffect } from "react"

const NewActivityScreen = () => {
    const [name, setName] = useState(" ");
    const [date, setDate] = useState(" ");
    const [startTime, setStartTime] = useState(" ");
    const [endTime, setEndTime] = useState(" ");
    const [description, setDescription] = useState(" ");
    const [scholarshipHoursOffered, setscholarshipHoursOffered] = useState(" ");
    const [coordinator, setCoordinator] = useState(" ");
    const [maxCapacity, setMaxCapacity] = useState(0);
    const [location, setLocation] = useState(" ");
    const [multiplier, setMultiplier] = useState(0);
    const [publishedDate, setPublishedDate] = useState();
    const [department, setDepartment] = useState(" ");
        return (
          <View style={styles.container}>
            <CampoTexto
              label="Nombre de actividad"
              value={name}
              placeholder="#####"
              onChangeText={(value) => setName(value)}
            />
            <CampoTexto
              label="Fecha"
              value={date}
              placeholder="dd/mm/AA"
              onChangeText={(value) => setDate(value)}
            />
            <CampoTexto
              label="Hora de inicio"
              value={startTime}
              placeholder="23:59"
              onChangeText={(value) => setStartTime(value)}
            />
            <CampoTexto
              label="Hora de finalización"
              value={endTime}
              placeholder="23:59"
              onChangeText={(value) => setEndTime(value)}
            />
            <CampoTexto
              label="Coordinador"
              value={coordinator}
              placeholder="Nombre del coordinador"
              onChangeText={(value) => setCoordinator(value)}
            />
            <CampoTexto
              label="Descripción"
              value={description}
              placeholder="Descripción breve..."
              onChangeText={(value) => setDescription(value)}
              multiline={true} 
            />
            <CampoTexto
              label="Descripción"
              value={scholarshipHoursOffered}
              placeholder="Descripción breve..."
              onChangeText={(value) => setscholarshipHoursOffered(value)}
              multiline={true} 
            />
            <CampoTexto
              label="Cupo máximo"
              value={maxCapacity}
              placeholder="####"
              keyboardType="numeric" 
              onChangeText={(value) => setMaxCapacity(value)}
            />
            <CampoTexto
              label="Lugar"
              value={location}
              placeholder="CIT-350"
              onChangeText={(value) => setLocation(value)}
            />
            <CampoTexto
              label="Multiplicador"
              value={multiplier}
              placeholder="99999"
              keyboardType="numeric" 
              onChangeText={(value) => setMultiplier(value)}
            />
            <CampoTexto
              label="Fecha de publicación"
              value={publishedDate}
              placeholder="dd/mm/yyyy"
              onChangeText={(value) => setPublishedDate(value)}
      />
            <CampoTexto
              label="Departamento"
              value={department}
              placeholder="Departamento"
              onChangeText={(value) => setDepartment(value)}
            />
      
            <Button title="Publicar" onPress={() => onPublicar('submit')} color="#4CAF50" />
          </View>
        );
      };

      const styles = StyleSheet.create({
        container: {
          padding: 10,
          flex: 4,
          backgroundColor: "#fff",
          alignItems: "center",
          justifyContent: "center",
        },
        label: {
          color: '#4CAF50',
          fontSize: 16,
          marginBottom: 5,
        },
        input: {
          backgroundColor: '#dcedc8',
          borderRadius: 5,
          padding: 10,
          fontSize: 16,
          marginBottom: 15,
          width: '100%',
        },
        description: {
          height: 100,
          textAlignVertical: 'top',
        },
      });
export default NewActivityScreen;