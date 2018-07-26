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
      <OtherComponent {...props}/> {/* OtherComponent is able to recognize RenderMe. It is the bridge between RenderOther and RenderMe thanks to {...props} */}
    </div>
  )
};
// Other way. Better Way. Real Way. Useful Way.
// const RenderOtherToo = ({other: OtherComponent, ...rest}) => {
//   return (
//     <div>
//       <h1>I too am Render Other!!</h1>
//       <OtherComponent {...rest} />
//     </div>
//   );
// }


const RenderMe = (props) =>{
  return(
    <ul>
      <li>I am RenderMe. I am being passed to RenderOther as a property. Normally, I wouldn't be seen. However, I can be seen by RenderOther via the ...props thing in OtherComponent which is a component of RenderOther. </li>
      <br/><br/>
      <li>{props.text}</li>
    </ul>
  )
}
// Other way. Better Way. Real Way. Useful Way.
// class RenderMeToo extends React.Component {
//   render() {
//     return (
//       <div>
//         <h2>I am RenderMe. I am being passed to RenderOther as a property. Normally, I wouldn't be seen. However, I can be seen by RenderOther via the ...props thing in OtherComponent which is a component of RenderOther.</h2>
//       </div>
//     );
//   }
// }

export default App;
