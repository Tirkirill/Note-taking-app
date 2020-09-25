import React from "react";
import MyForm from "../myform.jsx";
import firebase from "../../../backend/core";
import { Redirect, Router } from "react-router-dom";


class Registration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded:false
        }
        this.register = this.register.bind(this);
    }


    register(email, password) {
        firebase.auth().createUserWithEmailAndPassword(email, password).then(()=> {
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
                <MyForm title="Регистрация" linkTo="/login" formLinkText="Есть аккаунт?" onClickHandler={this.register}/>
            </div>
        )
    }
}

export default Registration;