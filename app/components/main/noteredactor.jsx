import React from "react";

class NoteRedactor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: props.note.text
        };
    }

    render(){
        return (
            <div className='noteRedactor rightBar'>
                <textarea className='redactor'
                    defaultValue={this.state.text}
                />
            </div>
        )
    }
}

export default NoteRedactor;