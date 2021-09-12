import React from 'react';
import { View, Text, StyleSheet, Button } from "react-native";

import Box from '../components/StatelessComponent';
import ContainerBox from '../components/StateComponent';
import Hoc from '../components/Hoc';


const Box2 = (data) => {
    return(
        <View style={ {backgroundColor: 'red'} }>
            <Text>{data.data}</Text>
        </View>
    );
}

const componenteHocBox1 = Hoc(Box);
const componenteHocBox2 = Hoc(Box2);

const TypesOfComponents = () => {
    return (
        <View style= { styles.center }> 
            <Text> describe los distintos tipos de componentes que pueden crearse </Text>
            <Box data={'este es un componente sin estado'}/>
            <ContainerBox/>
            { componenteHocBox1 }
            { componenteHocBox2 }
            <Button
                title='boton'
                onPress={ () => {} }
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
    }
});

export default TypesOfComponents;