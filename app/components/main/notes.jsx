import React from "react";
import TagMenu from "./tagmenu.jsx";
import NoteRedactor from "./noteredactor.jsx";

let notes = [
    {
        title:"Job",
        text:"<div>Hello!</div>"
    },
    {
        title:"Jamie",
        text:"Россия!"
    }
]

class Notes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes:notes,
            currentNote:null
        }
        this.chooseNote = this.chooseNote.bind(this);
    }


    chooseNote(event) {
        this.setState({currentNote:event.target.id})
    }

    render() {
        return(
            <div className='grid notes'>
                <TagMenu notes={this.state.notes} chooseNote={this.chooseNote}/>
                {this.state.currentNote? <NoteRedactor note={this.state.notes[this.state.currentNote]}/>:<div className='rightBar'></div>}
            </div>
        )
    }
}

export default Notes;