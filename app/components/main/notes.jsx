import React from "react";
import TagMenu from "./tagmenu.jsx";
import NoteRedactor from "./noteredactor.jsx";



class Notes extends React.Component {
    constructor(props) {
        super(props);
        this.saveNote = this.saveNote.bind(this);
    }

    saveNote(title, text) {
        this.props.saveNote(title, text, this.props.currentNote);
    }


    render() {
        return(
            <div className='grid notes'>
                <TagMenu currentNote={this.props.currentNote} notes={this.props.notes} chooseNote={this.props.chooseNote}/>
                {this.props.currentNote? <NoteRedactor note={this.props.notes[this.props.currentNote]} saveNote={this.saveNote}/>:<div className='rightBar'></div>}
            </div>
        )
    }
}

export default Notes;