/**
useEffect toma 2 argumentos:
callback: una función con efectos secundarios
dependencias: un array opcional que contiene valores de dependencia
Cuando se ejecuta el componente, se llamará al callback si 
alguna dependencia ha cambiado desde la última vez que se ejecutó el componente.
 */
import React, { useEffect, useState } from "react";
import { Button, View, Text } from "react-native";

const UseEffect = () => {
    const [ count, setCount ] = useState(0);
    const countEvery3 = Math.floor(count / 3);

    const dependecie = [ countEvery3 ]; // se verifica si cambia cada ves que se ejecuta el componente

    const callback = () => {            // si la dependecia cambio se ejecuta el callback
        console.log('callback 1 cuando cambia dependencia--->>', countEvery3);
    };

    useEffect( callback, dependecie );

    useEffect( () => {
        console.log('callback 2 un vez dependencia [] --->>');
    }, []); // []: el callbck se llama solo una vez, justo después de que el componente se renderiza por primera vez
    
    useEffect( () => {
        console.log('callback 3 siempre dependencia undefined -->>');
    }, undefined); // indefinido: se llama el callback en cada renderizado del componente

    return(
        <View>
            <Button
                title={ `Increment ${count}` }
                onPress={ () => { setCount( count + 1 ) } } 
                // cuando cambia de estado count, se vuelve a rederizar el componente y countEvery3
                // toma otro valor esto hace que useEffect ejecute el callback
            />                                             
        </View>
    );
};

export default UseEffect;
