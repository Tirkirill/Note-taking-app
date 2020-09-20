import React from "react";

class TagMenu extends React.Component {
    render() {
        return(
            <div className='tagMenu leftBar'>
                {this.props.notes.map((note, id)=> {
                    return(
                        <div>
                            {this.props.currentNote==id? <input type='radio' checked id={id} key={note.uniqueId} name="note" onChange={this.props.chooseNote}></input>
                            :<input type='radio' id={id} key={note.uniqueId} name="note" onChange={this.props.chooseNote}></input>}
                            <label htmlFor={id}>
                                <div className='noteTitle'>{note.title}</div>
                                <div className='noteDescription'>{note.text.length>20? note.text.length.slice(20) + "...": note.text}</div>
                            </label>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default TagMenu;