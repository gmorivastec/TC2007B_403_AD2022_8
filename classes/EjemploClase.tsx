
import { Component, ErrorInfo } from 'react';
import { Text, View, Button } from 'react-native';

export class EjemploClase extends Component {

    // 2 CONCEPTOS NUEVOS QUE APLICAN A LOS COMPONENTES
    
    // 1ero - props - propiedades, son valores que recibimos del exterior
    // y pueden ser utlizados dentro del componente
    // SIMILAR a parámetros de constructor
    
    // 2do - state - variables de estado, de uso interno del componente
    // SIMILAR a propiedades de clase 

    // constructor (para después)

    /* 1era parte 
        ****** MONTAJE / MOUNTING *****
    */

    // 1ero corremos constructor
    constructor(props: any){
        super(props);
        console.log("CONSTRUCTOR");

        // UTILIZANDO ESTADOS
        // sólo en el constructor se declaran de la siguiente manera
        this.state = {cuenta: 0, nombre: this.props.nombre};
    }

    // único método obligatorio
    // similar al build de flutter
    render() {
        console.log("RENDER");
        return(
            <View>
                <Text>Hola me llamo: {this.state.nombre} y tengo {this.props.edad} años.</Text>
                <Text>La cuenta actual es: {this.state.cuenta}</Text>
                <Button
                    title='Sumarle 1 a la cuenta'
                    onPress={() => {
                        // 2 opciones de firma para el método que recibe set state
                        // (state)
                        // (state, props)
                        this.setState(
                            (state) => {
                                return {cuenta: this.state.cuenta + 1};
                            }
                        ); 
                    }}
                />
            </View>
        ); 
    }

    // último método que se ejecuta como parte del montaje
    // se corre al momento de asegurarse que la interfaz está en orden
    componentDidMount(){
        console.log("COMPONENT DID MOUNT");
    }

    /* 2da parte 
        ****** ACTUALIZACIÓN / UPDATING *****
    */

    // método que se ejecuta internamente para determinar si hay necesidad de actualizar
    shouldComponentUpdate(nextProps: Readonly<{}>, nextState: Readonly<{}>, nextContext: any): boolean {
        // este método se ejecuta si hubo cambio de props / estado
        // podemos sobre escribir para casos especiales
        // ejemplo: cambio de estado que no afecta la interfaz gráfica

        console.log("SE DETONÓ LA VERIFICACIÓN DE UPDATE!");
        return true;
    }

    // se vuelve a informar que hubo un cambio en la estructura
    // de la interfaz
    componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any): void {
        console.log("COMPONENT DID UPDATE");
    }

    /* 3ra parte 
        ****** UNMOUNTING / DESMONTAJE *****
    */

    // método que se invoca al desmontarlo
    // úsalo para cerrar recursos abiertos, higiene
    componentWillUnmount(): void {
        console.log("SE VA A DESMONTAR");
    }

    // ÚLTIMO - no relacionado específicamente con alguno de los 3 momentos
    // se invoca si algún componente lanzo un error   
    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        console.log("ERRORCITO");
    }
}