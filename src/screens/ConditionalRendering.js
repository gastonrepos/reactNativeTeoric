/**
un componente puede devolver varias cosas. Valores válidos:

- Un elemento de react
- falso, nulo o indefinido para no representar nada
- Una variedad de cualquiera de estos
 */

import React from "react";
import { View } from "react-native";
import RenderingWithAnd from "../components/RenderingWithAnd";
import RenderingWithTernary from "../components/RenderingWithTernary?";
import RenderingWithIfElse from '../components/RenderingWith-if-else';

const ConditionalRendering = () => {
    return(
        <View>
            <RenderingWithAnd title='hay un boton' showbutton={ true }/>
            { RenderingWithAnd({ title: 'hay un boton', showbutton: true })}

            <RenderingWithTernary title='llamado como class' butonTitle='presioname'/>
            { RenderingWithTernary({ title: 'llamado como funcion', butonTitle:'usame'})}

            { RenderingWithIfElse( { title: 'title ¡¡¡' }) }
            <RenderingWithIfElse error={ true }/>
            { RenderingWithIfElse({ loading: true  }) } 

        </View>
    );
};

export default ConditionalRendering;
