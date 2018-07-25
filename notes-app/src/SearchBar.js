import React, {Component} from "react";


class SearchBar extends Component{
    render() {
        return (
            <header>
          <h1>React Notes App</h1>
          <input type="text"
          value={this.props.text}
          onChange={(e) => {
            this.props.handleChange(e.target.value)
          }}/>       
        
        </header>
        )
    }
}




export default SearchBar;