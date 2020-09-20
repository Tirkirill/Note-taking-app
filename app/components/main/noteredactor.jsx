import React from "react";
import createCaretPlacer from "./js/createCaretPlacer";

class NoteRedactor extends React.Component {
    constructor(props) {
        super(props);
        this.saveIndicator= React.createRef();
        this.saveNoteButton = React.createRef();
        this.titleEditor = React.createRef();
        this.noteEditor = React.createRef(); 
        this.onInputHandler = this.onInputHandler.bind(this);
        this.caretPlacer = createCaretPlacer(false);
    }

    onInputHandler(e) {
        this.replaceAll(e.target);
        if (this.titleEditor.current.innerHTML == this.props.note.title && 
            this.noteEditor.current.innerHTML == this.props.note.text) {
                this.saveHandler();
        }
        else {
            this.notSavedHandler();
        } 
    }

    replaceAll(target) {
        target.innerHTML = target.innerHTML.replace("<br>", "\n");
        target.innerHTML = target.innerHTML.replace("<div>", "\n");
        target.innerHTML = target.innerHTML.replace("</div>", "");
        target.innerHTML = target.innerHTML.replace("&gt;", "\"");
        target.innerHTML = target.innerHTML.replace("&lt;", "\"");
        this.caretPlacer(target);
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


    onPasteHandler(e) {
        e.preventDefault();
        var text = e.clipboardData.getData("text/plain");
        document.execCommand("insertHTML", false, text);
    }

    render(){
        if (this.saveIndicator.current && this.saveNoteButton.current) {
            this.saveHandler();
        }
        return (
            <div className='noteRedactor rightBar'>
                <div ref={this.saveNoteButton} className='saveNoteButton saved' onClick={()=>this.props.saveNote(this.titleEditor.current.innerHTML, this.noteEditor.current.innerHTML)}></div>
                <span ref={this.saveIndicator} id='saveIndicator'>Сохранено</span>
                <div onPaste={this.onPasteHandler} ref={this.titleEditor} contentEditable suppressContentEditableWarning className='titleEditor' onInput={this.onInputHandler}>{this.props.note.title}</div>
                <div onPaste={this.onPasteHandler} ref={this.noteEditor} contentEditable suppressContentEditableWarning className='redactor' onInput={this.onInputHandler}>{this.props.note.text}</div>
            </div>
        )
    }
}

export default NoteRedactor;