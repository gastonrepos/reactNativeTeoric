// importamos useState, el hook para crear un state en nuestro componente
import React, { useState } from "react";
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';


const ConatdorFunctional = () => {
    // useState recibe un parámetro: el valor inicial del estado (que será 0)
    // y devuelve un array de dos posiciones:
    // la primera (counter), tiene el valor del estado
    // la segunda (setCounter), el método para actualizar el estado
    let [ counter, setCounter ] = useState(0);

    const handlerUp = () => {
        setCounter( counter += 1 )
    };

    const handlerDown = () => {
        setCounter( counter -= 1 )
        if (counter < 0) {
            alert("no num negativos");
            setCounter( counter = 0);
        } 
    };

    // cada vez que actualice el estado interno del componente, 
    // este se volverá a renderizar para plasmar los cambios.
    return(
        <View style={ styles.container }>
            
            <TouchableOpacity
                onPress={ () => { handlerUp() } }
            >
                <Text> UP </Text>
            </TouchableOpacity>

            <Text> { counter } </Text>

            <TouchableOpacity
                onPress={ () => { handlerDown() } } 
            >
                <Text> DOWN </Text>
            </TouchableOpacity>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default ConatdorFunctional;