import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity} from 'react-native';

class ContadorClass extends Component {
    // state = {}; esta es otra forma de iniciar el state del componente

    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
        };
        this.handlerUp = this.handlerUp.bind(this); // esta es una buena practica para con los metodos de 
                                                    // una clase. asi accede a los "this" de la clase
    };                                              

    handlerUp() {
        let { counter } = this.state;
        this.setState({ counter: counter + 1 }); // cada ves que se setea un cambio de state local el componente se renderiza  
    };

    // setState puede tener dos parametros, el primero es el objeto que cambia el state y el segundo
    // una funcion de callback que se ejecuta cuando cambie el state del primer parametro
    handlerDown = () => {
        let { counter : ct } = this.state;  // { counter: tc } hace un alias, renombra counter
        ct > 0 ? this.setState({ counter: ct - 1 }) : this.setState({ counter: 0 }, alert('no num negativos'));
    };

    render() {
        const { counter } = this.state;
        return(
            <View style={ styles.container}>
                <View style={ styles.subContainer }>
                    <TouchableOpacity
                        style= { styles.button }
                        onPress={ this.handlerUp } // como es un componente de clase sus metodos declarados se pasan con "this"
                    > 
                        <Text> UP COUNT </Text>
                    </TouchableOpacity>

                    <Text> { counter }  </Text>

                    <TouchableOpacity
                        style={ styles.button }
                        onPress={ () => this.handlerDown() }
                    > 
                        <Text> DOWN COUNT </Text>
                    </TouchableOpacity>
                    
                </View>
            </View>
        );
    }
};

const  styles = StyleSheet.create({
    container: {
        flex:2,
        backgroundColor: '#2c3e50',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
    },

    subContainer: {
        flexDirection: 'row',
        height: 80,
        width: '100%',
        backgroundColor: '#2c3e20',
        alignItems: 'center',
        justifyContent: 'center',
    },

    button: {
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#DDDDDD',
    },

});

export default ContadorClass