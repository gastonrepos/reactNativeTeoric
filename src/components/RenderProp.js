import React, { Component, useState } from "react";

import { Text, View } from "react-native";

import Box from '../components/StatelessComponent';

const RenderProp = (props) => {        
    let [ counter, setCounter ] = useState(256);
    return(
        <View>
            { props(counter) }
        </View>
    );
};

export default RenderProp;