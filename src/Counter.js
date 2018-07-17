import React from 'react'; 
const Counter = ({finalValue, initialValue}) => {
    // console.log(props/*"properties"*/);
    return(
        <div className = "counter">
        {initialValue} 
        </div>
    );
};
export default Counter;