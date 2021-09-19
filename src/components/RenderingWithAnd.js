import React from "react";
import { Button, View, Text } from "react-native";

const RenderingWithAnd = ( { title, showbutton } ) => {
    return(
        <View>
        <Text style={ { fontSize: 30 } }> { title } </Text>
        {
            showbutton && 
            <Button title={ 'presioname' }/>
        }
    </View>
    );
};

export default RenderingWithAnd;