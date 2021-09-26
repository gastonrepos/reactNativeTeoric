import React from "react";
import { View, Text, StyleSheet } from 'react-native';

const RenderingWithIfElse = ({ loading, error, title }) => {
    let content;

    if (error) {
        content =  <Text style={ styles.textError }> ERROR ¡¡¡ </Text>
    };

    if (loading) {
        content = <Text style={ styles.textLoading }> LOADING ¡¡¡ </Text>
    };

    if (title) {
        content = <Text style={ styles.textTitle }> { title } </Text>
    };
    
    return(
        <View>
            { content }
        </View>

    );
};

const styles = StyleSheet.create({
    textError: {
        fontSize: 30,
    },
    textLoading: {
        fontSize: 20,
    },
    textTitle: {
        fontSize: 25,
    },
});

export default RenderingWithIfElse;