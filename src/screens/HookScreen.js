/*
Los Hooks pueden decirle a React que vuelva a ejecutar la función de nuestro componente y actualice la interfaz de usuario (renderice).
*/
import React from "react";
import { View, Text } from "react-native";
import UseState  from "../components/UseState";
import UseReduce from "../components/UseReducer";
import UseEffect from "../components/UseEffect";
import UseRef from "../components/UseRef";

const HookSreen = () => {
    return(
        <View>
            <Text> Hooks </Text>
            <UseState/> 
            {/* { UseReduce() }
            { UseEffect() }
            { UseRef() } */}
        </View>
    );
};

export default HookSreen;