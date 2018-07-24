import React from 'react';

import DocumentList from "./DocumentList";
import SearchBar from './SearchBar';
import DocumentEditor from './DocumentEditor';



class App extends React.Component {

constructor(props) {
  super(props);

  this.state = {
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
        <DocumentList allNotes={this.state.notes} />

        <div className="document-editor">
        <DocumentEditor/> 
        
        </div>
      </div>
    );
  }
}

export default App;