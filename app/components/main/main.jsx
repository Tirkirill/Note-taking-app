import React from "react";
import Navbar from "./navbar.jsx";


class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Navbar user={this.props.user}/>
        )
    }
}

export default Main;