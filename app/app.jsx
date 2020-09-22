import React from "react";
import ReactDom from "react-dom";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, Redirect
} from "react-router-dom";
import Main from "./components/main/main.jsx";

class App extends React.Component {
    render() {
        return(
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Main user={{'email':'sherbakirill@mail.ru'}}/>
                    </Route>
                </Switch>
            </Router>
        )
    }
}

export default App;