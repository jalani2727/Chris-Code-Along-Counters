import React from 'react'; //this is like using require to pull in the React library
import Counter from "./Counter.js"; // the variable name isn't really referring to the variable name in the file you're importing from. It's just making a label for use in this file. The vairable name in this file doesnt have to match the variable name of what's being exported in the file that's being imported here


const App = () => {

  // React.createElement("h1", null, "hello");

  return ( 
  <div className = "container">
    <button> + </button>
    <div className = "counter-box">
    {/* here are 5 function calls */}
    {/* it looks like you;re giving a class to some html. but what's actually happening is you;re assigning a value that's picked up becuase it's being listened for in the definition of the counter function in the Counter.js file */}
    <Counter finalValue = "100" initialValue="42"/>
    <Counter finalValue = "100" initialValue="3"/>
    <Counter finalValue = "100" initialValue="18"/>
    <Counter finalValue = "100" initialValue="56"/>
    <Counter finalValue = "100" initialValue="29"/>


    </div>
  </div>
  
  );
};

export default App;
