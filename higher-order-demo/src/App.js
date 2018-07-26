import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <RenderOther 
       other = {RenderMe} // Here, a function component is being passed as a prop. The {RenderMe} isn't recognized but it is still being rendered as a part of RenderOther's JSX. Why? Go to line 26.
       text="More fuckin text"
       />
       
      </div>
    );
  }
}



const RenderOther = (props) => {
  const OtherComponent = props.other;
  return(
    <div>
      <h1>I am RenderOther!</h1>
      <OtherComponent {...props}/> {/* OtherComponent is able to recognize RenderMe. It is the bridge between RenderOther and RenderMe thanks to {...props}*/}
    </div>
  )
};



const RenderMe = (props) =>{
  return(
    <ul>
      <li>I am RenderMe. I am being passed to RenderOther as a property. I can be seen by RenderOther via the ...props thing in OtherComponent </li>
      <li>{props.text}</li>
    </ul>
  )
}

export default App;
