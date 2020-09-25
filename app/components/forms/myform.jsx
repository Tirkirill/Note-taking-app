import React from "React";
import {
    BrowserRouter as Router,
    NavLink,
    Link, Redirect
} from "react-router-dom";

class MyForm extends React.Component{
    constructor(props) {
        super(props);
        this.onClickHandler = this.onClickHandler.bind(this);
        this.emailInput = React.createRef();
        this.passwordInput = React.createRef();
        this.state = {
            loaded:false,
        }
    }

    onClickHandler() {
        let password = this.passwordInput.current.value;
        let email = this.emailInput.current.value;
        if (!this.emailInput.current.validity.valid || !this.passwordInput.current.validity.valid || 
            password == "" || email == "")  {
            return
        }
        this.props.onClickHandler(email, password);
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
                <div className="formLinkText">{this.props.formLinkText} <NavLink className='formLink' to={this.props.linkTo}>Нажмите сюда</NavLink></div>
            </div>
        )
    }
}

export default MyForm;