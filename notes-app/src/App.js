import React from 'react';

import DocumentList from "./DocumentList";
import SearchBar from './SearchBar';
import DocumentEditor from './DocumentEditor';


class App extends React.Component {
  render() {
    return (
      <div className="notes-app">
        
        <SearchBar/> 
        <DocumentList/>

        <div className="document-editor">
        <DocumentEditor/> 
        
        </div>
      </div>
    );
  }
}

export default App;