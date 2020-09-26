import React from "react";

class TagMenu extends React.Component {
    render() {
        return(
            <div className='tagMenu leftBar'>
                {this.props.notes.map((note, id)=> {
                    return(
                        <div key={note.uniqueId}>
                            <input type='radio' checked={this.props.currentNote==id} id={id} name="note" onChange={this.props.chooseNote}></input>
                            <label key={note.uniqueId} htmlFor={id}>
                                <div className='noteTitle'>{note.title}</div>
                                <div className='noteDescription'>{note.text.length>10? note.text.slice(0,10) + "...": note.text}</div>
                                <div className='noteLastChangeDate'>{note.lastChangeDate}</div>
                            </label>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default TagMenu;