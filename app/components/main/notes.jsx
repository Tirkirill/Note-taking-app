import React from "react";
import TagMenu from "./tagmenu.jsx";

let notes = [
    {
        title:"Job",
        text:"fsdfdsfsf"
    },
    {
        title:"Jamie",
        text:"fsdgfsdfsdfsdf"
    }
]

class Notes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes:notes
        }
    }

    render() {
        return(
            <div className='grid notes'>
                <TagMenu notes={this.state.notes}/>
                <div className='noteRedactor rightBar'></div>
            </div>
        )
    }
}

export default Notes;