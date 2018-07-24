import React, {Component} from 'react';



class DocumentList extends Component{
    render() {
        // What is happening here?
        // that allNotes property is an array. The map tacked noto the end is turning that array into something else. The parentheses are the instructors for how to tranform the array the way you want. The instructions are a function. The function is written with an implicit return but it doesnt have to be written this way.
        let items = this.props.allNotes.map(note =><li key={note.id}className="document-list-item">{note.title}</li>
        )

        return (
            <div className="document-list">
            <ul>
                {items}
            </ul>
            </div>
        )}
}

// A function component is like a
// "render-only" component.
// It can't have state.
// It doesn't have lifecycle methods like
// componentDidMount or constructor
// const DocumentEditor = (props) => {
//   return (
//     <div className="document-editor">
//       <textarea value="This is a note. See?" />
//     </div>
//   )
// }

 export default DocumentList;