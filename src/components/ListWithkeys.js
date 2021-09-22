/**
A cada componente de React se le puede pasar un prop especial llamado clave.
React usa esta clave para determinar la identidad del elemento renderizado.

conocer la identidad de los elementos es fundamental para el rendimiento y minimizar la manipulación 
de la interfaz de usuario. Por ejemplo, si el primer elemento de una lista de miles ya no se debe 
renderizar, React necesita alguna forma de detectarlo. En lugar de volver a renderizar miles de elementos,
React puede eliminar una sola 

La mayoría de las veces, no necesitamos considerar las claves porque React se encarga de ellas automáticamente.

ES MEJOR usar keys cuando renderizamos listas de elementos.

Incluso podemos obligar a un componente a volver a renderizar asignando una clave diferente (esto le dice a React que 
la identidad del elemento ha cambiado, lo que desencadena una nueva renderización).
*/

import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ListWithKeys = () => {
    const data = [
        { id: 'a', name: 'Devin' },
        { id: 'b', name: 'Gabbe' },
        { id: 'c', name: 'Kim' },
    ];
    
    const listWithoutKey = // react lo va a renderizar pero tira warnig en terminal por la falta de keys
        data.map((item) => {
            return(
                <Text> { item.name } </Text>
            );
        });
    
    const listWithCustomKeys = // usa el id de cada elemento como key
        data.map((item) => {
            return(
                <Text key={ item.id }> id of data - { item.id} - name - { item.name } </Text>
            );
        });

    /*
    Si los elementos de nuestros datos no tienen un identificador único de ningún tipo, 
    generalmente recurrimos al índice del elemento como clave.
    Esto silencia la advertencia de React sobre olvidar incluir claves, pero recuerde que hacer esto hará que 
    React identifique elementos incorrectamente si se modifican los datos: por ejemplo, si se inserta un nuevo elemento 
    al principio de la lista, obtendrá clave '0', que anteriormente pertenecía a otro elemento. 
    Por lo tanto, ES MEJOR que asigne identificadores o índices a su conjunto de datos si puede.
    */
    const listWithIndexElement = 
        data.map((item, index) => {
            return(
                <Text key={ index.toString() }> index of map - { index.toString() } - name - { item.name } </Text>
            );
        });

    return(
        <View>
            <Text style={ styles.text }> lista sin keys </Text>

            { listWithoutKey }

            <Text style={ styles.text }> lista con keys incluido en data </Text>

            { listWithCustomKeys }

            <Text style={ styles.text }> lista con index del mapeo </Text>

            { listWithIndexElement }
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        color: 'steelblue',
    }
});

export default ListWithKeys; 