import { useState } from 'react';
import { Text, View, Button, Image } from 'react-native';

// los componentes de función no tienen los métodos del ciclo de vida
// dónde entran las props y los estados?!?!
// props - argumentos
// estados - hooks

export default function Perrito(props: any) {

    // como inicializar estados por medio de hooks
    const[estaFeliz, setEstaFeliz] = useState(false);
    const[cuenta, setCuenta] = useState(0);

    return (
        <View>
            <Text>WOOF. {props.nombre} {props.edad} estoy {estaFeliz? "FELIZ :D" : "TRISTE :'("}</Text>
            <Text>Ladridos del día: {cuenta}</Text>
            <Button
                title="Cambiar estado de animo"
                onPress={ () => {
                    setEstaFeliz(!estaFeliz);
                }}
            />
            <Button
            
                title="WOOF."
                onPress={ () => {
                    setCuenta(cuenta + 1);
                }}
            />
        </View>
    );
}


export function PerritoRow(props: any) {

    return (
        <View>
            <Text>soy {props.nombre}</Text>
            <Image
                source={{uri: props.uri}}
                style={{width: 100, height: 100}}
            />
        </View>
    );
}