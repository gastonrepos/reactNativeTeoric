import React, { useState } from "react";

import { View } from "react-native";

const RenderProp = (props) => {        
    let [ counter, setCounter ] = useState(256);
    return(
        <View>
            { props(counter) }
        </View>
    );
};

export default RenderProp;