import React from 'react';

import DocumentList from "./DocumentList";
import SearchBar from './SearchBar';
import DocumentEditor from './DocumentEditor';



class App extends React.Component {

constructor(props) {
  super(props);

  this.state = {
    selectedId: -1, //-1 means nothing is selected
    notes: [
      {
        id:10001,
        timestamp: new Date(),
        title: 'Woo!: A Novel',
        content:"WOO! - Ric Flair"
      },
      {
        id:10002,
        timestamp: new Date(),
        title: 'Woo! 2: A Sequel to "Woo!: A Novel"',
        content:'"woo!" - Ric Flair Jr.' 
      }
    ]
  }
}

  render() {
    return (
      <div className="notes-app">
        
        <SearchBar/> 
        <DocumentList allNotes={this.state.notes} handleSelection={this._selectNote} />

        <DocumentEditor note={this.state.notes[0]}/> 
        
       
      </div>
    );
  }
  // Chris recommends writing heper functions below the render
  _selectNote = (noteId) => {
    console.log(noteId);
    this.setState({
      selectedId: noteId
    })
  }
}





export default App;