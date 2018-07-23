import React from 'react';

let savedText = "";






const InputBox = (props) => {
    return(
        // the onChange property is predefined. It watched for changes in the element. In this instance, it'll run the function, processInput
        <input onChange={(e) =>{
            props.handler(e.target.value);
        }}/>
    )}


export default InputBox;