import React from 'react'; //this is like using require to pull in the React library
const App = () => {

  // React.createElement("h1", null, "hello");

  return ( 
  <div className = "container">
    <button> + </button>
    <div className = "counter-box">
    <div className = "counter">3</div>
    <div className = "counter">1</div>
    <div className = "counter">1</div>
    </div>
  </div>
  
  );
};

export default App;
