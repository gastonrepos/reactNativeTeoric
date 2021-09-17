import React from 'react';
import { View, Text, StyleSheet, Button } from "react-native";

import Box from '../components/StatelessComponent';
import ContainerBox from '../components/StateComponent';
import Hoc from '../components/Hoc';
import RenderProp from '../components/RenderProp';


const Box2 = (data) => {    
    return(
        <View style={ {backgroundColor: 'red'} }>
            <Text style={ {fontSize: 25 } }>{data.data}</Text>
        </View>
    );
}

const Box3 = (data) => {
    return(
        <View style={ {backgroundColor: 'blue'} }>
            <Text> Componente Render Prop { data } </Text>
        </View>
    )
};

const componenteHocBox1 = Hoc(Box);
const componenteHocBox2 = Hoc(Box2);

const TypesOfComponents = () => {
    return (
        <View style= { styles.center }> 
            <Text style={ styles.text }> describe los distintos tipos de componentes que pueden crearse </Text>

            <Box data={'este es un componente sin estado'}/>

            <ContainerBox/>

            { Hoc(Box) }
            { componenteHocBox1 }

            { Hoc(Box2) }
            { componenteHocBox2 }

            { RenderProp((data) =>  Box3(data)) }

            {/*
            Algunos componentes desencadenan eventos / callbacks (devoluciones de llamada) en respuesta a la entrada del usuario. 
            Para agregar un controlador de eventos, pase una función como props a un elemento React
            */}
            <Button
                title='boton'
                onPress={ () => {alert('apretaste un boton ¡¡¡')} }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    center: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    text: {
        color: 'rgb(59,108,212)',
        fontSize: 20,
        fontWeight: '100',
        textAlign: 'center',
    },
});

export default TypesOfComponents;