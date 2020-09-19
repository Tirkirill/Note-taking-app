import React from "react";

class TagMenu extends React.Component {
    render() {
        return(
            <div className='tagMenu leftBar'>
                {this.props.notes.map((note)=> {
                    return(
                        <div>
                            <label for={note.title}>{note.title}</label>
                            <input type='radio' id={note.title} key={note.title}></input>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default TagMenu;