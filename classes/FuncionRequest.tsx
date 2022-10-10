import { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';


// RECORDATORIO - en los métodos de función se implementa sólo render

export default function FunctionRequest(){

    const[datos, setDatos] = useState([]);

    // PROBLEMA CON LOS COMPONENTES DE FUNCIÓN Y EL CÓDIGO ASÍNCRONO
    // cuando tenemos respuesta SI actualizamos un estado
    // se detona otra vez el método completo que a su vez tiene la lógica
    // Del request haciendo loop
    async function request() {

        var respuesta = await fetch("https://bitbucket.org/itesmguillermorivas/partial2/raw/45f22905941b70964102fce8caf882b51e988d23/carros.json");
        var json = await respuesta.json();
    
        console.log(json);
        console.log(json[1]);
        
        
        setDatos([
            {nombre: "chucho1", uri: "http://4.bp.blogspot.com/-7R8yr5qhV8Q/UPFlZvJCB4I/AAAAAAAAI7s/f-CYwM5F6k4/s1600/puppy.jpg"}
          ]);
        
    }

    // useEffect hook - 
    // registramos lógica para ser ejecutada post-render 
    // podemos ponerle prerequistos / detonadores

    useEffect(() => {
        request();    
    }, []);
     

    console.log("datos: " + datos.length);

    return (
        <View>
        {
            datos.length > 0?
                <View>
                    <Text>Vista cargada</Text>
                </View>
            :
                <ActivityIndicator size="large"/>
        }
        </View>
    );
}