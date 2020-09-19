import React from "react";
import Navbar from "./navbar.jsx";
import Tagbar from "./tagbar.jsx";
import Notes from "./notes.jsx";


class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className='mainFlexBox'>
                <Navbar user={this.props.user}/>
                <Tagbar />
                <Notes/>
            </div>
        )
    }
}

export default Main;