import React from "react";

class NoteRedactor extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div className='noteRedactor rightBar'>
                <div contentEditable className='titleEditor'>{this.props.note.title}</div>
                <div contentEditable className='redactor'>{this.props.note.text}</div>
            </div>
        )
    }
}

export default NoteRedactor;