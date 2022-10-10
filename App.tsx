import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import { EjemploClase } from './classes/EjemploClase'; 
import Perrito from './classes/PerritoFuncion';
// si importamos default no necesitamos llaves
// podemos cambiarle de nombre si queremos
import Chucho, { PerritoRow } from './classes/PerritoFuncion';
import EjemploRequest from './classes/EjemploRequest';
import FunctionRequest from './classes/FuncionRequest';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// ESTO SE VA A UTLIZAR PARA LA NAVEGACION
const Stack = createNativeStackNavigator();

// component
// - instanciable 
// - reutilizable
// componente es el elemento de construcción fundamental de react
// todas las UI están hechan de componentes
// todos los componentes están hechos de componentes más sencillos


// 2 maneras de definir componentes:
// 1 - por medio de función
// 2 - por medio de una clase 

function Principal({navigation} : any) {

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
      <Button 
        title="NAVEGACION"
        onPress={() => {
          navigation.navigate("EjemploFuncion", {dato: "HOLA A TODOS!"});
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

export default function App() {

  return( 
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Principal"
          component={Principal}
        />
        <Stack.Screen 
          name="EjemploFuncion"
          component={EjemploFuncion}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// ejemplo de componente definido en función
function EjemploFuncion({ navigation, route }: any) {
  

  return (
    <Text>Ejemplo de componente en funcion: {route?.params.dato}</Text>
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
