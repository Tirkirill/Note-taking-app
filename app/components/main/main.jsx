import React from "react";
import Navbar from "./navbar.jsx";
import Tagbar from "./tagbar.jsx";
import Notes from "./notes.jsx";
import getStringNowDate from "./js/getStringNowDate";

let notes = [
    {
        title:"Job",
        text:"Hello!",
        uniqueId:"0",
        lastChangeDate:"12.09.2012 13:00"
    },
    {
        title:"Jamie",
        text:"Россия!",
        uniqueId:"1",
        lastChangeDate:"13.09.2012 12:00"
    }
]


class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes:notes,
            currentNote:null,
            suitableNotes:notes,
            query:""
        };
        this.addNote = this.addNote.bind(this);
        this.saveNote = this.saveNote.bind(this);
        this.chooseNote = this.chooseNote.bind(this);
        this.deleteNote = this.deleteNote.bind(this);
        this.onSearchInputHandler = this.onSearchInputHandler.bind(this);
    }

    addNote(target) {
        let title = target.value;
        target.value = "";
        if (title!="") {
            let note = {title:title, text:"", lastChangeDate: getStringNowDate()};
            if (title.includes(this.state.query)) {
                this.setState(
                    {
                        notes:[...(this.state.notes.concat(note))],
                        suitableNotes:this.state.suitableNotes.concat(note),
                    }
                )
            }
            else {
                this.setState(
                    {
                        notes:[...(this.state.notes.concat(note))],
                    }
                )
            }

        }
    }

    filterNotes(query) {
        let newSuitableNotes = [];
        if (this.state.suitableNotes == this.state.notes) {
            console.log("Equal");
        }
        for (let note of this.state.notes) {
            if (note.title.toLowerCase().includes(query)) {
                newSuitableNotes.push(note);
            }
        }
        return newSuitableNotes;
    }

    deleteNoteID(id) {
        let newNotes = this.state.notes.slice();
        let index;
        for (let i in newNotes) {
            if (newNotes[i].uniqueId == id) {
                index = i;
                break;
            }
        }
        newNotes.splice(index,1);
        return newNotes;
    }

    deleteNote() {
        let newSuitableNotes = this.state.suitableNotes;
        if (!this.state.currentNote) {
            return
        }
        let deletedNote = newSuitableNotes[this.state.currentNote];      
        newSuitableNotes.splice(this.state.currentNote, 1);
        this.setState({
            notes: this.deleteNoteID(deletedNote.uniqueId),
            suitableNotes:newSuitableNotes,
            currentNote:null
        })
    }

    chooseNote(event) {
        this.setState({
            currentNote:event.target.id
        })
    }


    saveNote(title, text, currentNote) {
        let newNotes = this.state.notes.slice();
        newNotes[currentNote].title = title;
        newNotes[currentNote].text = text;
        newNotes[currentNote].lastChangeDate = getStringNowDate();
        this.setState({
            notes:newNotes
        })
    }



    onSearchInputHandler(e) {
        let query = e.target.value.toLowerCase();
        if (query=="") {
            this.setState({
                query:"",
                suitableNotes:this.state.notes,
                currentNote:null
            });
            return
        }
        this.setState({
            query:query,
            suitableNotes:this.filterNotes(query),
            currentNote:null,
        })
        
    }

    render() {
        return(
            <div className='mainFlexBox'>
                <Navbar currentNote={this.state.currentNote} onSearchInputHandler={this.onSearchInputHandler} user={this.props.user} deleteNote={this.deleteNote}/>
                <Tagbar currentNote={this.state.currentNote} addNote={this.addNote}/>
                <Notes  currentNote={this.state.currentNote} chooseNote = {this.chooseNote} notes={this.state.suitableNotes} saveNote={this.saveNote}/>
            </div>
        )
    }
}

export default Main;