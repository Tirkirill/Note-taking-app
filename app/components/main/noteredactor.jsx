import React from "react";

class NoteRedactor extends React.Component {
    constructor(props) {
        super(props);
        this.saveIndicator= React.createRef();
        this.saveNoteButton = React.createRef();
        this.titleEditor = React.createRef();
        this.noteEditor = React.createRef(); 
        this.onInputHandler = this.onInputHandler.bind(this);
    }

    onInputHandler() {
        if (this.titleEditor.current.innerHTML == this.props.note.title && 
            this.noteEditor.current.innerHTML == this.props.note.text) {
                this.saveHandler();
        }
        else {
            this.notSavedHandler();
        }
        
    }

    saveHandler() {
        this.saveIndicator.current.innerHTML = "Сохранено";
        this.saveNoteButton.current.classList.add("saved");
        this.saveNoteButton.current.classList.remove("notSaved");
    }

    notSavedHandler() {
        this.saveNoteButton.current.classList.add("notSaved");
        this.saveNoteButton.current.classList.remove("saved");
        this.saveIndicator.current.innerHTML = "Не сохранено";
    }



    render(){
        if (this.saveIndicator.current && this.saveNoteButton.current) {
            this.saveHandler();
        }
        return (
            <div className='noteRedactor rightBar'>
                <div ref={this.saveNoteButton} className='saveNoteButton saved' onClick={()=>this.props.saveNote(this.titleEditor.current.innerHTML, this.noteEditor.current.innerHTML)}></div>
                <span ref={this.saveIndicator} id='saveIndicator'>Сохранено</span>
                <div ref={this.titleEditor} contentEditable suppressContentEditableWarning className='titleEditor' onInput={this.onInputHandler}>{this.props.note.title}</div>
                <div ref={this.noteEditor} contentEditable suppressContentEditableWarning className='redactor' onInput={this.onInputHandler}>{this.props.note.text}</div>
            </div>
        )
    }
}

export default NoteRedactor;