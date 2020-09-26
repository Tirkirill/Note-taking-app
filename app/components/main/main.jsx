import React from "react";
import Navbar from "./navbar.jsx";
import Tagbar from "./tagbar.jsx";
import Notes from "./notes.jsx";
import getStringNowDate from "./js/getStringNowDate";
import database from "../../backend/database.js";

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
            user:props.user,
            notes:null,
            currentNote:null,
            suitableNotes:null,
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
        if (title!="") {
            target.value = "";
            let note = {title:title, text:"", lastChangeDate: getStringNowDate(), uniqueId: new Date().getTime()};
            database.ref(this.state.user.email.replace(".","")+"/"+note.uniqueId).set({
                ...note,
            })
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

    componentDidMount() {
        let dataNotes;
        let notes=[];
        database.ref(this.state.user.email.replace(".","")+"/").once('value').then(
            (value)=>{
                dataNotes = value.val();
                for (let i in dataNotes) {
                   let note;
                   note = {
                       ...dataNotes[i]
                   };
                   notes.push(note);
                }
                this.setState({
                    notes:notes,
                    suitableNotes:notes,
                })
            }
        );

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
        let newSuitableNotes = this.state.suitableNotes.slice();
        if (!this.state.currentNote) {
            return
        }
        let deletedNote = newSuitableNotes[this.state.currentNote];
        let uniqueId = deletedNote.uniqueId;
        database.ref(this.state.user.email.replace(".", "")+"/"+uniqueId).set(
            null
        )
        newSuitableNotes.splice(this.state.currentNote, 1);
        this.setState({
            notes: this.deleteNoteID(uniqueId),
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
        let uniqueId = newNotes[currentNote].uniqueId;
        let newDate = getStringNowDate();
        let newNote = {
            title:title,
            text:text,
            lastChangeDate:newDate,
            uniqueId: uniqueId
        }
        database.ref(this.state.user.email.replace(".","")+"/"+uniqueId).set(
            {
                ...newNote
            }
        )
        newNotes[currentNote].title = title;
        newNotes[currentNote].text = text;
        newNotes[currentNote].lastChangeDate = newDate;
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
            <div>
                {this.state.notes ?
                    <div className='mainFlexBox'>
                        <Navbar currentNote={this.state.currentNote} onSearchInputHandler={this.onSearchInputHandler} user={this.state.user} deleteNote={this.deleteNote}/>
                        <Tagbar currentNote={this.state.currentNote} addNote={this.addNote}/>
                        <Notes  currentNote={this.state.currentNote} chooseNote = {this.chooseNote} notes={this.state.suitableNotes} saveNote={this.saveNote}/>
                    </div>:<div className="fullContainer"><div className="loading">Загрузка</div></div>
                }
            </div>
        )
    }
}

export default Main;