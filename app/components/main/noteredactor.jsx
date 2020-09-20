import React from "react";

class NoteRedactor extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div className='noteRedactor rightBar'>
                <div contentEditable suppressContentEditableWarning className='titleEditor'>{this.props.note.title}</div>
                <div contentEditable suppressContentEditableWarning className='redactor'>{this.props.note.text}</div>
            </div>
        )
    }
}

export default NoteRedactor;