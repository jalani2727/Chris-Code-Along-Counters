import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './OutputBox.js';
import InputBox from './InputBox.js';
import OutputBox from './OutputBox.js';

class App extends Component {
  constructor(props) {
    super(props);
    // A list of the names of potential states that your components can start in
    this.state = {
      inputMessage: ''
    };
  }
  
  
  render() {
    return (
      <div className="App">
       
          <InputBox handler={this._handleInput}/>
          <OutputBox value={this.state.inputMessage} />
      </div>
    );
  }


  _handleInput = (text) => {
    console.log(text);
    this.setState({
      inputMessage: text
    });
  }     //funky syntax for making an anonymous function.
    

}

export default App;
