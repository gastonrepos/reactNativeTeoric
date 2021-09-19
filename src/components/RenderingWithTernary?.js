import React from "react";
import { View, Text, Button } from "react-native";

// renderizar un elemento React diferente para cuando existe un prop y cuando no. 

const RenderingWithTernary = ({ title, butonTitle }) => {
    return(
        <View>
            <Text style={ { fontSize: 30 } }> { title } </Text>
            {
                butonTitle ? <Button title={ butonTitle }/> : null
            }
        </View>
    );
}; 

export default RenderingWithTernary;