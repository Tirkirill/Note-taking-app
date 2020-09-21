import React, { createRef } from "react";

class Tagbar extends React.Component {
    constructor(props) {
        super(props);
        this.tagInput = React.createRef();
    }

    render() {      
        return (
            <div className='grid bar tagbar'>
                <div className='leftBar'>
                    <div className='tags'>Записи</div>
                </div>
                <div className='rightBar'>
                    <input ref={this.tagInput} className='addTagInput' placeholder="Заголовок новой записи"></input>
                    <button className='addTag' onClick={()=>{this.props.addNote(this.tagInput.current)}}></button>
                </div>
            </div>
        )
    }
}

export default Tagbar;