import React from "react";
import TagMenu from "./tagmenu.jsx";
import NoteRedactor from "./noteredactor.jsx";



class Notes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentNote:null
        }
        this.chooseNote = this.chooseNote.bind(this);
        this.saveNote = this.saveNote.bind(this);
    }

    saveNote(title, text) {
        this.props.saveNote(title, text, this.state.currentNote);
    }

    chooseNote(event) {
        this.setState({currentNote:event.target.id})
    }

    render() {
        return(
            <div className='grid notes'>
                <TagMenu notes={this.props.notes} chooseNote={this.chooseNote}/>
                {this.state.currentNote? <NoteRedactor note={this.props.notes[this.state.currentNote]} saveNote={this.saveNote}/>:<div className='rightBar'></div>}
            </div>
        )
    }
}

export default Notes;