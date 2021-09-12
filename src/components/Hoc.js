import React from "react";

const Hoc = (AnyBox) => { 
    const dataDefinidaEnComponente = 'componente HOC'; 
    return(
        <AnyBox data={ dataDefinidaEnComponente }/>
    );
};

export default Hoc;