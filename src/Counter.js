import React from 'react'; 
// const Counter = (props) => {
//     console.log(props/*"properties"*/);
//     return(
//         <div className = "counter">
//         {props.initialValue}
//         </div>
//     );
// };

class Counter extends React.Component{
    render() {
        return(
            <div className = "counter">
            3
            </div>
        );

}}

















// w/ object destructuring. adds the values you're looking for as arguments in place of props as the argument
const Counter = ({finalValue, initialValue}) => {
    // console.log(props/*"properties"*/);
    return(
        <div className = "counter">
        {initialValue} 
        </div>
    );
};
export default Counter;