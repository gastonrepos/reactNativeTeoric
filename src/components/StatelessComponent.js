import React from 'react';
import { View, Text } from "react-native"

const Box = (data) => {    
    return (
        <View>
            <Text> {data.data} </Text>
        </View>
    );
};

export default Box;