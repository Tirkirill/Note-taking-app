import React from "react";
import MyForm from "../myform.jsx";
import firebase from "../../../backend/core";
import { Redirect, Router } from "react-router-dom";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded:false
        }
        this.login = this.login.bind(this);
    }


    login(email, password) {
        firebase.auth().signInWithEmailAndPassword(email, password).then(()=> {
                this.setState(
                    {
                        loaded:true,
                    }     
                )
            }
        );
    }

    render() {
        return (
            <div>
                {this.state.loaded && <Redirect to="/"/>}
                <MyForm title="Вход" linkTo="/registration" formLinkText="Нет аккаунта?" onClickHandler={this.login}/>
            </div>
        )
    }
}

export default  Login;