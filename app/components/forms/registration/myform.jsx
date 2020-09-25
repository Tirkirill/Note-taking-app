import React from "React";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, Redirect
} from "react-router-dom";

class MyForm extends React.Component{
    constructor(props) {
        super(props);
        this.onClickHandler = this.onClickHandler.bind(this);
        this.emailInput = React.createRef();
        this.passwordInput = React.createRef();
    }

    onClickHandler() {
        let password = this.passwordInput.current.value;
        let email = this.emailInput.current.value;
        if (!this.emailInput.current.validity.valid || !this.passwordInput.current.validity.valid || 
            password == "" || email == "")  {
            return
        }
        this.props.onClickHandler();
    }


    render() {
        return(
            <div className="formContainer">
                <div><h1>{this.props.title}</h1></div>
                <div className="form">
                    <input ref={this.emailInput} type="email" placeholder="Email"></input>
                    <input pattern="[A-Za-z-0-9]{6,}" ref={this.passwordInput} placeholder="Пароль (>6 символов)"></input>
                    <button className="formButton" onClick={this.onClickHandler}></button>
                </div>
                <div className="formLink">Есть аккаунт? <Link to="">Нажмите сюда</Link></div>
            </div>
        )
    }
}

export default MyForm;