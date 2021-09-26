/*
useReducer es similar a useState, pero nos brinda un enfoque más estructurado para actualizar valores complejos.
Normalmente usamos useReducer cuando nuestro estado tiene varios subvalores, p. Ej. un objeto que contiene claves que 
queremos actualizar de forma independiente.
*/

import React, { useReducer } from "react";
import { View, Text, Button, TextInput } from "react-native";

const reducer = (stateContador, action) => { 
    switch (action.type) {
        case 'first':
            return { ...stateContador, first: action.value };
        case 'last':
            return { ...stateContador, last: action.value };
    };
};

const UseReduce = () => {
    /*
    tiene 3 argumentos:
        reducer: función pura que toma un estado y una acción, y devuelve un nuevo valor de estado basado en la acción.
        initialState: cualquier valor de estado inicial.
        El argumento 3 es poco usado
    */
    const [ stateContador, dispatch ] = useReducer(reducer, { first: 1, last: 2 }); // useReducer devuelve el estado actual y una función dispatch para actualizar el estado.
    

    return(
        <View>
            <Text> state firts -- { stateContador.first } </Text>
            <Button
                title='change stateContador first'
                onPress={ () => dispatch({ type: 'first', value: stateContador.first += 1 }) }  
            />

            <Text> state last -- { stateContador.last } </Text>
            <Button
                title='change stateContador last'
                onPress={ () => dispatch({ type: 'last', value: stateContador.last += 1 }) }
            />

            <TextInput
                placeholder='first'
                value={ stateContador.first }
                onChangeText={ (data) => dispatch({ type: 'first', value: data }) }
            />

            <TextInput
                placeholder='last'
                value={ stateContador.last }
                onChangeText={ (data) => dispatch({ type: 'last', value: data }) }
            />

            <Text> { stateContador.first } / {stateContador.last } </Text>
        </View>
    );
};

export default UseReduce;