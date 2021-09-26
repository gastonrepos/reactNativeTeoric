/*
useState le dice a React que vuelva a ejecutar nuestra función de componente cada vez que llamemos a setRoll con un valor diferente.
*/
import React, { useState } from "react";
import { Button, Text, View } from "react-native";

const UseState = () => {
    const [roll, setRoll] = useState([0]);                       // establece un array para el state roll
    const [ state, setState ] = useState({ first: 1, last: 2 }); // establece un objeto en state

    const [txt, setTxt] = useState('hola');

    const newRoll = () => {
        const randomValue = Math.floor(Math.random() * 6) + 1;
        return [randomValue];
    };

    const btnRoll = <Button
        title='roll'
        onPress={
            () => setRoll([...roll, newRoll()]) // al usar un array, y solo cambiamos su contenido, useState no detectará ese cambio,
                                                // no le dirá a React que vuelva a ejecutar nuestra función de componente.
                                                // por eso es necesario crear un nuevo array para que detecte los cambios y renderice
        }
    />

    const texto = <Text> txt - { txt } </Text>

    const newStateFirts = (state) => {  // al usar un objeto ocurre igual que en un array, pero cada atributo se debe cambiar por un metodo especifico
        return state.first += 1;        // Esto se soluciona usando useReducer
    };

    const newStateLast = (state) => {
        return state.last += 1;
    };

    return(
        <View>
            { btnRoll }

            <Button
                title='roll'
                onPress={ () => setRoll([ ...roll, newRoll() ]) }
            />

            <Text> roll - { roll } </Text>

            <Button
                title='texto'
                onPress={() => txt === 'hola' ? setTxt('chau') : setTxt('hola')}
            />

            { texto }

            <Button
                title='change state first'
                onPress={() => setState({...state, first : newStateFirts(state) })}
            />
            
            <Text> { state.first } </Text>

            <Button
                title='change state last'
                onPress={() => setState({...state, last : newStateLast(state) })}
            />

            <Text> { state.last } </Text>
        </View>
    );
};

export default UseState;