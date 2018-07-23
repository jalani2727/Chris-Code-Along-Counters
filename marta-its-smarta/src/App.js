import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import MartaDashboard from "./MartaDashboard.js";

const MARTA_URL = 'https://my-little-cors-proxy.herokuapp.com/http://developer.itsmarta.com/RealtimeTrain/RestServiceNextTrain/GetRealtimeArrivals?apikey=2c514350-0c26-47dd-b872-7936af81c8e1'



class App extends Component {

  constructor(props){
    super(props);
  
    this.state ={
      data: []
    };

    
  }

componentDidMount(){
  fetch(MARTA_URL, {
    method: 'get'
}).then((response) => {
    // Can i just get the JSON data you sent back, Marta? ty <3
    return response.json()
}).then((jsonData) => {
    console.log(jsonData);
    this.setState({
      data: jsonData
    });
}).catch((err) => {
    // Error :(
});

}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <br/>
        <MartaDashboard />
      </div>
    );
  }
}

export default App;
