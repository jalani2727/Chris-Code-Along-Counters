import React from 'react'; //this is like using require to pull in the React library
import Counter from "./Counter.js"; // the variable name isn't really referring to the variable name in the file you're importing from. It's just making a label for use in this file. The vairable name in this file doesnt have to match the variable name of what's being exported in the file that's being imported here



function convertNumToCounter(obj) {
  return (
    <Counter key={obj.id} initialValue={obj.value}/>
  );
};


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      counterValues:[{id:54321, value:10}]
    }
  }
  _handleClick = () => {
    let newObj= {
      id:(new Date()).getTime(),
      value:0
    };
    this.setState({
      counterValues: this.state.counterValues.concat(newObj)
    });
  }


  render () {
    return (
      <div className = "container">
    <button onClick={this._handleClick}> + </button>
  
    <div className = "counter-box">

    {this.state.counterValues.map(convertNumToCounter)}

    </div>
  </div>
    )
  }
}



// const App = () => {

//   // React.createElement("h1", null, "hello");

//   return ( 
//   <div className = "container">
//     <button onClick={handleClick}> + </button>
//     <div className = "counter-box">

//   {counterElements}

//     </div>
//   </div>
  
//   );
// };

export default App;
