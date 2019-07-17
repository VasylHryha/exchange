import React from "react";
import classNames from "classnames";

const InputBlock = ({children, className}) =>{
    return(
        <div className= {classNames('inputBlock', className)}>
            {children}
        </div>
    );
};



export default InputBlock;
