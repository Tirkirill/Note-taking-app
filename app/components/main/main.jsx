import React from "react";
import Navbar from "./navbar.jsx";
import Tagbar from "./tagbar.jsx";
import Notes from "./notes.jsx";

let notes = [
    {
        title:"Job",
        text:"Hello!",
        uniqueId:"0"
    },
    {
        title:"Jamie",
        text:"Россия!",
        uniqueId:"1"
    }
]


class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes:notes,
            currentNote:null
        };
        this.addNote = this.addNote.bind(this);
        this.saveNote = this.saveNote.bind(this);
        this.chooseNote = this.chooseNote.bind(this);
        this.deleteNote = this.deleteNote.bind(this);
    }

    addNote(title) {
        if (title!="") {
            this.setState(
                {
                    notes:[...(this.state.notes.concat({title:title, text:""}))]
                }
            )
        }
    }

    deleteNote(id) {
        let newNotes = this.state.notes;
        newNotes.splice(id, 1);
        if (id == this.state.currentNote) {
            this.setState({
                notes:newNotes,
                currentNote:null
            })
        }
        else {
            this.setState({
                notes:newNotes
            })
        }
    }

    chooseNote(event) {
        this.setState({
            currentNote:event.target.id
        })
    }

    saveNote(title, text, currentNote) {
        let newNotes = this.state.notes.slice();
        newNotes[currentNote] = {title:title, text:text, uniqueId: newNotes[currentNote]};
        this.setState({
            notes:newNotes
        })
    }

    render() {
        
        return(
            <div className='mainFlexBox'>
                <Navbar currentNote={this.state.currentNote} user={this.props.user} deleteNote={this.deleteNote}/>
                <Tagbar currentNote={this.state.currentNote} addNote={this.addNote}/>
                <Notes chooseNote = {this.chooseNote} currentNote={this.state.currentNote} notes={this.state.notes} saveNote={this.saveNote}/>
            </div>
        )
    }
}

export default Main;