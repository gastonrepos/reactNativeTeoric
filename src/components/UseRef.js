/**
useRef crea y actualiza un único valor mutable que existe durante la vida útil 
de la instancia del componente.
 */
import React, { useRef, useState, useEffect } from "react";
import { Button, View, Text } from "react-native";

const UseRef = () => {
    const intervalRef = useRef();   // asignar la referencia a una variable
                                    // se usa .current para acceder al valor mutable.        

    const [ count, setCount ] = useState(0);

    const callback = () => {
        intervalRef.current = setInterval(() => setCount( count => count + 1 ), 1000); 
        // setInterval() permite ejecutar repetidamente una función en un intervalo establecido.
        // la ejecucion de esta funcion se le asigna a la variable intervalRef
    };

    const dependencie = [];

    useEffect( callback, dependencie );

    return(
        <View>
            <Button
                title='stop'
                onPress={ () => { clearInterval(intervalRef.current)} } // detiene el bucle cronometrado que se inició con el método setInterval()
            />
            <Text> { count } </Text>
            <Button
                title='go'
                onPress={ () => { intervalRef.current = setInterval(() => setCount( count => count + 1 ), 1000); } }
            />
        </View>
    );
};

export default UseRef;