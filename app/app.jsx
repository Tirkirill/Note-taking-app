import React from "react";
import ReactDom from "react-dom";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import Main from "./components/main/main.jsx";
import Registration from "./components/forms/registration/registration.jsx";
import Login from "./components/forms/registration/login.jsx";

import firebase from "./backend/core";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user:null
        }
        firebase.auth().onAuthStateChanged((user)=> {
            sessionStorage.setItem('user', JSON.stringify(user));
            this.setState({ user: user});
        });
    }

    componentWillMount() {
        let user = JSON.parse(sessionStorage.getItem('user'));
        if (user) {
            this.setState({ user: user });
        }
    }

    render() {
        return(
            <Router>
                {!this.state.user && <Redirect to='/login'/>}
                <Switch>
                    {this.state.user && 
                        <Route exact path="/">
                            <Main user={this.state.user}/>
                        </Route>
                    }
                    <Route exact path="/registration">
                        <Registration />
                    </Route>
                    <Route exact path="/login">
                        <Login />
                    </Route>
                </Switch>
            </Router>
        )
    }
}

export default App;