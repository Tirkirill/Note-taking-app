import React from "react";
import Navbar from "./navbar.jsx";
import Tagbar from "./tagbar.jsx";
import Notes from "./notes.jsx";

let notes = [
    {
        title:"Job",
        text:"Hello!",
        uniqueId:"0",
        lastChangeDate:"12.09.2012"
    },
    {
        title:"Jamie",
        text:"Россия!",
        uniqueId:"1",
        lastChangeDate:"13.09.2012"
    }
]


class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes:notes,
            currentNote:null,
            suitableNotes:notes
        };
        this.addNote = this.addNote.bind(this);
        this.saveNote = this.saveNote.bind(this);
        this.chooseNote = this.chooseNote.bind(this);
        this.deleteNote = this.deleteNote.bind(this);
        this.onSearchInputHandler = this.onSearchInputHandler.bind(this);
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

    getStringNowDate() {
        let now = new Date();
        let day = now.getDate().toString();
        let month = (now.getMonth()+1).toString();
        let hours = now.getHours().toString();
        let minutes = now.getMinutes().toString();
        if (day.length == 1) day = "0"+day;
        if (month.length==1) month="0"+month;
        if (hours.length==1) hours="0"+hours;
        if (minutes.length==1) minutes="0"+minutes;
        return day + "." + month + "." + now.getFullYear() + " " + hours + ":" + minutes;
    }


    saveNote(title, text, currentNote) {
        let newNotes = this.state.notes.slice();
        newNotes[currentNote].title = title;
        newNotes[currentNote].text = text;
        newNotes[currentNote].lastChangeDate = this.getStringNowDate();
        this.setState({
            notes:newNotes
        })
    }

    onSearchInputHandler(e) {
        let query = e.target.value;
        if (query=="") {
            this.setState({
                suitableNotes:notes
            });
            return
        }
        let newSuitableNotes = [];
        for (let note of this.state.notes) {
            if (note.title.includes(query)) {
                newSuitableNotes.push(note);
            }
        }
        this.setState({
            suitableNotes:newSuitableNotes
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