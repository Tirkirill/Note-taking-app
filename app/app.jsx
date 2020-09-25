import React from "react";
import ReactDom from "react-dom";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, Redirect
} from "react-router-dom";
import Main from "./components/main/main.jsx";
import Registration from "./components/forms/registration/registration.jsx";
import Login from "./components/forms/registration/login.jsx";

class App extends React.Component {
    render() {
        return(
            <Router>
                <Redirect to="/registration"/>
                <Switch>
                    <Route exact path="/">
                        <Main user={{'email':'sherbakirill@mail.ru'}}/>
                    </Route>
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