import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { EjemploClase } from './classes/EjemploClase'; 
import Perrito from './classes/PerritoFuncion';
// si importamos default no necesitamos llaves
// podemos cambiarle de nombre si queremos
import Chucho, { PerritoRow } from './classes/PerritoFuncion';
import EjemploRequest from './classes/EjemploRequest';
import FunctionRequest from './classes/FuncionRequest';

// component
// - instanciable 
// - reutilizable
// componente es el elemento de construcción fundamental de react
// todas las UI están hechan de componentes
// todos los componentes están hechos de componentes más sencillos


// 2 maneras de definir componentes:
// 1 - por medio de función
// 2 - por medio de una clase 

export default function App() {

  // que es eso?!
  // JSX - javascript xml 
  // <PerritoRow nombre="Solovino" uri="http://4.bp.blogspot.com/-7R8yr5qhV8Q/UPFlZvJCB4I/AAAAAAAAI7s/f-CYwM5F6k4/s1600/puppy.jpg" />
  return (
    <View style={styles.container}>
      <EjemploFuncion />
      <EjemploClase nombre="Juan" edad="20" />
      <Chucho nombre="Firulais" edad="3" />
      <FlatList 
        data={[
          {nombre: "chucho1", uri: "http://4.bp.blogspot.com/-7R8yr5qhV8Q/UPFlZvJCB4I/AAAAAAAAI7s/f-CYwM5F6k4/s1600/puppy.jpg"}
        ]}
        renderItem={ ({item}) => {
          return (
            <PerritoRow nombre={item.nombre} uri={item.uri} />
          );
        }}
      />
      <EjemploRequest />
      <FunctionRequest />
      <StatusBar style="auto" />
    </View>
  );
}

// ejemplo de componente definido en función
function EjemploFuncion() {
  return (
    <Text>Ejemplo de componente en funcion</Text>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
