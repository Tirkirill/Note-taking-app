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

    addNote(title) {
        let note = {title:title, text:"", lastChangeDate: getStringNowDate()};
        if (title!="") {
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
        for (let note of this.state.notes) {
            if (note.title.toLowerCase().includes(query)) {
                newSuitableNotes.push(note);
            }
        }
        return newSuitableNotes;
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
            currentNote:null
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