import React, {Component} from "react";


class DocumentEditor extends Component{
    render () {
        return (
        <div className="document-editor">
            <textarea value={this.props.note.content}/>
            </div>
        )
    }
}


export default DocumentEditor