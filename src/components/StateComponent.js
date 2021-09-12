import React from 'react';
import Box from './StatelessComponent';

const ContainerBox = () => {
    const dataDefinidaEnComponente = 'define data para pasar a un componente sin estado';
    return(
        <Box data={dataDefinidaEnComponente}/>
    );
};

export default ContainerBox;