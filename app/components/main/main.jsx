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
            notes:notes
        };
        this.addNote = this.addNote.bind(this);
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

    render() {
        return(
            <div className='mainFlexBox'>
                <Navbar user={this.props.user}/>
                <Tagbar addNote={this.addNote}/>
                <Notes notes={this.state.notes}/>
            </div>
        )
    }
}

export default Main;