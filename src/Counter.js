import React from 'react';

// Rule #1: extend React.Component
class Counter extends React.Component {
  // Rule #4: accept props in the
  // constructor method
  // In Python, this is __init__
  constructor(props){
    super(props);

    // State is *my* stuff.
    // It is always an object.
    this.state = {
      currentValue: props.initialValue
    };
    setInterval(this._increaseValue, 1000);
  }

// Advice from Chris: Always write helper functions as arrow functions
// Helps keeps bugs away
  _increaseValue = () => {
    //   calculate the new current value, 
    let newCurrentValue = this.state.currentValue +1;
    // then set the new current value in state
    // but, i must call this.stState
    this.setState({
        currentValue: newCurrentValue
    })
  }

  // Rule #2: must have render method
  render() {
    // Rule #3: must return some JSX
    // or a call to React.createElement
    return (
      <div className='counter'>
        {this.state.currentValue}
      </div>
    );
  }
}




















// Counter is a React Component
// const Counter = ({
//   finalValue,
//   initialValue
// }) => {
//   // console.log(props);
//   return (
//     <div className='counter'>
//       {initialValue}
//     </div>
//   );
// };

export default Counter;