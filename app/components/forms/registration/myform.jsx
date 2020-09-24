import React from "React";

class MyForm extends React.Component{
    constructor(props) {
        super(props);
        this.onClickHandler = this.onClickHandler.bind(this);
        this.emailInput = React.createRef();
        this.passwordInput = React.createRef();
    }

    onClickHandler() {
        if (!this.emailInput.current.validity.valid) {
            return
        }
        let email = this.emailInput.current.value;
        let password = this.emailInput.current.value;
        if (email.length > 5) {
            this.props.onClickHandler();
        }
        else {
            console.log("Ошибка");
        }
    }


    render() {
        return(
            <div className="formContainer">
                <div><h1>{this.props.title}</h1></div>
                <div className="form">
                    <input ref={this.emailInput} type="email" placeholder="Email"></input>
                    <input pattern="[A-Za-z-0-9]{6,}" ref={this.passwordInput} placeholder="Пароль (>6 символов)"></input>
                    <button className="formButton" onClick={this.onClickHandler}></button>
                    <div>Войти</div>
                </div>
            </div>
        )
    }
}

export default MyForm;